import {React,useState} from 'react'
import ReactDOM from 'react-dom';
import '../css/navbar.css'
import Logo from '../images/amazon_logo.png'
import Location from '../images/icons8-location-24 (1).png'
import Searchicon from '../images/icons8-search-48.png'
import Flag from '../images/icons8-india-32.png'
import Cart from '../images/icons8-add-to-cart-32.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
export default function Navbar(){
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdowntwo, setShowDropdowntwo] = useState(false);
    // const select = document.querySelector('.select-tag') as HTMLSelectElement;


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);    
  };
  const toggleDropdowntwo = ()=>{
    setShowDropdowntwo(!showDropdowntwo);
  }
  const handleCategoriesClick = () => {
    toggleDropdown();

    // Find the select tag using its class name
    const select = document.querySelector('.select-tag') as HTMLSelectElement;

    // Check if the select element exists and call click method
    if (select) {
      select.click();
    }
  };

    return (
<nav className='navbar'>
        <div className='nav-left'>
            <div className='nav-logo '>
                <a href="" className='nav-logo-flex border'>
                    <img src={Logo} alt="hello" className='logo-nav' />
                    <span className='in'>.in</span>
                    
                </a>
            </div>

            <div className='nav-address border'>
                <div className='location-pin'>
                    <img src={Location} alt="" />
                </div>
                <div className='select-address' onClick={toggleDropdowntwo}>
                    <span className='add-one'>Hello</span>
                    <span className='add-two'>Select your address</span>
                </div>
                {showDropdowntwo && (<div className='select-address-pop-up'>
                    <div className='select-address-pop-up-one'>
                        <h4>Choose your location</h4>
                    </div>

                    <div className='select-address-pop-up-two'>
                        <p>Select a delivery location to see product availability and delivery options</p>
                        <button>Sign in to see your addresses</button>
                        <div className='select-address-pop-up-two-inside-div'>
                           <div className='span-one'>
                            <hr />
                           </div>
                           <div className='span-two'>
                            <span>or enter an Indian pincode</span>
                           </div>
                           <div className='span-one'>
                            <hr />
                           </div>
                            
                        </div>

                    <div className='select-address-pop-up-three'>

                        <input type="text" />
                        <button>Apply</button>

                    </div>

                    <div className='select-address-pop-up-two-inside-div'>
                           <div className='span-one-one'>
                            <hr />
                           </div>
                           <div className='span-two-two'>
                            <span>or</span>
                           </div>
                           <div className='span-one-one'>
                            <hr />
                           </div>
                            
                        </div>
                        
                    <div className='select-address-pop-up-last'>
                        <button>
                        <span> Deliver outside India </span>
                        <span>
                            <FontAwesomeIcon icon={faCaretDown}/> 
                            </span>
                            
                        </button>

                        <div className="dropdown-cunt">
                            <span>Bangladesh</span>
                            <span>Sri Lanka</span>
                        </div>

                    </div>                    


                    </div>
 
                    

                    

                </div>)}
            </div>
        </div>


        <div className='nav-middle'>

            <div className='nav-search'>

                <div className='nav-search-one'>
                    <label htmlFor="categories"  onClick={handleCategoriesClick}> <span className='nav-search-one-txt'>All</span></label>
                    <FontAwesomeIcon icon={faCaretDown} id='categories'onClick={handleCategoriesClick}/>
                   
                    {showDropdown&&(<div className='dropdown-content'>
                    <select name="" id="" style={{}} className='select-tag show' >
                    <option>All Categories</option>
                    <option>Alexa Skills</option>
                    <option>Amazon Devices</option>
                    <option>Amazon Fresh</option>
                    <option>Amazon Pantry</option>
                    <option>Appliances</option>
                    <option>Apps & Games</option>
                    <option>Baby</option>
                    <option>Beauty</option>
                    <option>Books</option>
                    <option>Car & Motorbike</option>
                    <option>Clothing & Accessories</option>
                    <option>Collectibles</option>
                    <option>Computers & Accessories</option>
                    <option>Electronics</option>
                    <option>Furniture</option>
                    <option>Garden & Outdoors</option>
                    <option>Gift Cards</option>
                    <option>Grocery & Gourmet Foods</option>
                    <option>Health & Personal Care</option>
                    <option>Home & Kitchen</option>
                    <option>Industrial & Scientific</option>
                    <option>Jewellery</option>
                    <option>Kindle Store</option>
                    <option>Luggage & Bags</option>
                    <option>Luxury Beauty</option>
                    <option>Movies & TV Shows</option>
                    <option>Music</option>
                    <option>Musical Instruments</option>
                    <option>Office Products</option>
                    <option>Pet Supplies</option>
                    <option>Prime Video</option>
                    <option>Shoes & Handbags</option>
                    <option>Software</option>
                    <option>Sports, Fitness & Outdoors</option>
                    <option>Tools & Home Improvement</option>
                    <option>Toys & Games</option>
                    <option>Under ₹500</option>
                    <option>Video Games</option>
                    <option>Watches</option>
                    </select>
                    </div>)}
                  
                </div>

                <div className='nav-search-two'>
                    <input type="text" placeholder='Search Amazon.in' />
                </div>
                       
                
                <div className='nav-search-three'>
                    <div>
                        <label htmlFor="">
                            <img src={Searchicon} alt="" className='search-icon'/>
                        </label>
                    </div>
                </div>
            </div>

        </div>

        <div className='nav-right'>
            
            <div className='nav-right-one border'>
                <span><img src={Flag} alt="" /></span>
                <span>EN <FontAwesomeIcon icon={faCaretDown} /></span>
                
                <div className='nav-right-one-pop-up'>
                    <label htmlFor="">
                    <input name="radio" type="radio" checked />
                    <span>English - EN</span>
                    </label>
                    <span>
                        <hr />
                    </span>
                    <label htmlFor="">
                    <input name="radio" type="radio"  />
                    <span>हिन्दी - HI</span>
                    </label>
                    <label htmlFor="">
                    <input name="radio" type="radio"  />
                    <span>தமிழ் - TA</span>
                    </label>
                    <label htmlFor="">
                    <input name="radio" type="radio"  />
                    <span>తెలుగు - TE</span>
                    </label>
                    <label htmlFor="">
                    <input name="radio" type="radio"  />
                    <span>ಕನ್ನಡ - KN</span>
                    </label>
                    <label htmlFor="">
                    <input name="radio" type="radio"  />
                    <span>മലയാളം - ML</span>
                    </label>
                    <label htmlFor="">
                    <input name="radio" type="radio"  />
                    <span>বাংলা - BN</span>
                    </label>
                    <label htmlFor="">
                    <input name="radio" type="radio"  />
                    <span>मराठी - MR</span>
                    </label>

                    <a href="">Learn more</a>
                    <span>
                        <hr />
                    </span>

                    <div className='nav-right-one-pop-up-last' >
                    <img src={Flag} alt="" />
                    <span>You are shopping on Amazon.in</span>
                    </div>
                    <a href="">Change country/region</a>

                <div>
                        
                </div>
                   
                </div>
            </div>

            <div>
                <div className='nav-right-two border'>
                
                    <div className='nav-right-two-one'>
                        <span className='nav-right-two-one-span-one'>Hello,sign in</span>
                        <span className='nav-right-two-one-span-two'>Accounts & Lists <FontAwesomeIcon icon={faCaretDown} /></span>
                    </div>
                    
                    <div className="nav-right-two-pop-up">
                        
                        <div className='nav-right-two-pop-up-div-one'>
                        <button>Sign in</button>
                        <span>New customer? <a href="">Start here.</a></span>
                        </div>

                        <div className="nav-right-two-pop-up-div-two">

                            <div className='nav-right-two-pop-up-div-two-one'>
                                <h4>Your Lists</h4>
                                <a href="">Create a Wish List</a>
                                <a href="">Wish from Any Website</a>
                                <a href="">Baby Wishlist</a>
                                <a href="">Discover Your Style</a>
                                <a href="">Explore Showroom</a>
                                

                            </div>
                            <hr />
                            <div className='nav-right-two-pop-up-div-two-two'>
                               <h4>Your Account</h4>
                                <a href="">Your Account</a>
                                <a href="">Your Orders</a>
                                <a href="">Your Wish List</a>
                                <a href="">Your Recommendations</a>
                                <a href="">Your Prime Membership</a>
                                <a href="">Your Prime Video</a>
                                <a href="">Your Subscribe & Save Items</a>
                                <a href="">Your Memberships & Subscriptions</a>
                                <a href="">Your Seller Account</a>
                                <a href="">Manage Your Content and Devices</a>
                                <a href="">Your Free Amazon Buisness Account</a>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div>
                    <div className="nav-right-three border">
                        
                        <div className="nav-right-three-one">
                            <span className='nav-right-three-one-span-one'>Returns</span>
                            <span className='nav-right-three-one-span-two'>& Orders</span>
                        </div>

                    </div> 

            </div>

            <div>
                {/* <span className='cart-count'>0</span> */}
                
                <div className="nav-right-four border">

                    <div className="nav-right-four-one">
                        <span className='nav-right-four-one-span-one'>
                            <img src={Cart} alt="" />
                            <span className='cart-count'>0</span>

                        </span>
                        <span className='nav-right-four-one-span-two'>Cart</span>
                    </div>

                </div>

            </div>

        </div>
</nav>
    )
}
