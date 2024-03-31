import React from 'react';
import './index.css';
function FaqBanner() {
  return (
    <div className='d-none d-lg-block'>
        <div style={{backgroundImage:`url(/img/faq-banner.png)`}} className='container faq-banner d-flex flex-column gap-2 justify-content-center align-items-center text-dark'>
            <div>
                <p className='fs-4'>FAQs</p>
                <p className='fs-3'>Questions? Let us Help</p>
                <button className='faq-button btn btn-rounded text-white'>View more</button>
            </div>
        </div>
    </div>
  )
}

export default FaqBanner