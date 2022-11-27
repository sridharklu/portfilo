
import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll/modules';

export const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">
                    Andrew
                </div>
               <Toggle/>
                
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none' }}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='services' smooth={true} activeClass="activeClass">
                        <li>services</li></Link>
                        <Link spy={true} to='Experience' smooth={true} activeClass="activeClass">
                        <li>Experience</li></Link>
                       <Link spy={true} to="portfolio" smooth={true} activeClass="activeClass">
                        <li>portfolio</li></Link>
                        <Link spy={true} to ="Testimonials" smooth={true} activeClass="activeClass">
                        <li>Testimonials</li></Link>
                    </ul>
                </div>
                <button className='button n-button'>Contact</button>

            </div>
        </div>
    )
}