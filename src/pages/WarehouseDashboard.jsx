import React, { useState } from 'react';
import '../styles/WarehouseDashboard.css';

function WarehouseDashboard() {
  const [inventory, setInventory] = useState([]);
  const [item, setItem] = useState("");
  const [notifications, setNotifications] = useState(["Low stock: Item-A"]);

  const addItem = () => {
    if (item.trim()) {
      setInventory([...inventory, item]);
      setItem("");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Sidebar */}
        <div className="col-md-3 sidebar bg-light p-3">
          <h4>Warehouse Manager</h4>
          <ul className="nav flex-column">
            <li className="nav-item"><a className="nav-link" href="#">Manage Inventory</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Inbound/Outbound</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Request Driver</a></li>
            <li className="nav-item"><a className="nav-link" href="#">View Shipments</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Notifications</a></li>
            <li className="nav-item"><a className="nav-link text-danger" href="#">Logout</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9 main-content">
          <h3>Manage Inventory</h3>
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter item name" 
              value={item}
              onChange={(e) => setItem(e.target.value)} 
            />
            <button className="btn btn-primary" onClick={addItem}>Add Item</button>
          </div>
          <ul className="list-group mb-4">
            {inventory.map((inv, idx) => (
              <li className="list-group-item" key={idx}>{inv}</li>
            ))}
          </ul>

          <h3>Request Driver</h3>
          <form className="mb-4">
            <div className="mb-3">
              <label className="form-label">Shipment ID</label>
              <input type="text" className="form-control" placeholder="Enter Shipment ID"/>
            </div>
            <button type="submit" className="btn btn-success">Request</button>
          </form>

          <h3>Notifications</h3>
          <ul className="list-group">
            {notifications.map((note, i) => (
              <li key={i} className="list-group-item list-group-item-warning">{note}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default WarehouseDashboard;
