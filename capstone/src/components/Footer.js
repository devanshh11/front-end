
import React from 'react';
import logo from '../icons_assets/Logo.svg'

const Footer = () => {
    return (
        <footer className='header'>
            <section>
                <div className='company-info'>
                    <img src={logo}alt="" />
                    <p>We are family Owned Mediterranean restaurant,
                         focused on traditional recipes served with a modern 
                         twist
                         </p>

                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                        <ul>
                            <li>Address: <br />Nagpur, Maharashtra</li>
                            <li>Phone: <br />+91 1234567890</li>
                            <li>Email: <br />iiitn@gmail.com</li>
                        </ul>
                </div>

                <div>
                    <h3>Social Media</h3>
                        <ul>
                        <li><a href="/">Linkedin</a></li>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">Instagram</a></li>
                        </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;