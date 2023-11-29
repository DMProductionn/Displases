import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import './App.css';

import Home from '../../pages/Home';
import Layout from '../Layout';
import Error from '../Error';
import Category from '../../pages/Category/Category';
import SignUp from '../Account/SignUp'
import SignIn from '../Account/SignIn'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} /> 
        <Route path='/category' element={<Category />} />  

        <Route path='/signup' element={<SignUp />} /> 
        <Route path='/signin' element={<SignIn />} />  
      </Route>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
