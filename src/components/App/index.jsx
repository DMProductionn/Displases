import React from 'react';
import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Error from '../Error';

export default function index() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}
