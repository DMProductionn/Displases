import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import { setCategory } from '../redux/Slices/Category';

import Home from '../../pages/Home';
import Layout from '../Layout';
import Error from '../Error';
import Category from '../../pages/Category/Category';
import SignUp from '../Account/SignUp';
import SignIn from '../Account/SignIn';
import ViewProduct from '../../pages/ViewProduct';
import Cart from '../../pages/Cart';
import Profile from '../../pages/Profile';
import Sale from '../../pages/Sale';
import NewCol from '../../pages/NewCol';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://65707bc209586eff66417bbf.mockapi.io/category').then((res) => {
      dispatch(setCategory(res.data));
    });
  }, []);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:id" element={<ViewProduct />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/newcol" element={<NewCol />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
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
