import React from 'react'
import Card from '../UI/Card'
import { boxtree, faq } from '../data'
import TreeOnly from './FAQ'
import FAQ from './FAQ'

// const MainTree = () => {
//   return (
//     <div className='container box-tree'>
        
//         {
//           boxtree.map(({id , icon , info}) => {
//             return(
//               <Card className="boxtree" key={id}>
//                 <span>{icon}</span>
//                 <p>{info}</p>

//               </Card>
//             )
//           })
//         }
//       </div>
//   )
// }

// export default MainTree



const FAQS = () => {
  return(
    <section className='faqs'>
      <div className='container faqs__container'>
        <div className='faqs__wrapper'>
          {
            faq.map(({id, image, info}) => {
              return <FAQ key={id} image={image} info={info} />
            })
          }
        </div>
      </div>
    </section>
  )
}


export default FAQS;