import { SwiperSlide, Swiper } from "swiper/react"
import { tmdbApi } from "../api"
import { useState, useEffect } from "react"
import { MovieCard } from "./MovieCard"


export const MovieList = ( props ) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch(props.category) {
                    case props.category.tv:
                        response = await tmdbApi.getTvList(props.type, {params});
                        break;
                    default:
                        response = await tmdbApi.getMoviesList(props.type, {params});   
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results);
        }
        getList();
    }, []);

    return (
        <div className="movie-list tv-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}
