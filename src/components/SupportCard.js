import React from 'react';

function SupportCard(props){
  return (
    <div>
      <img src={props.image} />
      <h3>{props.name}</h3>
      <p>{props.des}</p>
      <a href="#" className="support-btn">
        read more
      </a>
    </div>
  )
}

export default SupportCard
