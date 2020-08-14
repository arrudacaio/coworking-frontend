  
import React from 'react'
import './card.css'

const Card = ({email, isAdmin, text}) => {



  return(
    <div className="card">
        <h1 className="h1-card">{email}</h1>
        <h3 className="h3-card">{text + isAdmin}</h3>

    </div>
  );
}

export default Card