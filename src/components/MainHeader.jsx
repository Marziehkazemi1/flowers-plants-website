import React from 'react'
import {Link} from "react-router-dom"
import Image from "../images/pic7.jpg"

 const MainHeader = () => {
   return(
     <section className=' main__header'>
        
       <div className='container header__left'>
          <h2>To Share a flower is to Share the happiness.</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam excepturi simiique eius
                optio. Dolorum, quaerat.</p>
          <Link to="/gallery" className="btn lg">Get Gallery</Link>
      </div>

       <div className='header__bg'>
         <img src={Image} className="header__image" />
       </div>

     </section>
   )
}

export default MainHeader;




