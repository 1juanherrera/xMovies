import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"

import { tmdbApi, apiConfig } from "../../api"

export const CastList = ( props ) => {

    const { category } = useParams();

    const [ casts, setCasts ] = useState([]);

    useEffect(() => {
        const getCredits = async() => {
            const res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 5));
        }
        getCredits();
    }, [ category, props.id ])

    return (
        <div className="cast">
            {
                casts.map((item, i) => (
                    <div key={ i } className="cast__item">
                        <div className="cast__item__img" style={{ backgroundImage: `url(${apiConfig.
                            W400Image(item.profile_path)})`}}></div>
                        <p className="cast__item__name">{ item.name }</p>
                    </div>
                ))
            }
        </div>
    )
}