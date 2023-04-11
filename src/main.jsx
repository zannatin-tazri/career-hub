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
import SeeDetails from './Components/seeDetails/SeeDetails';
import ViewDetail from './Components/ViewDetail/ViewDetail';

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
  },
  {
     path:'viewDetail/:detailId',
     element:<ViewDetail></ViewDetail>,
     loader:({params})=>console.log(params.detailId)
  },
  {
    path:'/viewDetails',
    element: <SeeDetails></SeeDetails>,
    loader:(params)=>fetch('featuredJob.json')
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
