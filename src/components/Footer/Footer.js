import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer__page">
    <div className="container__main-page container__styles">
        <div data-testid="footer-logo"> 
            <Link to='/' className='tab__link tab__logo'>  
                <img alt="Codecademy logo" className="image__header" src="https://raw.githubusercontent.com/bannayash11/bannayash11.github.io/master/img/website-logo.png" />
            </Link>
        </div>
        
        <div>
            <ul className="linkList__styles">
                <li><a href="#" data-testid="footer-jobs-link">Jobs</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
            </ul>
        </div>
        <div>
            <ul className="social__listStyles" data-testid="footer-social">
                <li><a href="#"><title>Facebook</title></a></li>
            </ul>
        </div>
    </div>
</footer>
  )
}
