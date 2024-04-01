import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Banner from '../Components/Banner';
import ProductCard from '../Components/ProductCard';
import axios from 'axios';
import Cookies from 'js-cookie';
import Loader from '../Components/Loader';
import './products.css'; // Ensure your CSS file contains styles for the popup

const APIURL = process.env.REACT_APP_API_URL;

function Product() {
    const [productList, setProductList] = useState([]);
    const [loader, setLoader] = useState(true);
    const [showLoginPrompt, setShowLoginPrompt] = useState(false); // New state for controlling the display of the login prompt
    const navigate = useNavigate(); // Hook to navigate programmatically

    useEffect(() => {
        axios.get(`${APIURL}products`, {
            headers: {
                Authorization: `Bearer ${Cookies.get('accessToken')}`
            }
        })
        .then(function (response) {
            if (response.status === 200 && response.data.length > 0) {
                setProductList(response.data);
            }
        })
        .catch(function (error) {
            if (error.response && error.response.status === 401) {
                // Show login prompt if unauthorized
                setShowLoginPrompt(true);
            }
            console.log(error);
        })
        .finally(() => {
            setLoader(false);
        });
    }, [navigate]);

    const handleRedirect = () => {
        navigate('/login'); // Redirects to the login page
    };

    return (
        <>
            {loader ? (
                <Loader />
            ) : (
                <>
                    {showLoginPrompt && (
                        <div className="login-prompt">
                            <div className="message-box">
                                <p>Please login to continue</p>
                                <button onClick={handleRedirect}>Login</button>
                            </div>
                        </div>
                    )}
                    <Banner color="#278C92" />
                    <section className='bg-light text-center text-dark py-5'>
                        <div className='container'>
                            <h3 className='heading'>Our Feature Products</h3>
                            <div className='row mt-4'>
                                {productList.map((product) => {
                                    return (
                                        <div className='col col-lg-4 mb-3' key={product.id}>
                                            <ProductCard {...product} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
}

export default Product;
