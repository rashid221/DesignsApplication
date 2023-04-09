import React from "react";
import apple from "../Images/Apple-IPhone-Mobile-Transparent-File.png";



const Home = (props) => {
  console.log(props);
  return (
    <div>
      
      <h1 className="head-set">E-commerce Application</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={apple} alt="appleimage" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: 1000.00$</span>
        </div>
        <div className="btn-wrapper item">
          <button onClick={()=>props.addToCartHandler(
            {price:1000,
            name:"iphone"
           
           })}>Add to Cart</button>
          
            <button onClick={()=>props.removeToCartHandler()}>Remove to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
