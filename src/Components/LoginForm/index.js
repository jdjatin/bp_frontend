import React, { useRef } from 'react'
import './index.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';

const APIURL = process.env.REACT_APP_API_URL;
function LoginForm() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (email !== '' && password !== '') {
            axios.post(`${APIURL}auth/login`, {
                email,
                password
            })
            .then(function (response) {
                if (response.status === 200) {
                    if (response.data.accessToken) {
                        toast.success("User logged in successfully!");
                        Cookies.set('accessToken', response.data.accessToken);
                        navigate('/products'); // Redirect to /products
                    }
                    if (response.data.refreshToken) {
                        Cookies.set('refreshToken', response.data.refreshToken); // Fixed: was incorrectly setting accessToken again
                    }
                }
            })
            .catch(function (error) {
                const errorMessage = error.response?.data?.message || "Some error occurred!";
                toast.error(errorMessage); // Show specific error message
                console.log(error);
            });
        } else {
            toast.error("Please fill in all required fields!");
        }
    };
  return (
    <>
        <div className='d-flex justify-content-center align-items-center form-parent position-relative container'>
            <div className='row'>
                <div className='d-none d-lg-block left-sidebar position-relative col-lg-6'>
                        <img src='/img/signup-form.png' alt="" width={700} height={600} />
                </div>
                <div className='col col-lg-6 right-sidebar d-flex align-items-center justify-content-center flex-column'>
                    <img 
                        src="/img/logo.png"
                        width={50}
                        height={50}
                        alt="logo"
                        className='mb-5'
                    />
                    <div className="mb-3 w-100">
                        <label for="exampleFormControlInput1" className="form-label">Username or Email address</label>
                        <input ref={emailRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3 w-100">
                        <label for="exampleFormControlTextarea1" className="form-label">Password</label>
                        <input ref={passwordRef} type="password" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <button type="button" className='w-100 btn btn-danger text-white btn-rounded' onClick={handleSubmit}>
                        Sign in
                    </button>
                    <ToastContainer /> {/* Add ToastContainer to enable toast notifications */}
            <div className='d-flex justify-content-center align-items-center form-parent position-relative container'>
                {/* Your form JSX */}
            </div>
                    <div className='d-flex align-items-center justify-content-center gap-3 my-3 w-100'>
                        <div className='line position-relative w-100 text-center'>or</div>
                    </div>
                    <p className='fs-5'>
                        Are you new?{' '}
                            <Link className='text-dark ' to="/signup">
                                Create an account
                            </Link>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginForm