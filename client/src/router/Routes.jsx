import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Registration from "../pages/Registration"
import JobDetails from "../pages/JobDetails"
import UpdateJob from "../pages/UpdateJob"
import ErrorPage from "../pages/ErrorPage"
import AddJob from "../pages/AddJob"
import MyPostedJobs from "../pages/MyPostedJobs"
import PrivateRoute from "./PrivateRoute"
import MyBids from "../pages/MyBids"
import AllJobs from "../pages/AllJobs"
import BidRequests from "../pages/BidRequests"
const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
       
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: '/job/:id',
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: '/update/:id',
        element: (
<PrivateRoute>
<UpdateJob />
</PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: '/add-job',
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-posted-jobs',
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>

        ),
      },
      {
        path: '/my-bids',
        element: (
          <PrivateRoute>
            <MyBids></MyBids>
          </PrivateRoute>

        ),
      },
      
      {
        path: '/jobs',
        element: <AllJobs />,
      },
      
      {
        path: '/bid-requests',
        element: (
          <PrivateRoute>
            <BidRequests />
          </PrivateRoute>
        )
      }
    
    ],
}     
  ])
  
  export default router