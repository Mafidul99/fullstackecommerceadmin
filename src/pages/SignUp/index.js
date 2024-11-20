
import Logo from '../../assets/images/logo.webp';
import Pattern from '../../assets/images/pattern.webp';
import googleIcon from '../../assets/images/Google_Icons.webp';
import { MyContext } from '../../App';
import { useContext, useEffect, useState } from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from '@mui/material/Button';
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IoMdHome } from "react-icons/io";

const SignUp=()=>{

    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
    
    const context = useContext(MyContext)


    useEffect(()=>{
        context.setIsHideSidebarAndHeader(true);
        window.scrollTo(0,0);
    },[]);

    const focusInput=(index)=>{
        setInputIndex(index);
    }
    return(
        <>
        <img src={Pattern} className='loginpattern'/>
        <section className="loginSection signUpSection">
            <div className='row'>
                <div className='col-md-8 d-flex flex-column part1'>
                    <h1>Best ux/ui fashion <span className='text-sky'>ecommerce dashboard</span> & admin panel</h1>
                    <p>Elit Iusto dolore libero recusandae dolor dolores explicabo ullam cum 
                        facilis aperiam alias odio quam excepturi molestiae omnis inventore. Repudiandae                     
                        officia placeat amet consectetur dicta dolorem quo</p>

                        <div className='w-100 mt-3'>
                            <Link to={'/'}>
                                <Button className='btn-lg btn__blue btn-big'>
                                    <IoMdHome/>
                                    Go To Home
                                </Button>
                            </Link>
                        </div>
                </div>
                <div className='col-md-4 pr-0'>
                    <div className="loginBox">
                        <div calssName="logo">
                            <img src={Logo} width="50px"/>
                            <h5 className='font-weight-bold mt-1'>Register a New Account</h5>
                        </div>

                        <div className='wrapper mt-3 card border'>
                            <form>
                                <div className={`form-group position-relative ${inputIndex==0 && 'focus'}`}>
                                    <span className='icon'><FaUserCircle/></span>
                                    <input type='text' className='form-control' placeholder='Enter your Name'
                                        onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)} autoFocus/>
                                </div>
                                <div className={`form-group position-relative ${inputIndex==1 && 'focus'}`}>
                                    <span className='icon'><MdEmail/></span>
                                    <input type='text' className='form-control' placeholder='Enter your Email'
                                        onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)}/>
                                </div>
                                <div className={`form-group position-relative ${inputIndex==2 && 'focus'}`}>
                                    <span className='icon'><RiLockPasswordFill/></span>
                                    <input type={`${isShowPassword===true ? 'text' : 'password'}`} 
                                        className='form-control' placeholder='Password'
                                        onFocus={()=>focusInput(2)} onBlur={()=>setInputIndex(null)}/>

                                        <span className='toggleShowPassword' 
                                            onClick={()=>setIsShowPassword(!isShowPassword)}>
                                                {
                                                    isShowPassword===true ?  <IoIosEyeOff/> : <IoMdEye/>
                                                }                                    
                                        </span>
                                </div>
                                <div className={`form-group position-relative ${inputIndex==3 && 'focus'}`}>
                                    <span className='icon'><IoShieldCheckmark/></span>
                                    <input type={`${isShowConfirmPassword===true ? 'text' : 'password'}`} 
                                        className='form-control' placeholder='Confirm Your Password'
                                        onFocus={()=>focusInput(3)} onBlur={()=>setInputIndex(null)}/>

                                        <span className='toggleShowPassword' 
                                            onClick={()=>setIsShowConfirmPassword(!isShowConfirmPassword)}>
                                                {
                                                    isShowConfirmPassword===true ?  <IoIosEyeOff/> : <IoMdEye/>
                                                }                                    
                                        </span>
                                </div>

                                    <div className='d-flex flex-column text-left mt-2 checkBox'>
                                        <FormControlLabel control={<Checkbox />} 
                                         label="I agree to the all Terms & Condiotions" />
                                    </div>

                                <div className='form-group'>
                                    <Button className='btn-lg btn__blue w-100 btn-big'>Sign Up</Button>
                                </div>
                                <div className='form-group mb-0'>
                                    <div className='d-flex align-items-center justify-content-center or mt-3 mb-3'>
                                            <span className='line'></span>
                                            <span className='txt'>or</span>
                                            <span className='line'></span>
                                    </div>

                                    <Button variant="outlined" className='w-100 btn-big btn-lg loginWithGoogle'>
                                        <img src={googleIcon} width="30px"/> &nbsp;Sign In With Google
                                    </Button>
                                </div>                        
                            </form>
                                <span className='text-center d-block mt-3'>
                                    Don't have an account?
                                    <Link to={'/login'} className='fogotLink color ml-2'>
                                        Logn In
                                    </Link>
                                </span>
                        </div>                        
                    </div>
                </div>
            </div>                     
        </section>
        </>
    )

}

export default SignUp;