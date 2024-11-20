
import { IoHome } from "react-icons/io5";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoCartSharp } from "react-icons/io5";
import { IoBagHandle } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import Button from '@mui/material/Button';
import { HiDotsVertical } from "react-icons/hi";
import { IoTimerOutline } from "react-icons/io5";
import MenuItem from '@mui/material/MenuItem';
import { useContext, useEffect, useState } from "react";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaStar } from "react-icons/fa";

import { FaEye } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { MyContext } from "../../App";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { styled, emphasize } from '@mui/material/styles';
import Chip  from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
import DashboardBox from "../Dashboard/components/dahsboardBox";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

///StyleBreadcrumb///
const StyleBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = theme.palette.mode === 'light'?
        theme.palette.grey[100] : theme.palette.grey[800];

        return{
            backgroundColor, Height: theme.spacing(3),
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightRegular,
            '&:hover, &:focus':{
                backgroundColor: emphasize(backgroundColor, 0.06),
            },
            '&:active':{
                boxShadow: theme.shadows[1],
                backgroundColor:emphasize(backgroundColor, 0.12)
            },
        };

});


const Products = ()=>{
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setShowBy] = useState('');
    const [showCatBy, setCatBy] = useState('');
    const [showBranBy, setBarnBy] = useState('');
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

    const context = useContext(MyContext);

    useEffect(()=>{
        context.setIsHideSidebarAndHeader(false);

        window.scrollTo(0,0);
    },[]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(        
        <>
        <div className="right-content w-100 ">
            <div className="card shadow border-0 w-100 flex-row p-4">
                <h5 className="mb-0"> Products List</h5>
                <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                    <StyleBreadcrumb
                        componet="a"
                        label="Dashboard"
                        href="#"
                        icon={<IoHome fontSize="small" />}
                    />
                    
                    <StyleBreadcrumb
                        componet="a"
                        label="Dashboard"
                        href="#"
                    />
                    <StyleBreadcrumb
                        label="Products"
                        detelIcon={<MdEdit/>}
                    />
                </Breadcrumbs>
            </div>


            <div className="row dashboardBoxWrapperRow dashboardBoxWrapperRowV2">
                <div className="col-md-12">
                    <div className="dashboardBoxWrapper dashboardBoxWrapperV2 d-flex">
                        <DashboardBox color={["#1da256", "#48d483"]} 
                            icon={<HiMiniUserCircle/>} grow={true}/>
                        <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoCartSharp/>}/>
                        <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<IoBagHandle/>}/>
                    </div>
                </div>                
            </div>

            <div className="card shadow border-0 p-3 mt-4">
                <h3 className="hd_text">Best Selling Products</h3>
                    <div className="row cardFilters mt-3">
                        <div className="col-md-3">
                            <h4>Show By</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showBy}
                                    onChange={(e)=>setShowBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-3">
                            <h4>Category By</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showCatBy}
                                    onChange={(e)=>setCatBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-3">
                            <h4>Brand By</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showBranBy}
                                    onChange={(e)=>setBarnBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead className="thead-dark align-items-center justify-content-center text-center">
                                <tr>
                                    <th><Checkbox/>UID</th>
                                    <th style={{ width:'170px' }}>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                    <th>STOCK</th>
                                    <th>RATNG</th>
                                    <th>ORDER</th>
                                    <th>SALES</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Checkbox/> #1</td>
                                    <td>
                                        <div className="d-flex align-content-center productsBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/01.webp"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <div style={{ width:'60px' }}>
                                            <del className="oldPrice">$19.00</del>
                                            <span className="newPrice text-danger">$19.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td><FaStar/> 4.9 (16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye/></Button>
                                            </Link>
                                            <Button className="success"  color="success"><MdEdit/></Button>
                                            <Button className="error"  color="error"><MdDelete/></Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="d-flex tableFooter">
                            <p>showing <b>12</b> of <b>60</b> results</p>
                            <Pagination count={10} color="primary" className="pagination" 
                                showFirstButton showLastButton />
                        </div>
                    </div>
            </div>        
        </div>

        
        </>

    )

}

export default Products;
