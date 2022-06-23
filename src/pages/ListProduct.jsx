import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions'
import Images from '../images/index';
import "react-data-table-component-extensions/dist/index.css";
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const columns = [
    {
        name: "Sr no.",
        selector: "sr",
        sortable: "true"
    },
    {
        name: "Product Image",
        selector: "productImage",
        sortable: "true"
    },
    {
        name: "Product Name",
        selector: "productName",
        sortable: "true"
    },
    {
        name: "Prodcuct Description",
        selector: "prodcuctDescription",
        sortable: "true"
    },
    {
        name: "Add to sell",
        selector: "addToSell",
        sortable: "true"
    },
]
const data = [
    {
        id: 1,
        sr: 1,
        productImag: <img src={Images.logo} alt="" srcset="" />,
        productName: "IPHONE 11",
        prodcuctDescription: "IPHONE 11 IS GOOD.",
        addToSell: <button type='button' className='btn btn-primary' > Add to sell</button>

    },
    {
        id: 2,
        sr: 2,
        productImag: <img src={Images.logo} alt="" srcset="" />,
        productName: "IPHONE 11",
        prodcuctDescription: "IPHONE 11 IS GOOD.",
        addToSell: <button type='button' className='btn btn-primary' > Add to sell</button>

    },
    {
        id: 3,
        sr: 3,
        productImag: <img src={Images.logo} alt="" srcset="" />,
        productName: "IPHONE 11",
        prodcuctDescription: "IPHONE 11 IS GOOD.",
        addToSell: <button type='button' className='btn btn-primary' > Add to sell</button>

    },
    {
        id: 4,
        sr: 4,
        productImag: <img src={Images.logo} alt="" srcset="" />,
        productName: "IPHONE 11",
        prodcuctDescription: "IPHONE 11 IS GOOD.",
        addToSell: <button type='button' className='btn btn-primary' > Add to sell</button>

    },
    {
        id: 5,
        sr: 5,
        productImag: <img src={Images.logo} alt="" srcset="" />,
        productName: "IPHONE 11",
        prodcuctDescription: "IPHONE 11 IS GOOD.",
        addToSell: <button type='button' className='btn btn-primary' > Add to sell</button>

    },
    {
        id: 6,
        sr: 6,
        productImag: <img src={Images.logo} alt="" srcset="" />,
        productName: "IPHONE 11",
        prodcuctDescription: "IPHONE 11 IS GOOD.",
        addToSell: <button type='button' className='btn btn-primary' > Add to sell</button>

    },
    {
        id: 7,
        sr: 7,
        productImag: <img src={Images.logo} alt="" srcset="" />,
        productName: "IPHONE 11",
        prodcuctDescription: "IPHONE 11 IS GOOD.",
        addToSell: <button type='button' className='btn btn-primary' > Add to sell</button>

    },
    {
        id: 8,
        sr: 8,
        productImag: <img src={Images.logo} alt="" srcset="" />,
        productName: "IPHONE 9",
        prodcuctDescription: "IPHONE 11 IS GOOD.",
        addToSell: <button type='button' className='btn btn-primary' > Add to sell</button>

    },
]
const tableData = {
    columns,
    data
};

function ListProduct() {


    const [category, setCategory] = useState([]);
    const [categoryId, setCategoryid] = useState('')
    // const [subCategory, setSubcategory] = useState([]);

    useEffect(() => {

        const getCategory = async () => {
            const resp = await fetch('http://localhost:9000/api/category/getAllCategory');
            const getCat = await resp.json();
            console.log(getCat)
            setCategory(await getCat);
        }
        getCategory();

    }, []);

    const handleCategory = (event) => {
        const getCategoryId = event.target.value;
        console.log(getCategoryId);
        setCategoryid(getCategoryId);
    }


    return (
        <div className="container">
            <div className="">
                <div className="row">
                    <div className="headingText">
                        <h2>List your Product </h2>
                    </div>
                </div>
                <div className='container'>
                    <div className="row">
                        <form className="form-inline">
                            <div className="col-md-6 col-sm-12 mb-2">
                                <div className="form-group">
                                    <label htmlFor="category" className="sr-only">Select Category {categoryId} </label>
                                    <select className="form-select" aria-label="Default select example" onChange={(e) => handleCategory(e)} >
                                        <option selected disabled >Select Category</option>
                                        {
                                            category.map((cat) => (
                                                <option key={cat.id} value={cat.id} >{cat.categoryName}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12 mb-2">
                                <div className="form-group">
                                    <label htmlFor="category" className="sr-only">Select Category</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option >Select Category</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">Show product</button>
                        </form>

                    </div>

                </div>
            </div>
            <hr />
            <div className="section">
                <div className="row">
                    <DataTableExtensions {...tableData}>
                        <DataTable
                            // title = "All Products"
                            columns={columns}
                            data={data}
                            defaultSortField="id"
                            defaultSortAsc={false}
                            pagination
                            highlightOnHover
                            fixedHeader
                            fixedHeaderScrollHeight='660px'
                        />
                    </DataTableExtensions>



                </div>
            </div>
        </div>
    )
}

export default ListProduct
