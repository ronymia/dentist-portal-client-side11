import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../pages/Shared/Loader/Loader';
import { useAuth } from '../../hooks';

export default function PrivateRoute({ children }) {
     const { user, loading } = useAuth;
     const location = useLocation();

     if (loading) {
          return <Loader />
     }

     if (user) {
          return children;
     }

     return <Navigate to={"/auth/login"} state={{ from: location }} replace />
}
