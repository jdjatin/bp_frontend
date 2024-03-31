import React, { useState } from 'react'
import Banner from '../Components/Banner'
import ProductCard from '../Components/ProductCard'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import Loader from '../Components/Loader';
const APIURL = process.env.REACT_APP_API_URL;


const products = [
    {
        id:1,
        name:'TWD. Indica',
        thc:'16%-22%',
        quantityCBD:'0.1%'
    },
    {
        id:2,
        name:'Dab Bods Pineapple Chunk Resin',
        thc:'38%-46%',
        quantityCBD:'0.75%'
    },
    {
        id:3,
        name:'Twd. Max CBD Cannabis',
        thc:'4.2mg/ml',
        quantityCBD:'105.3mg/ml'
    },
    {
        id:4,
        name:'TWD. Indica',
        thc:'16%-22%',
        quantityCBD:'0.1%'
    },
    {
        id:5,
        name:'Dab Bods Pineapple Chunk Resin',
        thc:'38%-46%',
        quantityCBD:'0.75%'
    },
    {
        id:6,
        name:'Twd. Max CBD Cannabis',
        thc:'4.2mg/ml',
        quantityCBD:'105.3mg/ml'
    },
    {
        id:7,
        name:'TWD. Indica',
        thc:'16%-22%',
        quantityCBD:'0.1%'
    },
    {
        id:8,
        name:'Dab Bods Pineapple Chunk Resin',
        thc:'38%-46%',
        quantityCBD:'0.75%'
    },
    {
        id:9,
        name:'Twd. Max CBD Cannabis',
        thc:'4.2mg/ml',
        quantityCBD:'105.3mg/ml'
    },
    {
        id:10,
        name:'TWD. Indica',
        thc:'16%-22%',
        quantityCBD:'0.1%'
    },
    {
        id:11,
        name:'Dab Bods Pineapple Chunk Resin',
        thc:'38%-46%',
        quantityCBD:'0.75%'
    },
    {
        id:12,
        name:'Twd. Max CBD Cannabis',
        thc:'4.2mg/ml',
        quantityCBD:'105.3mg/ml'
    },
]

function Product() {
    const [productList, setProductList] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(()=>{
        axios.get(`${APIURL}products`, {
            headers:{
                Authorization: `Bearer ${(Cookies.get('accessToken')) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNlZDJmZjJhLWI3OTktNGFlNy05NTE1LWM3NDEyOGUxNTM1MSIsImZpcnN0TmFtZSI6IkpvaG4iLCJsYXN0TmFtZSI6IkRvZSIsImVtYWlsIjoiamF0aW4uMTNkZXN3YWxAZ21haWwuY29tIiwiaWF0IjoxNzExOTA4NDQxLCJleHAiOjE3MTE5MTIwNDF9.ijY4rQREHCilUJSuxJZLu5bfQv9wiQGhtSLZO7iFvLo"}`
            }
          })
          .then(function (response) {
                if(response.status === 200 && response?.data?.length > 0){
                    setProductList(response?.data);
                }
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
            setTimeout(setLoader(false), 2000)
          });
    },[])
  return (
   <>
    {
        loader ?
        <Loader />
        :
        <>
            <Banner color="#278C92" />
            <section className='bg-light  text-center text-dark py-5'>
                <div className='container'>
                <h3 className='heading'>Our Feature Products</h3>
                    <div className='row mt-4'>
                    {
                        products.map((val)=>{
                            return(
                                <div className='col col-lg-4 mb-3'>
                                    <ProductCard 
                                        {...val}
                                        key={val.id}
                                    />
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </section>
        </>
    }
   </>
  )
}

export default Product