import React from "react";

 const Products = (props) =>
 {
     return(
         <>
         <div className='items'>
                              <div className='product-pic'>
                                  <img src="" alt='#'></img>
                              </div>
                              <div className='product-name'>
                                  <h3>{props.name}</h3>
                              </div>
                              <div className='product-price'>
                                  <h3>{props.price}</h3>
                              </div>
                              <div className='Detailed-view'>
                                  <center><a href='#'>Detailed View</a></center>
                                  
                              </div>
                          </div>
         </>
     )
 }

 export default Products;