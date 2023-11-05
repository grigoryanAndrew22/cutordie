import React, { useEffect } from 'react';
import './App.css';
import { Home } from './pages/home/Home';
import { Courses } from './pages/courses/Courses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

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
  useEffect(() => {
    axios
      .get('https://cut-or-die-api.onrender.com/api/v1/users/currentUser', {
        withCredentials: true,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {/* {ROUTES.map((route: any) => (
            <Route
              path={route.path}
              key={route.path}
              element={<route.component />}
            ></Route>
          ))} */}
          <Route path='/cutordie' Component={Home}></Route>
          <Route path='/cutordie/courses' Component={Courses}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
