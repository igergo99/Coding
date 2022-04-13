import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <ul>
                <li><NavLink to='/about'>About Me</NavLink></li>
                <li><NavLink to='/proficiency/'>Proficiency</NavLink></li>
                <li><NavLink to='/reference'>Reference</NavLink></li>
                <li><NavLink to='/blogposts'>Blog</NavLink></li>
                <li><NavLink to='/login'>Log In</NavLink></li>
                {/* <li><NavLink to='/prices'>Prices</NavLink></li>
                <li><NavLink to='/contact'>Contact Me</NavLink></li>
                <li><NavLink to='/registration'>Registration</NavLink></li>
                <li><NavLink to='/signin'>Sign In</NavLink></li>           */}
            </ul>
        </>
    );
};

export default Navbar;
