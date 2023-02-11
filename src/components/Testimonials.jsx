import React , {useState} from 'react'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";
import Card from '../UI/Card';
import { testimonials } from '../data';
import {ImQuotesLeft} from "react-icons/im";
import Image from "../images/pic5.jpg"
import ImageBottom from "../images/pic4.jpg"


const Testimonials = () => {

    const [index , setIndex] = useState(0);
    const {name, quote, job, avatar} = testimonials[index];

    const prevTestimonialHandler = () => {
        setIndex(prev => prev -1 );
        if(index <= 0){
            setIndex(testimonials.length - 1);
        }
    }

    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1);
        if(index >= testimonials.length - 1){
            setIndex(0);
        }
    }

  return (
    <>
    <h1 className='container testi__title'><ImQuotesLeft /> Testimonials</h1>
    <div className='container div__content'>
    <div className='image__big'>
        <img src={Image} />
    </div>
   
    <section className='container testimonials'>
        <div className="container testimonals__container">
            
            <Card className="testimonials">
                {/* <div className="testimonial__avatar">
                    <img src={avatar} alte={name} />
                </div> */}
                <p className='testimonial__quote'>{`"${quote}"`}</p>
                {/* <h5>{name}</h5> */}
            </Card>

            <div className='testimonials__btn-container'>
            <button className="testimonials__btn" onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle /></button>
            <button className="testimonials__btn" onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle /></button>
            </div>
        </div>
    </section>
   
    </div>
    </>
  )
}

export default Testimonials