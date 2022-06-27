import './App.css';
// import './custom.js';
// import 'index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "../src/pages/HomePage/Homepage";
import Dashboard from "../src/pages/Dashboard";
import Login from './pages/Login';
import Register from '../src/pages/Register'
import BankDetail from '../src/pages/BankDetails'
import BussinessDetail from './pages/BussinessDetails';
import PickupAddress from './pages/PickupAddress';
import Navbar from './components/header';
import Order from './pages/Order'
import OrderDetails from './pages/orderDetails'
// import Home from './pages/Home';
import Inventrory from './pages/Inventrory';
import ListProduct from './pages/ListProduct';
import EditProduct from './pages/EditProduct';
import ViewProduct from './pages/ViewProduct';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/order' element={<Order />} />
          <Route path='/order-details' element={<OrderDetails />} />
          <Route path="/list-product" element={<ListProduct />} />
          <Route path='/inventory' element={<Inventrory />} />
          <Route path='/inventory/edit' element={<EditProduct />} />
          <Route path='/inventory/view' element={<ViewProduct />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/bank-detail' element={<BankDetail />} />
          <Route path='/bussiness-detail' element={<BussinessDetail />} />
          <Route path='/pickup-address' element={<PickupAddress />} />j
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
