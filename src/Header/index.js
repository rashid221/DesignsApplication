import React from 'react';
import './header.css';


function HeaderContainers(props) {
    return (
        <div>
            <div className='header-main'>
       
         <div className='header-left'>
         <p>Wookie <br/>Movies Live</p>   
         </div>
         <div className='header-right'>
         <div className="row g-3">
  <div className="col-auto">
 <h1>M</h1>
  </div>
  <div className="col-auto">
    <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
    <input type="search" className="form-control" />
  </div>
</div>
         </div>
         </div>
         <hr></hr>
        </div>
    )
}

export default HeaderContainers;