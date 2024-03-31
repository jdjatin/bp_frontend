import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Membership from './Pages/Membership';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import NoMatchFound from './Pages/NoMatchFound';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Product from './Pages/Product';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="membership" element={<Membership />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="products" element={<Product />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatchFound/>} />
        </Route>
        </Routes>
      </Router>
    </>
  );
}
function Layout(){
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        transition= "Bounce"
      />
    </>
  )
}
export default App;
