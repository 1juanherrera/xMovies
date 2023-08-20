import { Link, useParams } from 'react-router-dom';
import { Button } from './Button';
import { apiConfig, category } from '../api';
import { FaPlay } from "react-icons/fa";
import { motion } from 'framer-motion';

export const MovieCard = props => {

    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.W400Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <motion.div
            whileHover={{scale: 1.1}}
            className='movie-card' style={{backgroundImage: `url(${bg})`}}>
                <Button text={ <FaPlay /> } className='small movie-card__btn'>
                </Button>
            </motion.div>
            <h3 className='movie-card__title'>{ item.title || item.name }</h3>
        </Link>
    );
}