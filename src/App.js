import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../src/pages/Dashboard";
import Login from './pages/Login';
import Register from '../src/pages/Register'
import BankDetail from '../src/pages/BankDetails'
import BussinessDetail from './pages/BussinessDetails';
import PickupAddress from './pages/PickupAddress';


function App() {
  return (
    <div className="App">
      <div className='container'>
      
        <BrowserRouter>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/register' element={<Register />} />
            <Route path='/bank-detail' element={<BankDetail />} />
            <Route path='/bussiness-detail' element={<BussinessDetail />} />
            <Route path='/pickup-address' element={<PickupAddress />} />j
          </Routes>
        </BrowserRouter>
       

      </div>
    </div>
  );
}

export default App;
