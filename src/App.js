import './App.css';
// import 'index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../src/pages/Dashboard";
import Login from './pages/Login';
import Register from '../src/pages/Register'
import BankDetail from '../src/pages/BankDetails'
import BussinessDetail from './pages/BussinessDetails';
import PickupAddress from './pages/PickupAddress';
import Navbar from './components/header';
// import Home from './pages/Home';


function App() {
  return (
    <div >
      
      
      
        <BrowserRouter>
        <Navbar/>

        {/* <Routes>
        <Route path='/Home'>
          <Home/>
        </Route>
        </Routes> */}
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
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
