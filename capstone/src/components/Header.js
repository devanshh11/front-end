import React from "react";
import { Link } from "react-router-dom";
import banner from '../icons_assets/restauranfood.jpg'
const Header = ()=>{
    return(
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are family Owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                    <Link to="/Booking"><button aria-label='On Click'>Reserve Table</button></Link>
                </div>

                {/* Banner Image */}
                <div className="banner-img">
                    <img src={banner} alt="" />
                </div>
            </section>
        </header>
    );
}

export default Header;