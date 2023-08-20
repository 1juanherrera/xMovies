import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { tmdbApi, apiConfig } from "../../api"
import { CastList } from "./CastList";
import { VideoList } from "./VideoList";
import { MovieList } from '../../components';

export const Detail = () => {

    const { category, id } = useParams();

    const [ item, setItem ] = useState( null );

    useEffect(() => {
        const getDetail = async() => {
            const response = await tmdbApi.detail(category, id, {params:{}})
            setItem(response);
            window.scrollTo(0,0);
        }
        getDetail();
    }, [category, id])

    return (
        <div>
            {
                item && (
                    <>
                        <div className="banner" style={{ backgroundImage: `url(${apiConfig.originalImage
                        (item.backdrop_path || item.poster_path)})`}}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" 
                                style={{ backgroundImage: `url(${apiConfig.originalImage
                                    (item.poster_path || item.backdrop_path)})` }}></div>
                            </div>
                            <div className="movie-content__info">
                                <h1 className="movie-content__info__title">
                                    { item.title || item.name }
                                </h1>
                                <div className="movie-content__info__genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span className="movie-content__info__genres--item" key={ i }>{ genre.name }</span>
                                        ))
                                    }
                                </div>
                                <p className="movie-content__info__overview">
                                    { item.overview }
                                </p>
                                <div className="movie-content__info__cast">
                                    <div className="movie-content__info__cast--header">
                                        <h2>Casts</h2>
                                    </div>
                                    <CastList id={ item.id } />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                               <VideoList id={item.id} /> 
                            </div>
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2 className="movie-content__info__cast--similar">Similar</h2>
                                </div>
                                <MovieList category={ category } type='similar' id={item.id} />
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}