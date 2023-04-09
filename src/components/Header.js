import React from 'react';
import cartImg from "../Images/shopping-cart-24.png";

const Header = (props) => {
    return (
        <div>
        <div className="add-to-cart">
          <span className="set-span">{props.cartData.length}</span>
            <img src={cartImg} alt="cart"/>
        </div>
     
      </div>
    );
};

export default Header;