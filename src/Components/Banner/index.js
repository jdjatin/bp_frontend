import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';

function Banner({color= '#8B66A4'}) {
  return (
    <div className='container'>
        <div className='position-relative text-white banner' style={{background:`${color}`}}>
            <div className='d-flex justify-content-between'>
                <div className='text-container'>
                    <h2 className='mb-3 font-weight-bold'>
                        Earn points with every visit, paving the way for rewards and benefits
                    </h2>
                    <div className='d-flex gap-2'>
                    <button type="button" className="btn btn-outline-light">
                        <Link to="/membership" className='text-decoration-none text-white'>
                            Join
                        </Link>
                    </button>
                    <button type="button" className="btn btn-outline-light">Learn More</button>
                            
                    </div>
                </div>
                <div className='d-none d-lg-block position-absolute right-0 top-0 img-container'>
                    <img src="./img/banner.png" height={400} alt="banner" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner