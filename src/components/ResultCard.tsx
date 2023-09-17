
import Card from './Card';
import img from '../assets/no-foto.png';

type CardProps ={
    image: string;
    // children: Card;
}

const CardWithoutImg = (props: Omit<CardProps, "image">)=>(
    <Card {...props }>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn">Go somewhere</a>
        </Card>
)

const CardWithImg = ({image}: CardProps)=>(
    <Card image={image}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn">Go somewhere</a>
        </Card> 
)

function ResultCard() {

    return (
      <div className='app'>
       
        <CardWithImg image={img}/> 
        {<CardWithoutImg/>} 
      </div>
    )
  }
  
  export default ResultCard