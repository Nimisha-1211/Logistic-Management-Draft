import { useState } from 'react';
import Test from './pages/test';

import './App.css';

import AdminDashboard from "./pages/AdminDashboard";
import WarehouseDashboard from "./pages/WarehouseDashboard";
import DeliveryDashboard from "./pages/DeliveryDashboard";
import LoginPage from "./pages/LoginPage";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<LoginPage />} />
     <Route path="/admin" element={<AdminDashboard />} />
     <Route path="/warehouse" element={<WarehouseDashboard />} />
     <Route path="/delivery" element={<DeliveryDashboard />} />
     </Routes>
     </BrowserRouter>
     

    </>
  );
}

export default App;