'use client'
import React from 'react'

const CardAction = () => {
    let CardButtonAction = (e:any)=>{
        console.log('clicked button !',e);      
    }
  return (
    <div>
        <div className="card-actions justify-end">
              <button className="btn btn-primary" name='cardButton' onClick={CardButtonAction}>Learn now!</button>
        </div>
    </div>
  )
}

export default CardAction