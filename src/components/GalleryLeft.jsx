import React from 'react'


// const GalleryLeft = ({image, ImageTop, ImageBottom}) => {
//     return(
//         <div className='container  gallery'>
//         <div className="gallery__container">
//             <div className="gallery__container-bg">
//                 <img src={image} alt="Big Image" />
//             </div>
//             <div className='image__content'>
//                 <img className='image__top' src={ImageTop} />
//                 <img className='image__bottom' src={ImageBottom} />
//             </div>
//             </div>
//             </div>
//     )
// }

// export default GalleryLeft







const GalleryLeft = ({image, ImageTop, ImageBottom, BottomBig, TopSmall, BottomSmall, ImageRight}) => {
    return(
        <div className='container  gallery'>


        <div className="gallery__container">
            <div className="gallery__container-bg">
                <img src={image} alt="Big Image" />
            </div>
            <div className='image__content'>
                <img className='image__top' src={ImageTop} />
                <img className='image__bottom' src={ImageBottom} />
            </div>
            </div>


            <div className='image__bottom-big'>
                <img className='bottom__big' src={BottomBig} />
            </div>


            <div className='image__content-right'>
            <div className='image__content-bottom'>
                <img className='image__top-small' src={TopSmall} />
                <img className='image__bottom-small' src={BottomSmall} />
            </div>
            <div className='image__right'>
                <img className='image__right' src={ImageRight} />
            </div>
            </div>

            </div>
    )
}

export default GalleryLeft