import { useEffect, useRef, useState } from 'react';
import { apiConfig, category, movieType, tmdbApi } from '../api';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import { Button, ButtonOutline } from './Button';
import { Modal, ModalContent } from './Modal';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const HeroSlide = () => {

    SwiperCore.use([ Autoplay ]);

    const  [ movieItems, setMovieItems ] = useState([]);

    useEffect(() => {
        const getMovies = async() => {
            const params = { page: 1 }
            try {
                const response = await tmdbApi.getMoviesList( movieType.popular, { params } );
                setMovieItems( response.results.slice( 0, 9 ) );
                console.log( response )
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);

    return (
        <div className='hero-slide'>
            <Swiper
                modules={[ Autoplay ]}
                grabCursor={ true }
                spaceBetween={ 1 }
                slidesPerView={ 1 }
                autoplay={{ delay: 3000 }}
            >
                {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={ i }>
                            {({ isActive }) => (
                                <HeroSlideItem item={ item } className={`${ isActive ? 'active' : ''}`}/>   
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {
                movieItems.map((item, i) => <TrailerModal key={ i } item={ item }/>)
            }
        </div>
    )
}

const HeroSlideItem = ( props ) => {

    const navigate = useNavigate();

    const item = props.item

    const background = apiConfig.originalImage( 
        item.backdrop_path 
        ? 
        item.backdrop_path 
        : 
        item.poster_path )

    const setModalActive = async() => {

        const modal = document.querySelector(`#modal_${item.id}`)

        const videos = await tmdbApi.getVideos(category.movie, item.id);

        if ( videos.results.length > 0 ) {
            const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
        } else {
            modal.querySelector('modal__content').innerHTML = 'No trailer';
        }

        modal.classList.toggle('active');
    }

    const navigateItem = () => {
        navigate('/movie/' + item.id)
    }

    return (
        <div 
        className={`hero-slide__item ${props.className}`}
        style={{ backgroundImage: `url(${ background })` }}
        >
            <motion.div
             className='hero-slide__item__content container'
                whileInView={{y: [50, 0], opacity: 1}}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
             >
                <div className='hero-slide__item__content__info'>
                    <h2 className='hero-slide__item__content__info--title'>{ item.title }</h2>
                    <div className='hero-slide__item__content__info--overview'>{item.overview}</div>
                    <Button text='watch now' onClick={ navigateItem }></Button>
                    <ButtonOutline onClick={ setModalActive } text='watch trailer'></ButtonOutline>
                </div>
                <div className='hero-slide__item__content__poster'>
                    <img src={ apiConfig.W400Image(item.poster_path) } alt='poster' />
                </div>
            </motion.div>
        </div>
    )
}

const TrailerModal = ( props ) => {

    const item = props.item

    const iframeRef = useRef( null );

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={ false } id={`modal_${item.id}`}>
            <ModalContent onClose={ onClose }>
                <iframe ref={ iframeRef } width='100%' height='500px' title='trailer'></iframe>
            </ModalContent>
        </Modal>
    )

}