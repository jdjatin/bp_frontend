import React from 'react';
import './index.css';
import Card from './Card';
const arr= [1,2,3,4,5,6];
const imgArr=[
    'img/consumption-1.png',
    'img/consumption-2.png',
    'img/consumption-3.png',
    'img/consumption-4.png',
    'img/consumption-5.png',
    'img/consumption-6.png',
]
function getRandomNumber() {
    // Math.floor rounds down to the nearest integer
    // Math.random() generates a random number between 0 and 1
    // Multiply by 6 to get a number between 0 and 5
    // Add 1 to shift the range to between 1 and 6
    return Math.floor(Math.random() * 6) + 1;
}
function ShopByConsumption() {
  return (
    <section className='bg-light  text-center text-dark'>
        <div className='container py-3'>
            <h3 className='heading'>A METHOD FOR YOUR MEANS</h3>
            <h4 className='font-weight-bold sub-heading'>Shop by consumption method</h4>
            <div className='row mt-4 random-container'>
                {
                    arr.map((val)=>{
                        return(
                            <div className='col col-lg-4 mb-3'>
                                <Card 
                                    name={`Flower ${val}`}
                                    key={val}
                                    imgPath={imgArr[Math.floor(Math.random() * imgArr.length)]}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    
    </section>
  )
}

export default ShopByConsumption