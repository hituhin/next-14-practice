import React from 'react'
import style from "./card.module.css"
import Image from '../../../../public/user.png'
import CardAction from './card-action'
const Card = () => {
  return (
     <div className={style.container}>
        <div className="card-normal  glass">
          <div className="card-body">
            <h2 className="card-title"></h2>
            <p>How to park your car at your garage?</p>
              <CardAction/>
          </div>
        </div>
     </div>
  )
}

export default Card 