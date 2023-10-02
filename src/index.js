import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//react day picker-css
import 'react-day-picker/dist/style.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from './contexts/AuthProvider';
import axios from 'axios';

//default url 
axios.defaults.baseURL = "http://localhost:5000";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
