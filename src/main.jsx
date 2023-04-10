import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Layout/Home';
import Statistics from './Components/Statistics/Statistics';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import QuestionAnswer from './Components/Question-Answer/QuestionAnswer';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/statistics',
    element:<Statistics></Statistics>
  },
  {
    path:'/blog',
    element:<QuestionAnswer></QuestionAnswer>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
