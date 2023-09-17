import React from 'react';
import './cardsStyle.css';

type ImgProps = {
    imgSrc: string,
  alt: string
}

const Img: React.FC<ImgProps> = ({ imgSrc, alt}) => {
  return (
    <div className='imgItem'>
      <img className="card-img-top" src={imgSrc} alt={alt}/>
    </div>
  )
}

export default Img