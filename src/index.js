import React from 'react';
import { StrictMode } from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import {
//   createBrowserRouter,
//   BrowserRouter,
//   RouterProvider,
//   Route,
// } from "react-router-dom";

import './index.css';
import App from './App';
// import Nav from './components/Nav';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   }
// ])

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)


