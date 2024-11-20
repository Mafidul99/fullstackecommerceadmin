
import { IoHome } from "react-icons/io5";
import { useRef}  from "react";
import Slider from "react-slick";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import { styled, emphasize } from '@mui/material/styles';
import Chip  from '@mui/material/Chip';

import Button from '@mui/material/Button';
import { TbBrandPnpm } from "react-icons/tb";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaTags } from "react-icons/fa";
import { IoColorPalette } from "react-icons/io5";
import { CgSize } from "react-icons/cg";
import { MdOutlinePriceChange } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { VscStarHalf } from "react-icons/vsc";
import { IoShieldCheckmark } from "react-icons/io5";
import UserAvatarImgComponent from "../../components/userAvatarImg";

import Rating from '@mui/material/Rating';
import { FaReply } from "react-icons/fa";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

///StyleBreadcrumb///
const StyleBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = theme.palette.mode === 'light' ?
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


const ProductsDetails = ()=>{

    
   const productSliderBig = useRef();    
   const productSliderSml = useRef();    

    var productSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };

      var productSliderSmlOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false
      };

      const goToSlide=(index)=>{
        productSliderBig.current.slickGoTo(index);
        productSliderSml.current.slickGoTo(index);
      }

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
                            label="Products"
                            href="#"
                        />
                        <StyleBreadcrumb
                            label="Products Details"
                        />
                    </Breadcrumbs>
            </div>

            <div className='card productsDetailsSection'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                            <h6 className="mb-4">Product Gallery</h6>
                            <Slider {...productSliderOptions} ref={productSliderBig} className="sliderBig mb-2">
                            <div className="item">
                                <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"/>                                
                            </div>
                            <div className="item">
                                <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"/>                                
                            </div>
                            <div className="item">
                                <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"/>                                
                            </div>
                            <div className="item">
                                <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"/>                                
                            </div>
                            <div className="item">
                                <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp"/>                                
                            </div>
                            <div className="item">
                                <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"/>                                
                            </div>
                            <div className="item">
                                <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"/>                                
                            </div>
                            <div className="item">
                                <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"/>                                
                            </div>
                        </Slider>
                            <Slider {...productSliderSmlOptions} ref={productSliderSml} 
                                className="sliderSml" onClick={()=>goToSlide(1)}>
                                <div className="item">
                                    <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"/>
                                </div>
                                <div className="item" onClick={()=>goToSlide(2)} >
                                    <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"/>
                                </div>
                                <div className="item" onClick={()=>goToSlide(3)}>
                                    <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"/>
                                </div>
                                <div className="item" onClick={()=>goToSlide(4)}>
                                    <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp"/>
                                </div>
                                <div className="item" onClick={()=>goToSlide(5)}>
                                    <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"/>
                                </div>
                                <div className="item" onClick={()=>goToSlide(6)}>
                                    <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"/>
                                </div>
                                <div className="item" onClick={()=>goToSlide(7)}>
                                    <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"/>
                                </div>
                                <div className="item" onClick={()=>goToSlide(8)}>
                                    <img className="w-100" src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp"/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <div className="pt-3 pb-3 pl-4 pr-4">
                            <h6 className="mb-4">Product Details</h6>
                            <h4>Formal suits for men wedding slim fit 3 piece dress business party jacket</h4>
                            <div className="productInfo mt-4">
                                <div className="row mb-2">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><TbBrandPnpm/></span>
                                        <span className="name">Brand</span>
                                    </div>
                                    <div className="col-sm-9">
                                        <span className="iconSemiColn">:</span>
                                        <span>Ecstasy</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><BiSolidCategoryAlt/></span>
                                        <span className="name">Category</span>
                                    </div>
                                    <div className="col-sm-9">
                                        <span className="iconSemiColn">:</span> 
                                        <span>Man's</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><FaTags/></span>
                                        <span className="name">Tags</span>
                                    </div>
                                    <div className="col-sm-9">
                                        <span className="iconSemiColn">:</span>  
                                        <span>
                                            <ul className="list list-inline tags sml">
                                                <li className="list-inline-item">
                                                    <span>Suite</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span>party</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span>dress</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span>smart</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span>man</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span>styles</span>
                                                </li>
                                            </ul>
                                        </span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><IoColorPalette/></span>
                                        <span className="name">Color</span>
                                    </div>
                                    <div className="col-sm-9">
                                        <span className="iconSemiColn">:</span> 
                                        <span>
                                            <ul className="list list-inline tags sml">
                                                    <li className="list-inline-item">
                                                        <span>red</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>blue</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>green</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>yellow</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>purple</span>
                                                    </li>
                                                </ul>
                                        </span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><CgSize/></span>
                                        <span className="name">Size</span>
                                    </div>
                                    <div className="col-sm-9">
                                        <span className="iconSemiColn">:</span> 
                                        <span>
                                        <ul className="list list-inline tags sml">
                                                    <li className="list-inline-item">
                                                        <span>SM</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>MD</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>LG</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>XL</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>XXL</span>
                                                    </li>
                                                </ul>
                                        </span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><MdOutlinePriceChange/></span>
                                        <span className="name">Price</span>
                                    </div>
                                    <div className="col-sm-9">
                                        <span className="iconSemiColn">:</span>  
                                        <span> 
                                            $37.00 
                                            <del>$42.00</del>
                                        </span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><HiMiniShoppingCart/></span>
                                        <span className="name">Stock</span>
                                    </div>
                                    <div className="col-sm-9">
                                        <span className="iconSemiColn">:</span> 
                                        <span>(68) piece</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><VscStarHalf/></span>
                                        <span className="name">Review</span>
                                    </div>
                                    <div className="col-sm-9">
                                        <span className="iconSemiColn">:</span>  
                                        <span>(03) review</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <span className="icon"><IoShieldCheckmark/></span>
                                        <span className="name">Published</span>
                                    </div>
                                    <div className="col-sm-9">
                                        <span className="iconSemiColn">:</span>  
                                        <span>02 feb 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="p-4">
                    <h6 className="mt-5 mb-3">Product Description</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Molestiae reprehenderit repellendus expedita esse cupiditate quos
                            doloremque rerum, corrupti ab illum est nihil, voluptate ex dignissimos! 
                            Sit voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam 
                            debitis amet natus doloremque laudantium? Repudiandae, consequuntur, officiis quidem quo
                            deleniti, autem non laudantium sequi error molestiae ducimus accusamus facere velit 
                            consectetur vero dolore natus nihil temporibus aspernatur quia consequatur? Consequuntur
                            voluptate deserunt repellat tenetur debitis molestiae doloribus dicta. In rem illum 
                            dolorem atque ratione voluptates asperiores maxime doloremque laudantium magni neque 
                            ad quae quos quidem, quaerat rerum ducimus blanditiis reiciendis</p>


                    <h6 className="mt-5 mb-5">Rating Analytics</h6>
                        <div className="ratingSection">
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    5 star
                                </span>
                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width:'70%' }}></div>
                                    </div>
                                </div>
                                <div className="col3">
                                    (22)
                                </div>
                            </div>
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    4 star
                                </span>
                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width:'50%' }}></div>
                                    </div>
                                </div>
                                <div className="col3">
                                    (12)
                                </div>
                            </div>
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    3 star
                                </span>
                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width:'25%' }}></div>
                                    </div>
                                </div>
                                <div className="col3">
                                    (10)
                                </div>
                            </div>
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    2 star
                                </span>
                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width:'20%' }}></div>
                                    </div>
                                </div>
                                <div className="col3">
                                    (10)
                                </div>
                            </div>
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    1 star
                                </span>
                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width:'10%' }}></div>
                                    </div>
                                </div>
                                <div className="col3">
                                    (2)
                                </div>
                            </div>
                        </div>

                    <h6 className="mt-5 mb-5">Customer Reviews</h6>
                        <div className="reviewsSection">
                            <div className="reviewsRow">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                                    lg={true}/>
                                                <div className="info pl-3">
                                                    <h6>miron mahmud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                            </div>
                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        </div>                       
                                    </div>
                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="btn__blue btn-big btn-lg ml-auto">
                                                <FaReply/> &nbsp; reply
                                            </Button>
                                        </div>
                                    </div>
                                    <p className="mt-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae?
                                        Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                                </div>
                            </div>
                            <div className="reviewsRow reply">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                                    lg={true}/>
                                                <div className="info pl-3">
                                                    <h6>miron mahmud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                            </div>
                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        </div>                       
                                    </div>
                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="btn__blue btn-big btn-lg ml-auto">
                                                <FaReply/> &nbsp;
                                                reply
                                            </Button>
                                        </div>
                                    </div>
                                    <p className="mt-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae?
                                        Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                                </div>
                            </div> 
                            <div className="reviewsRow reply">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                                    lg={true}/>
                                                <div className="info pl-3">
                                                    <h6>miron mahmud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                            </div>
                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        </div>                       
                                    </div>
                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="btn__blue btn-big btn-lg ml-auto">
                                                <FaReply/> &nbsp;
                                                reply
                                            </Button>
                                        </div>
                                    </div>
                                    <p className="mt-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae?
                                        Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                                </div>
                            </div>
                            <div className="reviewsRow">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                                    lg={true}/>
                                                <div className="info pl-3">
                                                    <h6>miron mahmud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                            </div>
                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        </div>                       
                                    </div>
                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className="btn__blue btn-big btn-lg ml-auto">
                                                <FaReply/> &nbsp; reply
                                            </Button>
                                        </div>
                                    </div>
                                    <p className="mt-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae?
                                        Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                                </div>
                            </div> 
                        </div>



                     <h6 className="mt-5 mb-5">Review Reply Form</h6>

                     <form className="reviewForm">
                        <textarea placeholder="Writh Here"></textarea>

                        <Button className="btn__blue btn-big btn-lg w-100 mt-4">Drop Your Replies</Button>
                     </form>
                </div>
            </div>
        </div>
        </>

    )

}

export default ProductsDetails;

