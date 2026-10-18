import {Link} from 'react-router-dom'
const cartIcon = new URL('../../Resources/icons_and_logos/cart-icon.svg', import.meta.url).href

const NavIcons = () =>{
   return (<div className = "nav-icons">
    <ul className = "nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/cart"><img src={cartIcon} alt="Cart" /></Link> </li>
    </ul>
    </div>)
}

export default NavIcons;