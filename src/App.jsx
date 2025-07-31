import { useState } from 'react';

import './App.css';

import AdminDashboard from "./pages/AdminDashboard";
import WarehouseDashboard from "./pages/WarehouseDashboard";
import DeliveryDashboard from "./pages/DeliveryDashboard";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <LoginPage />
      <AdminDashboard/>
      <WarehouseDashboard/>
     <DeliveryDashboard/> 
    </>
  );
}

export default App;