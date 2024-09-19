import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <Link to='/'><h1>YumyFood</h1></Link>
               <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, est. Optio, soluta? Eligendi, maxime eos. Iure modi reprehenderit facere corrupti? Porro repudiandae cumque ad delectus recusandae id a, fuga accusantium!</p>
               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
               </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy <picture></picture>olicy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@yumyfood.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024  © Yumyfood.com -All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer