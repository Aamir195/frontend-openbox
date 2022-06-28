import './App.css';
// import './custom.js';
// import 'index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../src/pages/Dashboard";
import Login from './pages/Login';
import Register from '../src/pages/Register'
import BankDetail from '../src/pages/BankDetails'
import BussinessAddressDetails from './pages/BussinessAddressDetails';
import BussinessDetail from './pages/BussinessDetails';
import PickupAddress from './pages/PickupAddress';
import Navbar from './components/header';
import Order from './pages/Order'
import Orderdetails from './pages/orderDetails'
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import Inventory from './pages/Inventory';
import ListProduct from './pages/ListProduct';
import EditProduct from './pages/EditProduct';



function App() {
  return (
    <div >



      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exect path='/' element = {<Home/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          
          <Route path='/order' element={<Order />} />
          <Route path='/order-details/:id' element={<Orderdetails />} />
          <Route path="/list-product" element={<ListProduct />} />
          <Route path='/list-product/new/:id' element={<NewProduct />} />   {/* new product pages and route */}
         
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/inventory/edit/:id' element={<EditProduct />} />
          
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/bank-detail' element={<BankDetail />} />
          <Route path='/bussiness-detail' element={<BussinessDetail />} />
          <Route path='/bussiness-address' element={<BussinessAddressDetails />} />
          <Route path='/pickup-address' element={<PickupAddress />} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;