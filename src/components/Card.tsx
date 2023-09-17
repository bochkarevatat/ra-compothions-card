import React, { ReactNode } from 'react';
import './cardsStyle.css';
import Img from './Img.tsx';
// import image from '../assets/no-foto.png';

type CardProps = {
  img?: string,
  children: ReactNode
}
// const img = Img
console.log(Img)
const Card: React.FC<CardProps> = ({ image, children }) => {
  return (
    <div className="card">
      
        {image &&
        <Img imgSrc={image} alt=""/>}
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

export default Card