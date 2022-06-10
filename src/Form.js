import React from 'react';
import css from './form.css';
import add1 from './images/add1.jpg';
import add2 from './images/add2.jpg';
import add3 from './images/add3.jpg';
import footercss from './footercss.css';
import Products from './Products';




function App() {
    return (
      
  
          <>
          <div className='container'>
              <div className='navbar'>
                  <div className='line1'></div>
                  <div className='line2'></div>
                  <div className='logo'> <h1>LOGO</h1></div>
                  <div className='search-bar'>
                             <div class="ui search">
                        <div class="ui icon input">
                        <input class="prompt" type="text" placeholder="Search products"/>
                        <i class="search icon"></i>
                        </div>
                        </div>
                  </div>
                  <div className='nav-profile'>
                        <i id="cart" class="shopping cart icon"></i>
                         <i id="profile-card" class="id badge icon"></i>
                         

                        
                  </div>
                  
              </div>

              <div className='content-box'>
                  <div className='add1'>
                      <div className='add-img'>
                      <img className='add-img1' src={add3}/>
                      </div>
                      <div className='scrolling-img'>
                      <img className='scroll' src={add2}/>
                      </div>
                  </div>
                  <div className='products'>
                      <div className='product-container'>
                          <div className='item-container'>
                          {/* <div className='items'>
                              <div className='product-pic'>
                                  <img src="" alt='#'></img>
                              </div>
                              <div className='product-name'>
                                  <h3>Balmain paris T-Shirt for men.</h3>
                              </div>
                              <div className='product-price'>
                                  <h3>$800</h3>
                              </div>
                              <div className='Detailed-view'>
                                  <center><a href='#'>Detailed View</a></center>
                                  
                              </div>
                          </div> */}
                          <Products name='balmain Paris T-Shirt for men.' price="$800"/>
                          <Products name='I-Phone 12 pro.' price="$1200"/>
                          <Products name='Acer Predator Helios 300 i with i7 processor.' price="$950"/>
                          <Products name='balmain' price="$800"/>
                          <Products name='balmain' price="$800"/>
                          
                          
                          </div>
                          
                          
                      </div>
                  </div>
                  <div className='add2'>
                        <img id='add2-align' src={add1}/>
                  </div>
              </div>

              <div className='footer'>

              
    
    <footer>
       
       <div className="container-footer-all">
        
            <div className="container-body">

                <div className="colum1">
                    <h1>Hello This is Eugine</h1>
                    <i id="sample" class="facebook icon"></i>


                </div>

                <div className="colum2">

                    <h1>Social Media</h1>

                    <div className="row">
                    <i class="facebook icon"></i>
                        <label>Facebook</label>
                    </div>
                    <div className="row">
                    <i class="twitter icon"></i>
                        <label>Twitter</label>
                    </div>
                    <div className="row">
                    <i class="instagram icon"></i>
                        <label>Instagram</label>
                    </div>


                </div>

                <div className="colum3">

                    <h1>Information</h1>

                    <div className="row2">
                    <i class="home icon"></i>
                        <label>1/150b,Shanthi Garden,
                            Karipatti,salem,TamilNadu-636106</label>
                    </div>

                    <div className="row2">
                    <i class="phone icon"></i>
                        <label>91-6383550969</label>
                    </div>

                    <div className="row2">
                    <i class="mail icon"></i>
                         <label>eugineebenezer@gmail.com</label>
                    </div>

                </div>

            </div>
        
        </div>
        
       
    </footer>


              </div>

          </div>
          
          </>
  
        
    );
  }
  
  export default App;

  