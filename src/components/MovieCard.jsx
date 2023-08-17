import { Link } from 'react-router-dom';
import { Button } from './Button';
import { apiConfig, category } from '../api';
import { FaPlay } from "react-icons/fa";


export const MovieCard = props => {

    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.W400Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className='movie-card' style={{backgroundImage: `url(${bg})`}}>
                <Button text={ <FaPlay /> } className='small movie-card__btn'>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
}