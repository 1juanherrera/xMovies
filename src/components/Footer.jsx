import logo from '../assets/xmovie.png';
import bg from '../assets/footer-bg.jpg';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__content">
                <div className="footer__content__logo container">
                    <div className="footer__content__logo--logo">
                        <img src={ logo } alt='logo' />
                        <Link to='/'>xMovies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                <div className="footer__content__menus--menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact me</Link>
                        <Link to="/">Github</Link>
                        <Link to="/">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}