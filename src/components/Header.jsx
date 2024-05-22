import openMenuImage from '../assets/images/icon-menu.svg';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import closeMenuImage from '../assets/images/icon-close-menu.png'
export const Header = () => {
    const location = useLocation()
    const [menuToggle, setMenu] = useState(false)
    const toggleMenu = (e) => {
        setMenu(!menuToggle)
    }
    return (
        <header className="flex justify-between items-center p-3 sm:mr-[80px] lg:mr-[300px] sm:relative">
            <img src={openMenuImage} alt="Menu Icon" className="toggleMenu cursor-pointer  right-4 absolute" id="toggleMenu" onClick={toggleMenu} />
            <nav id="navbar" className={`md:flex block  w-full top-0 left-0 absolute ${menuToggle ? 'block' : 'hidden'}`} >
                <div className="back  md:block z-10 absolute" ></div>
                <div className="front md:flex flex-col md:flex-row md:justify-end md:items-center z-30 h-full ">
                    <div className="close-img-container text-right relative">
                        <img id="close-btn" src={closeMenuImage} alt="Close NavBar" className="cursor-pointer right-0 absolute" onClick={toggleMenu} />
                    </div>
                    <ul className='nav-list top-11 absolute sm:top-0'>
                        <li className={location.pathname === '/' ? 'active-page' : ''}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={location.pathname === '/about' ? 'active-page' : ''}>
                            <Link to="/about">About</Link>
                        </li>
                        <li className={location.pathname === '/projects' ? 'active-page' : ''}>
                            <Link to="/projects">Projects</Link>
                        </li>
                        {/* <li className={location.pathname === '/contact' ? 'active-page' : ''}>
                            <Link to="/contact">Contact</Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
