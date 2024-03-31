import React from 'react'
import './index.css'

function Card({name ='', url = '', imgPath = ''}) {
  return (
    <div className='card card-body shop-consume-card-body rounded-xl position-relative' style={{backgroundImage:`url(${imgPath})`}}>
        <div className='overlay' />
        <div className='z-2 h-100 d-flex flex-column text-white justify-content-between align-items-center'>
            <h3 className='fs-3 fw-bold'>{name}</h3>
            <button type="button" className="btn btn-outline-light text-white">Shop Now</button>
        </div>
    </div>
  )
}

export default Card