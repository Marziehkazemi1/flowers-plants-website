import React from 'react'
import Image from "../images/pic9.jpg"
import {IoMdFlower} from "react-icons/io"
import {GiVanillaFlower} from "react-icons/gi";
import {GiCottonFlower} from "react-icons/gi"
import { CardData } from '../data';

const CardOnly = () => {
  return (
    CardData.map(({ id, image, release, title, info, comments, view, share}) => {
        return(
            <section className='card__only' id={id}>
        <div className='card__image'>
            <img src={image} />
        </div>
        <div className='card__info'>
            <small>{release}</small>
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
        <div className="card__bottom" >
            <ul className='card__ul'>
                <li>{comments}</li>
                <li>{view}</li>
                <li>{share}</li>
            </ul>
        </div>
    </section>
        )
    })
  )
}

export default CardOnly