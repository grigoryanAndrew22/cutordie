import React, { useEffect, useState } from 'react';
import './App.css';
import { Home } from './pages/home/Home';
import { Courses } from './pages/courses/Courses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
import { Aboutme } from './pages/aboutme/Aboutme';
import { NavbarRaw } from './components/navbarRaw/NavbarRaw';
import { Profile } from './pages/profile/Profile';
import { Course } from './pages/course/Course';
import { Policy } from './pages/policy/Policy';
import { PageNotFound } from './pages/pagenotFound/PageNotFound';
import { Footer } from './components/footer/Footer';

import Cookies from 'js-cookie';
import axios from 'axios';

// const ROUTES = [
//   {
//     path: '/',
//     sidebarName: 'Home',
//     component: Home,
//   },
//   {
//     path: '/courses',
//     sidebarName: 'Movies',
//     component: Courses,
//   },
// ];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    Cookies.set('language', 'en', { secure: true });
    Cookies.set('currency', 'usd', { secure: true });
  }, []);

  const currFromCookies: any = Cookies.get('currency');
  const langFromCookies: any = Cookies.get('language');

  const [currency, changeCurrency] = useState(currFromCookies);
  const [language, changeLanguage] = useState(langFromCookies);

  if (currency === 'undefined') {
    changeCurrency('usd');
  }
  if (language === 'undefined') {
    changeLanguage('en');
  }

  useEffect(() => {
    Cookies.set('language', language, { secure: true });
    Cookies.set('currency', currency, { secure: true });
  }, [language, currency]);

  const changeLang = (lang: string) => {
    Cookies.set('language', lang, { secure: true });
    changeLanguage(lang);
  };

  useEffect(() => {
    fetch('https://cut-or-die-api.onrender.com/api/v1/users/currentUser', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ jwt: Cookies.get('jwt') }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'fail') {
          setLoggedIn(false);
        } else {
          setLoggedIn(true);
        }
        setUserData(data.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='App'>
      <NavbarRaw
        language={language}
        loggedIn={loggedIn}
        changeLogin={setLoggedIn}
        setUser={setUserData}
      />
      <BrowserRouter>
        <Routes>
          {/* {ROUTES.map((route: any) => (
            <Route
              path={route.path}
              key={route.path}
              element={<route.component />}
            ></Route>
          ))} */}
          <Route
            path='/'
            element={<Home language={language} currency={currency} />}
          ></Route>
          <Route
            path='/courses'
            element={<Courses language={language} currency={currency} />}
          ></Route>

          <Route
            path='/aboutme'
            element={<Aboutme language={language} />}
          ></Route>
          <Route
            path='/profile'
            element={
              <Profile
                changeLogin={setLoggedIn}
                user={userData}
                language={language}
                changeLangHandler={changeLang}
                currency={currency}
                changeCurr={changeCurrency}
              />
            }
          ></Route>
          <Route
            path='/courses/course'
            element={
              <Course
                language={language}
                loggedIn={loggedIn}
                changeLogin={setLoggedIn}
              />
            }
          ></Route>
          <Route
            path='/policy'
            element={<Policy language={language} />}
          ></Route>
          <Route
            path='/404'
            element={<PageNotFound language={language} />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer
        language={language}
        changeLangHandler={changeLang}
        currency={currency}
        changeCurr={changeCurrency}
        bottomShadow={true}
      />
    </div>
  );
}

export default App;
