import { Link } from 'react-router-dom'
import { ButtonViewMore, HeroSlide, MovieList, TvList } from '../components'
import { category, movieType, tvType } from '../api'


export const Home = () => {
    return (
        <>
            <HeroSlide />
            <div className='container'>
                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Trending Movies</h2>
                        <Link to='/movie'>
                            <ButtonViewMore className='small' text='view more' onClick={null}/>
                        </Link>
                    </div>
                    <MovieList category={ category.movie } type={ movieType.popular } />
                </div>

                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Top Rated Movies</h2>
                        <Link to='/movie'>
                            <ButtonViewMore className='small' text='view more' onClick={null}/>
                        </Link>
                    </div>
                    <MovieList category={ category.movie } type={ movieType.top_rated } />
                </div>

                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Trending TV</h2>
                        <Link to='/tv'>
                            <ButtonViewMore className='small' text='view more' onClick={null}/>
                        </Link>
                    </div>
                    <TvList category={ category.tv } type={ tvType.popular } />
                </div>

                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Top Rated TV</h2>
                        <Link to='/tv'>
                            <ButtonViewMore className='small' text='view more' onClick={null}/>
                        </Link>
                    </div>
                    <TvList category={ category.tv } type={ tvType.top_rated } />
                </div>
            </div>
        </>
    )
}