import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../pages/Shared/Loader/Loader';

export default function PrivateRoute({ children }) {
     const { user, loading } = useContext(AuthContext);
     const location = useLocation();

     if (loading) {
          return <Loader />
     }

     if (user) {
          return children;
     }

     return <Navigate to={"/auth/login"} state={{ from: location }} replace />
}
