
import { IoHome } from "react-icons/io5";
import DashboardBox from "./components/dahsboardBox";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoCartSharp } from "react-icons/io5";
import { IoBagHandle } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import Button from '@mui/material/Button';
import { HiDotsVertical } from "react-icons/hi";
import { IoTimerOutline } from "react-icons/io5";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaStar } from "react-icons/fa";

import { FaEye } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { MyContext } from "../../App";

import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



export const data = [
    ["Day", "Hours per Day"],
    ["Week", 11],
    ["Month", 2],
    ["Year", 2],
    ["2Year", 2],
    ["Sleep", 7],
  ];
  
  export const options = {
    'backgroundColor': 'transparent',
  };

const Dashboard =()=>{
    
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

    return (
        <>
        <div className="right-content w-100 ">
            <h1 className="dash__title"><IoHome/> Dashboard</h1>
            <div className="row dashboardBoxWrapperRow">
                <div className="col-md-8">
                    <div className="dashboardBoxWrapper d-flex">
                        <DashboardBox color={["#1da256", "#48d483"]} 
                            icon={<HiMiniUserCircle/>} grow={true}/>
                        <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoCartSharp/>}/>
                        <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<IoBagHandle/>}/>
                        <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<BsStars/>}/>
                    </div>
                </div>
                <div className="col-md-4 pl-0">
                    <div className="box grapgBox">
                        <div className="d-flex align-items-center w-100 buttomEle">
                            <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                            <div className="ml-auto">
                                <Button className="ml-auto toggleIcon_dots" onClick={handleClick} >
                                    <HiDotsVertical/>
                                </Button>
                                <Menu
                                    className="dropdown_menu"
                                    MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    slotProps={{
                                    paper: {
                                        style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                        },
                                    },
                                    }}
                                >                        
                                    <MenuItem onClick={handleClose}>
                                    <IoTimerOutline/> Last Day
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <IoTimerOutline/> Last Week
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <IoTimerOutline/> Last Month
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <IoTimerOutline/> Last Year
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>

                        <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
                        <p>$3,578.90 in last month</p>
                            <Chart
                                chartType="PieChart"
                                width="100%"
                                height="200px"
                                data={data}
                                options={options}
                            />
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
                                    <th>UID</th>
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
                                    <td><Checkbox/>#1</td>
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
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
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

export default Dashboard;