
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



const Login = ()=>{

    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const context = useContext(MyContext)


    useEffect(()=>{
        context.setIsHideSidebarAndHeader(true);
    },[]);

    const focusInput=(index)=>{
        setInputIndex(index);
    }
    return(
        <>
        <img src={Pattern} className='loginpattern'/>
        <section className="loginSection">
            <div className="loginBox">
                <div calssName="logo">
                    <img src={Logo} width="50px"/>
                    <h5 className='font-weight-bold mt-1'>Login To Hotash</h5>
                </div>

                <div className='wrapper mt-3 card border'>
                    <form>
                        <div className={`form-group position-relative ${inputIndex==0 && 'focus'}`}>
                            <span className='icon'><MdEmail/></span>
                            <input type='text' className='form-control' placeholder='Enter your Email'
                                onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)} autoFocus/>
                        </div>
                        <div className={`form-group position-relative ${inputIndex==1 && 'focus'}`}>
                            <span className='icon'><RiLockPasswordFill/></span>
                            <input type={`${isShowPassword===true ? 'text' : 'password'}`} 
                                className='form-control' placeholder='Password'
                                onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)}/>

                                <span className='toggleShowPassword' 
                                    onClick={()=>setIsShowPassword(!isShowPassword)}>
                                        {
                                            isShowPassword===true ?  <IoIosEyeOff/> : <IoMdEye/>
                                        }                                    
                                </span>
                        </div>

                        <div className='form-group'>
                            <Button className='btn-lg btn__blue w-100 btn-big'>Sign In</Button>
                        </div>
                        <div className='form-group mb-0'>
                            <Link to={'/forgot-password'} className='fogotLink'>FORGOT PASSWORD</Link>
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
                </div>
                <div className='wrapper mt-3 card border fooetr p-3'>
                    <span className='text-center'>
                        Don't have an account?
                        <Link to={'/signUp'} className='fogotLink color ml-2'>
                            Register
                        </Link>
                    </span>
                </div>
            </div>         
        </section>
        </>
    )

}

export default Login;