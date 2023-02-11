import React from 'react'
import Header from "../components/Header";
import { about } from "../data";

const CardAbout = () => {
  return (
    about.map(({id, title, children, image, SmallImage}) => {
        return(
            <>
            <Header title={title} image={image} SmallImage={SmallImage} id={id}>
                <p>{children}</p>
            </Header>
          
            </>
        )
    })
  )
}

export default CardAbout