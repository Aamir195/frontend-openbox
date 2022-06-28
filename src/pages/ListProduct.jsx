import React from "react";
import { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
// import DataTableExtensions from "react-data-table-component-extensions";
// import Images from "../images/index";
import "react-data-table-component-extensions/dist/index.css";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import NewProduct from "./NewProduct";
// import "./listproductt.css";

var deep = 0;
const Listproduct = () => {

    const [subitem, setsubItem] = useState([]);
    const [item, setItem] = useState([]);
    const [category, setCategory] = useState([]);
    const [categoryId, setcategoryID] = useState();
    const [subcategoryId, setsubcategoryID] = useState();
    const [value, setValue] = useState("");
    const [subvalue, setsubValue] = useState("");

    useEffect(() => {
        fetchCategory();
    }, []);

    const handleChange = (e) => {
        setcategoryID(e.target.value);
        console.log(e.target);
        deep = e.target.value;
        setValue(e.target.value);
        fetchsubCategory(e.target.value);

    };

    const handlesubChange = (e) => {
        setsubcategoryID(e.target.value);
        console.log(e.target);
        setsubValue(e.target.value);
        console.log(deep)
        fetchProductByCatsubcatId(e.target.value, deep);
    };


    const fetchCategory = async () => {
        var result = await fetch(
            "http://localhost:9000/api/category/getAllCategory"
        );
        var temp = await result.json();
        console.log(temp);
        setItem(temp);
    };

    const fetchsubCategory = async (id) => {
        var result = await axios.post(
            "http://localhost:9000/api/subcategory/getsubCategoryByCategoryId",
            { categoryId: id }
        );
        var ans = await result.data;
        setsubItem(ans);
    };

    async function handleAdd(id) {

        //alert("add: "+id)
        return (
            <div>
                <NewProduct />
            </div>

        )
    }
    //fetch product bycategoryandsubcategory by id
    const [product, setProduct] = useState([]);

    const fetchProductByCatsubcatId = async (id, temp) => {
        var result = await axios.post(
            "http://localhost:9000/api/product/getProductbyCategoryIdsubCategoryId",
            { categoryId: temp, subCategoryId: id }
        );
        var ans = await result.data;
        console.log(result.data);
        setProduct(ans)
    };

    const userColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "productName", headerName: "productName", width: 200 },
        {
            field: "productDescription",
            headerName: "productDescription",
            width: 200,
        },
        { field: "color", headerName: "color", width: 300 },
        { field: "highlightFeature", headerName: "highlightFeature", width: 300 },
        //{ field: "description", headerName: "Description", width: 400}
    ];

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link
                            to={"/list-product/new/" + params.row.id}
                            style={{ textDecoration: "none" }}
                        >
                            <div className="btn1" onClick={() => handleAdd(params.row.id)}>Add To sell</div>  {/* className Changed  */}

                        </Link>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="datasub">
                    <div className="datasubTitle">
                        <h2> List your Product</h2>
                    </div>

                    <div className="bodycat ">


                        <Box className="datagrid-style">
                            {/* <label htmlFor="category" className="sr-only">
                            Select Category {categoryId}
                        </label> */}

                            <FormControl sx={{ m: 1, minWidth: 100 }}>
                                <InputLabel id="demo-simple-select-autowidth-label" >
                                    Sub-Category
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={value}
                                    label="Cat"
                                    style={{ width: 470 }}
                                    onChange={handleChange}
                                >
                                    {item.map((i) => (
                                        <MenuItem value={i.id} key={i.id}>
                                            {i.categoryName}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            {/* <label htmlFor="category" className="sr-only">
                             {subcategoryId}
                        </label> */}

                            <FormControl sx={{ m: 1, minWidth: 100 }}>
                                <InputLabel id="demo-simple-select-autowidth-label" >
                                    Sub-Category
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={subvalue}
                                    label="Cat"
                                    style={{ width: 470 }}
                                    onChange={handlesubChange}
                                >
                                    {subitem.map((i) => (
                                        <MenuItem value={i.id} key={i.id}>
                                            {i.subcategoryName}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            className="datagrid"
                            rows={product}
                            columns={userColumns.concat(actionColumn)}
                            pageSize={8}
                            rowsPerPageOptions={[10]}
                        //checkboxSelection
                        />
                    </Box>
                </div>
            </div>
        </div>

    );
};

export default Listproduct;