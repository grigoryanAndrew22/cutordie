import React, { useEffect, useState } from 'react';
import './App.css';
import { Home } from './pages/home/Home';
import { Courses } from './pages/courses/Courses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { Aboutme } from './pages/aboutme/Aboutme';
import { NavbarRaw } from './components/navbarRaw/NavbarRaw';
import { Profile } from './pages/profile/Profile';
import { Course } from './pages/course/Course';
import { PaymentCard } from './components/paymentCard/PaymentCard';

const ROUTES = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home,
  },
  {
    path: '/courses',
    sidebarName: 'Movies',
    component: Courses,
  },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   axios
  //     .get('https://cut-or-die-api.onrender.com/api/v1/users/currentUser', {
  //       withCredentials: true,
  //     })
  //     .then((response) => console.log(response))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    fetch('https://cut-or-die-api.onrender.com/api/v1/users/currentUser', {
      method: 'GET', // or 'POST', 'PUT', etc.
      credentials: 'include', // this will include cookies
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'fail') {
          setLoggedIn(false);
        } else {
          setLoggedIn(true);
        }
        console.log(data);
        setUserData(data.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
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
            path="/cutordie"
            element={<Home loggedIn={loggedIn} changeLogin={setLoggedIn} />}
          ></Route>
          <Route
            path="/cutordie/courses"
            element={<Courses loggedIn={loggedIn} changeLogin={setLoggedIn} />}
          ></Route>

          <Route path='/cutordie/aboutme' Component={Aboutme}></Route>
          <Route
            path='/cutordie/profile'
            element={
              <Profile
                loggedIn={loggedIn}
                changeLogin={setLoggedIn}
                user={userData}
              />
            }
          ></Route>

          <Route
            path="/cutordie/courses/course"
            element={<Course loggedIn={loggedIn} changeLogin={setLoggedIn} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
