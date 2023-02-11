import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const FAQ = ({image,info}) => {

  const [isShowingInfo , setIsShowingInfo] = useState(false)

  return (
    <article className='faq' onClick={() => setIsShowingInfo(prev => !prev)}>
      <div className='faq__image'>
        <img src={image} />
        </div>
        <div>
        <button className='faq__icon'>
          {
            isShowingInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>
          }
        </button> 
      </div>
      {isShowingInfo && <p>{info}</p>}
    </article>
  )
}

export default FAQ