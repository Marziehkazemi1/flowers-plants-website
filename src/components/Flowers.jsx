import React from 'react'
import { flowers } from '../data'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'
import BoxHeader from './BoxHeader';
import {GiFlowerStar} from "react-icons/gi"


const Flowers = () => {
    return(

    <div className='conatainer flowers-container'>
        <h1 className='container title__container'><GiFlowerStar/> Flowers</h1>
        <div className='container flowers-wrapper'>
            {
                flowers.map(({id, image, title, info, path}) => {
                    return(
                        <div className='flowers-header'>
                        <BoxHeader title={title} image={image} id={id} >
                        <p>{info}</p>
                        <Link to={path} className="btn sm btn__font">Learn More <AiFillCaretRight/></Link>
                       </BoxHeader>
                       </div>
                    )
                })
            }
        </div>
    </div>
    )
}

export default Flowers;