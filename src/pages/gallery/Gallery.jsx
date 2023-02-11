import React from "react";
import GalleryLeft from "../../components/GalleryLeft";
import './gallery.css';
import {gallery} from "../../data"
import Slider from "../../components/Slider";

const Gallery = () => {

    return(
        gallery.map(({image, ImageTop, ImageBottom, BottomBig, ImageRight, TopSmall, BottomSmall}) => {
            return(
                <>
            <GalleryLeft  image={image} ImageTop={ImageTop} ImageBottom={ImageBottom}
             BottomBig={BottomBig} ImageRight={ImageRight} 
             TopSmall={TopSmall} BottomSmall={BottomSmall}></GalleryLeft>
             
             <Slider />
             </>
             
            )
          })
    )
}

export default Gallery;