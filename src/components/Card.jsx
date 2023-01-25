import React from 'react'
import Star from '../images/Star1.png'     

export default function Card(props) {

  let cardbadge;
  if(props.item.openSpots === 0){ 
    cardbadge = "SOLD OUT";
  }else if(props.item.location === "Online"){
    cardbadge = "ONLINE";
  }else{
    cardbadge = "";
  }
  return (
    <div className='card'>
        {cardbadge && <div className='card--badge'>{cardbadge}</div>}
        <img src={`${props.item.coverImg}`} alt="imagecard" className='card--image  '></img>
        <div className='card--specs'>
            <img src={Star} alt="starrating"></img>
            <span className='card--rating'>{props.item.stats.rating}</span>
            <span className='card--review'>({props.item.stats.reviewCount})</span>
            <span className='card--country'>* {props.item.location}</span>
        </div>
        <span className='card--text'>{props.item.title}</span>
        <span className='card--rate'><b>From ${props.item.price}</b> / person</span>
      
    </div>

  )
}
