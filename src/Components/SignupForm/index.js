import React, { useRef } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const APIURL = process.env.REACT_APP_API_URL;


function SignupForm() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);

    const handleSubmit = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;

        if(email && password && firstName) {
            axios.post(`${APIURL}auth/register`, {
                email,
                password,
                firstName,
                lastName
            })
            .then(function (response) {
                // Check for specific status codes
                if (response.status === 200) {
                    toast.success("User registered successfully!");
                } else if (response.status === 201) {
                    toast.success("Successfully Signed Up! Please confirm your email address to continue!", {
                        autoClose: 5000, // Toast will auto-close after 5 seconds
                        closeOnClick: true, // Allows the toast to be closed on click
                        pauseOnHover: true,
                    });
                }
            })
            .catch(function (error) {
                // Show specific error message if available
                console.log("error",error)
                const message = error.response?.data?.message[0] || "Some error occurred!";
                toast.error(message, {
                    autoClose: 5000, // Toast will auto-close after 5 seconds
                    closeOnClick: true, // Allows the toast to be closed on click
                    pauseOnHover: true,
                });
                console.log(error);
            });
        } else {
            toast.error("Please fill in all required fields!", {
                autoClose: 5000, // Toast will auto-close after 5 seconds
                closeOnClick: true, // Allows the toast to be closed on click
                pauseOnHover: true,
            });
        }
    };
  return (
    <>
        <div className='d-flex justify-content-center align-items-center form-parent position-relative container'>
            <div className='row'>
                <div className='d-none d-lg-block left-sidebar signup-left-sidebar position-relative col-lg-6'>
                        <img src='/img/sign-up-form2.png' alt="" width={700} height={600} />
                </div>
                <div className='col col-lg-6 right-sidebar d-flex align-items-center justify-content-center flex-column'>
                    <img 
                        src="/img/logo.png"
                        width={50}
                        height={50}
                        alt="logo"
                        className='mb-5'
                    />
                    <h4 className='fs-2 fw-bold'>
                        Welcome to Buddy Points
                    </h4>
                    <p>
                        You will need to create an account to make a purchase. Please
                            make     sure your information is accurate and correct,
                        otherwise you will not be able to checkout.</p>
                        <div className='row mx-0 w-100'>
                            <div className="mb-3 col-12 px-0 col-lg-6 ">
                                <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                                <input ref={firstNameRef} type="text" className="form-control" placeholder="" />
                            </div>
                            <div className="mb-3 col-12 col-lg-5 px-0 offset-lg-1">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Last Name</label>
                                <input ref={lastNameRef} type="text" className="form-control" placeholder="" />
                            </div>
                        </div>
                        <div className="mb-3 col-12">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    {/* Attach refs to email and password inputs */}
                    <input ref={emailRef} type="email" className="form-control" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3 col-12">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
                        <input ref={passwordRef} type="password" className="form-control" placeholder="" />
                    </div>
                        <button type="button" onClick={handleSubmit} className='col-md-auto btn btn-warning text-white btn-rounded border-dark'>
                            Create Account
                        </button>
                        <ToastContainer
                         position="top-right"
                         autoClose={5000} // Default autoClose for all toasts
                         hideProgressBar={false}
                         newestOnTop={false}
                         closeOnClick
                         rtl={false}
                         pauseOnFocusLoss
                         draggable
                         pauseOnHover
                          />
            <div className='d-flex justify-content-center align-items-center form-parent position-relative container'>
                {/* Your form JSX */}
            </div>
                
                    
                    <div className='d-flex align-items-center justify-content-center gap-3 my-3 w-100'>
                        <div className='line position-relative w-100 text-center'>or</div>
                    </div>
                    <p className='fs-5'>
                        Already Register? {' '}
                        <Link className='text-dark' to="/login">
                            Click here to login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default SignupForm