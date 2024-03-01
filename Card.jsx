/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Card.css'
function Card(props){
    return (
        <div className="Card">
        <h2>{ props.location }</h2>
        <a href={props.page}>
            <button>Site</button>
        </a>
        
      
    </div>
        )
        
}
export default Card