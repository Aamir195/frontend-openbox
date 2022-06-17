import React from 'react'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions'
import Images from '../images';
import "react-data-table-component-extensions/dist/index.css";
import {  Switch } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Inventrory() {
  const naviagte = useNavigate();

  const columns = [
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
  
  const data = [
    {
      id: 1,
      productImage: <img src={Images.logo} alt="" srcset="" height={50} />,
      productName: "IPHONE 11",
      quantity: "123",
      price: "230000",
      edit:
        <button type='button' className='btn btn-primary' onClick={naviagte('/inventory/edit')} >Edit</button>,
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
  const tableData = {
    columns,
    data
  };
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <h3>
              Your Listed Product
            </h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container">
          <div className="row">
            <DataTableExtensions {...tableData} >
              <DataTable
                columns={columns}
                data={data}
                defaultSortField="id"
                defaultSortAsc={false}
                pagination
                highlightOnHover
                fixedHeader
                fixedHeaderScrollHeight='660px' />
            </DataTableExtensions>
          </div>
        </div>
      </div>

    </>
  )
}

export default Inventrory
