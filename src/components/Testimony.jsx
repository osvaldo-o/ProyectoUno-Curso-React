import React from 'react';
import '../stylesheets/Testimony.css';

function Testimony(props) {
  return (
    <div className='container-testimony'>
      <img className='image-testimony' src={require(`../image/img-${props.image}.png`)} alt={`from an ${props.name}`} />
      <div className='container-text-testimony'>
        <p className='name-testimony'><strong>{props.name}</strong> in {props.country}</p>
        <p className='position-testimony'>{props.position} at <strong>{props.business}</strong></p>
        <p className='text-testimony'>"{props.testimonyInicio} 
         <strong>{props.testimonyBold}</strong> {props.testimonyEnd}"</p>
      </div>
    </div>
  );
}

export default Testimony;