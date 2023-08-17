import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/xmovie.png';
import { useEffect, useRef } from 'react';

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movies'
    },
    {
        display: 'Tv Series',
        path: '/tv'
    }
];

export const Header = () => {

    const { pathname } = useLocation();
    const headerRef = useRef( null );

    const active = headerNav.findIndex( e => e.path === pathname );

    useEffect(() => {
        const shrinkHeader = () => {
            if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        }
    }, [])

    return (
        <div ref={ headerRef } className='header'>
            <div className="header__wrap container">
                <div className="header__wrap__logo">
                    <img src={ logo } alt='logo' />
                    <Link to='/'>xMovies</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) =>(
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}