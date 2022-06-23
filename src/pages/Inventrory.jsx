import React from 'react'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
// import { useNavigate, Link } from "react-router-dom";
import {columns, data}  from '../components/orderTable'

function Inventrory() {
  // const naviagte = useNavigate();

  let id = localStorage.getItem('id');
  console.log(id)
  
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
              Your Listed Product  {id}
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
