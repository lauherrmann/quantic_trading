import { Link } from 'react-router-dom'; 
import './style.css';

function Card( {img, imageDescription, title, detailsRedirect} ) {
    return (
        <div className='card_content'>
            <div className='photo_container'>
                <img src={img} alt={imageDescription} className='card_photo'/>
            </div>
            <div className="card_infos-container">
                <div className="card_description-container">
                    <h1 className='card_title'>{title}</h1>
                </div>
                <p className='card_details'> 
                    <Link to={detailsRedirect}>Detalhes</Link>
                </p> 
            </div> 
        </div>  
    )
}

export default Card;