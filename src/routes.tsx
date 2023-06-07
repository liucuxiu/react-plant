import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import DeviceDetailPage from './pages/DeviceDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage/> },
      { path: 'devices/:id', element: <DeviceDetailPage/> }
    ]

  }
]);

export default router;