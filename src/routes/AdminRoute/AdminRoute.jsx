import { Navigate, useLocation } from 'react-router-dom';
import { useAdmin, useAuth } from '../../hooks';
import Loader from '../../pages/Shared/Loader/Loader';

export default function AdminRoute({ children }) {
     const { user, loading } = useAuth();
     const [isAdmin, isAdminLoading] = useAdmin();
     const location = useLocation();

     if (loading || isAdminLoading) {
          return <Loader />
     }

     if (user && isAdmin) {
          return children;
     }

     return <Navigate to="/" state={{ from: location }} replace ></Navigate>
};
