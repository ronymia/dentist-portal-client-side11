import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//react day picker-css
import 'react-day-picker/dist/style.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
