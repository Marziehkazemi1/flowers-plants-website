import React,{useState} from 'react'
import Card from '../UI/Card'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";
import { slider } from '../data';

const Slider = () => {

    const [index , setIndex] = useState(0);
    const {name, info, image} = slider[index];

    const prevSliderHandler = () => {
        setIndex(prev => prev -1 );
        if(index <= 0){
            setIndex(slider.length - 1);
        }
    }

    const nextSliderHandler = () => {
        setIndex(prev => prev + 1);
        if(index >= slider.length - 1){
            setIndex(0);
        }
    }

  return (
    <section className='container slider'>
        <div className=" slider__container">
            <Card className="sliders">
                <div className="slider__image">
                    <img src={image} />
                </div>
                <p className='slider__info'>{`"${info}"`}</p>
                <h3>{name}</h3>
            </Card>
            <div className='slider__btn-container'>
                <button className="btn__slider" onClick={prevSliderHandler}><IoIosArrowDropleftCircle /></button>
                <button className="btn__slider" onClick={nextSliderHandler}><IoIosArrowDroprightCircle /></button>
            </div>
        </div>
    </section>
  )
}

export default Slider