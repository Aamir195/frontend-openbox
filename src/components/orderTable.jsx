import React from 'react';
import Images from '../images';
import { Switch } from '@mui/material';
import { Link } from 'react-router-dom';

export const columns = [
    {
      name: "Product Image",
      selector: "productImage",
      sortable: true
    },
    {
      name: "Product Name",
      selector: "productName",
      sortable: true
    },
    {
      name: "Quantity",
      selector: "quantity",
      sortable: true,

    },
    {
      name: "Price",
      selector: "price",
      sortable: true
    },
    {
      name: "Edit",
      selector: "edit",

    },
    // {
    //   name: "View",
    //   selector: "view",

    // },
    {
      name: "Enable/Disable",
      selector: "enb",

    },
  ];

  export const data = [
    {
      id: 1,
      productImage: <img src={Images.logo} alt="" srcset="" height={50} />,
      productName: "IPHONE 11",
      quantity: "123",
      price: "230000",
      edit:
        <Link to='/inventory/edit'><button type='button' className='btn btn-primary' >Edit</button></Link>,
      // view:
      //   <button type='button' className='btn btn-info' onclick = {naviagte('/inventory/view')}  >View</button>,
      enb: <>
        <div class="form-check">
          <Switch
            // checked={checked}
            // onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Disable
          </label>
        </div>
      </>

    },
    {
      id: 1,
      productImage: <img src={Images.logo} alt="" srcset="" height={50} />,
      productName: "IPHONE 11",
      quantity: "123",
      price: "230000"

    },
    {
      id: 2,
      productImage: <img src={Images.logo} alt="" srcset="" height={50} />,
      productName: "IPHONE 11",
      quantity: "123",
      price: "230000"

    },
    {
      id: 3,
      productImage: <img src={Images.logo} alt="" srcset="" height={50} />,
      productName: "IPHONE 11",
      quantity: "123",
      price: "230000"

    },
    {
      id: 4,
      productImage: <img src={Images.logo} alt="" srcset="" height={50} />,
      productName: "IPHONE 11",
      quantity: "123",
      price: "230000"

    },
    {
      id: 5,
      productImage: <img src={Images.logo} alt="" srcset="" height={50} />,
      productName: "IPHONE 11",
      quantity: "123",
      price: "230000"

    },

  ];