import React from "react";
import apple from "../Images/Apple-IPhone-Mobile-Transparent-File.png";
import cartImg from "../Images/shopping-cart-24.png";


const Home = () => {
  return (
    <div>
        <div className="add-to-cart">
            <img src={cartImg} alt="cart"/>
        </div>
      <h1>Home Components</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={apple} alt="appleimage" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: 1000.00$</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
