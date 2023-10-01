import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

export default function useAuth() {
     const authProvider = useContext(AuthContext);
     return authProvider;
}
