import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
        <footer className='bg-black  d-none d-lg-block text-white'>
            <div className='container py-5'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <img src='./img/light-logo.png' width={80} height={80} alt="light logo" />
                        <p className='fs-5 text-secondary'>Smart shopping for <br/> Smart Living</p>
                        <h3>Contact us</h3>
                        <div className='list-group text-secondary fs-5'>
                            <p>+76 (094) 754 4371</p>
                            <p>@gmail.com</p>
                            <p>2464 Royal Ln. Mesa, New
                                Jersey 45463</p>
                        </div>
                    </div>
                    <div>
                        <h3>Useful Links</h3>
                        <ul className='list-unstyled list-group text-secondary fs-5'>
                            <li>
                                <Link className='text-decoration-none text-secondary' to="/about">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-secondary' to="/membership">
                                    Membership
                                </Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-secondary' to="/products">
                                    Products
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Categories</h3>
                        <ul className='list-unstyled list-group text-secondary fs-5'>
                            <li>Flowers</li>
                            <li>Pre Rolls</li>
                            <li>Vaporizers</li>
                            <li>Concentrates</li>
                            <li>Edibles and Drinks</li>
                            <li>Accessories</li>
                            <li>Tinctures</li>
                            <li>Topicals</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Social Media</h3>
                        <ul className='list-unstyled list-group text-secondary fs-5'>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Google</li>
                            <li>Pinterest</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer