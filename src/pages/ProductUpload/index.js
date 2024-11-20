
import { IoHome } from "react-icons/io5";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { styled, emphasize } from '@mui/material/styles';
import Chip  from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { MdCloudUpload } from "react-icons/md";


import { useState } from "react";

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
                backgroundColor: emphasize(backgroundColor, 0.12),
            },
        };

});

const ProductUpload = ()=>{

    const [categoryVal, setCategoryVal] = useState('');
    const [ratingsValue, setRatingsValue] = useState(1);
    const [brandVal, setBrandVal] = useState('');

    const handleChangeCategory = (event) => {
        setCategoryVal(event.target.value);
    };
    const handleChangebrand = (event) => {
        setBrandVal(event.target.value);
    };

    return(
        <>
        <div className="right-content w-100 ">
            <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0"> Products New Upload</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                        <StyleBreadcrumb
                            componet="a"
                            label="Dashboard"
                            href="#"
                            icon={<IoHome fontSize="small" />}
                        />
                        
                        <StyleBreadcrumb
                            componet="a"
                            label="Products"
                            href="#"
                        />
                        <StyleBreadcrumb
                            label="Products Upload"
                        />
                    </Breadcrumbs>
            </div>

            <form className='form'>
                <div className='row'>
                    <div className='col-sm-9'>
                        <div className='card p-4'>
                            <h5 className='mb-4'>Basic Information</h5>
                            <div className='form-group'>
                                <h6>Product Name</h6>
                                <input type='text' />
                            </div>
                            <div className='form-group'>
                                <h6>Description</h6>
                                <textarea row={5} cols={10}></textarea>
                            </div>

                            <div className='row'>
                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>Category</h6>
                                            <Select
                                                value={categoryVal}
                                                onChange={handleChangeCategory}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                                >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>Brand</h6>
                                            <Select
                                                value={brandVal}
                                                onChange={handleChangebrand}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                                >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                    </div>
                                </div>                               
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>Regular Price</h6>
                                            <input type='text' />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>Discount Price</h6>
                                            <input type='text' />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>Rating</h6>
                                        <Rating
                                            name="simple-controlled"
                                            value={ratingsValue}
                                            onChange={(event, newValue) => {
                                            setRatingsValue(newValue);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>Product Stock</h6>
                                            <input type='text' />
                                    </div>
                                </div>
                            </div>
                                <Button className='btn__blue btn-lg btn-big'>
                                    <MdCloudUpload/>&nbsp; PUBLISH AND VIEW</Button>
                        </div>
                    </div>
                    <div className='col-sm-3'>                        
                    </div>
                </div>
            </form>
        </div>
        </>
    )

}

export default ProductUpload;