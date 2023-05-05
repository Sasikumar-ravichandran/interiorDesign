import { Link } from 'react-router-dom'
import pngegg from '../images/pngegg.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {

    return (
        <footer className='footer'>
            <div className="container footer__container">
                <article>
                    <Link to="/" className='logo'>
                        <img src={pngegg} alt="" />
                    </Link>
                    <p>
                        vjhvdjdcvjuwvutwvdjsx
                    </p>
                    <div className="footer__socials">
                        <a href="https://linkedin.com/" target="_blank" rel='noreferrer noopener'><FaLinkedin /></a>
                        <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'><FaFacebook /></a>
                        <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter /></a>
                        <a href="https://instagram.com/" target="_blank" rel='noreferre rnoopener'><AiFillInstagram /></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </article>

                <article>
                    <h4>Insights</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Events</Link>
                    <Link to="/s">Communities</Link>
                    <Link to="/s">FAQs</Link>
                </article>

                <article>
                    <h4>Get In Touch</h4>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/s">Support</Link>
                </article>
            </div>
            <div className="footer__copyright">
                <small>2023 name &copy; All Rights Reserved</small>
            </div>
        </footer>
    )
}

export default Footer
