import React from "react";
import './contact.css'
import Card from "../../UI/Card"
import HeaderContact from "../../components/HeaderContact";
import Image from "../../images/pic5.jpg"
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {MdLocationOn} from "react-icons/md"
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


const Contact = () => {
    return(
        <section className="contact">
        <div className="container contact__container">

        <HeaderContact title="Contact Us" image={Image} className="contact__aside">
                <div className="info">
                <p>Asperiores vaniam vel doloribus assumerda soluta blanditiis dolores qui voluptates, consequatur vitae.</p>
                <h4><BsFillTelephoneFill/> +2254188745 </h4>
                <h4><MdEmail/> marziek569@gmail.com</h4>
                <h4><MdLocationOn/> Iran.Alborz</h4>
                </div>
                <div className="container socials">
                        <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
                        <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"><FaFacebookF /></a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter /></a>
                        <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"><AiFillInstagram /></a>
                    </div>
            </HeaderContact>

           
                <form className="contact__form">
                    <div className="form__name">
                    <input type="text" name="First Name" placeholder="Inter First Name" required/>
                    <input type="text" name="Last Name" placeholder="Inter Last Name" required />
                    </div>
                    <input type="email" name="Email Address" placeholder="Your Email Address" required />
                    <textarea name="Message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="form__btn">Send Message</button>
                </form>
            
            
            
        </div>
        </section>
    )
}

export default Contact;