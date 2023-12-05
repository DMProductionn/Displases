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
import ViewProduct from '../../pages/ViewProduct';
import Cart from '../../pages/Cart'
import Profile from '../../pages/Profile';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} /> 
        <Route path='/category' element={<Category />} />  

        <Route path='/signup' element={<SignUp />} /> 
        <Route path='/signin' element={<SignIn />} />
        <Route path='/view'  element={<ViewProduct />}/>  
        <Route path='/cart'  element={<Cart />}/>  
        <Route path='/profile' element={<Profile />} />
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
