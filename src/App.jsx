// Importing required dependencies and pages
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Dashboard,
  ForgotPassword,
  Home,
  Login,
  NewPassword,
  NotFoundPage,
  ProjectDetails,
  Projects,
  Register,
  ResendLink,
  Settings,
  Success,
  Users,
} from './pages';
import 'sweetalert2/src/sweetalert2.scss' // Import SweetAlert2 styles
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLogged, setUserData } from './store/loginUser';
import { PrivateRoute } from './components';

/**
 * App Component
 * This component sets up the routing structure of the application using React Router.
 */

function App() {

  const dispatch = useDispatch() // Get dispatch function from Redux

  useEffect(() => {
    getDateFromLocal(); // Retrieve login data from local storage
  }, [])


  const getDateFromLocal = () => {
    dispatch(setUserData(JSON.parse(sessionStorage.getItem('userData'))))
    dispatch(setLogged(JSON.parse(sessionStorage.getItem('loginU'))))
  }


  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password/resend-link" element={<ResendLink />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/new-password/success" element={<Success />} />

        {/* Protected Routes */}
        <Route path="/projects" element={<PrivateRoute><Projects /></PrivateRoute>} />
        <Route path="/projects/project-details" element={<PrivateRoute><ProjectDetails /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />

        {/* Catch-All Route */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
