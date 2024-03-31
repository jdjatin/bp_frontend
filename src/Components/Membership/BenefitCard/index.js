import React from 'react'
import './index.css'
function BenefitCard({icon, text}) {
  return (
    <div className='col col-lg-3 benefit-card text-white p-3 mb-3 me-2'>
        <span className='benefit-icon mb-3' dangerouslySetInnerHTML={{__html:icon}}/>
        <p className='fs-5'>{text}</p>
    </div>
  )
}

export default BenefitCard