import Logo from '../assets/images/logo.svg'
import cartIcon from '../assets/images/icon-cart.svg'
import imgProfile from '../assets/images/image-avatar.png'
import toggleMenu from '../assets/images/icon-menu.svg'
import toggleClose from '../assets/images/icon-close.svg'
import { NavLink } from 'react-router-dom'
import './header.css'
import { useState } from 'react'
import { Cart } from './Cart'
import { useStore } from './store'
export function Header(){
    const [menu, setMenu] = useState(false)
    const [showCart , setShowCart] = useState(false)
    const cart = useStore((state)=>(state.cart))
    const classNameCart = showCart ? 'cart-container show' : 'cart-container'
    const classNameMenu = menu? 'nav show' : 'nav'
    const classNameToggle = menu? 'toggle-menu fixed' : 'toggle-menu'
    const cartClassname = cart.length > 0 ? 'cari-icon-container ' : 'cari-icon-container'
    const handleMenu = () =>{
        setMenu(!menu)
    }
    const handleCart =()=>{
        setShowCart(!showCart)
    }
    const handleClick = () =>{
        setMenu(false)
        showCart(false)
    }
    return(
        <header className='header'>
            <div className="header__section">
                 <picture className={classNameToggle} onClick={handleMenu}>
                    <img src={menu ? toggleClose :toggleMenu} alt="toggle img" className="toggle" />
                </picture>
                <picture className="logo-container">
                    <img src={Logo} alt="Logo img" className="logo" />
                </picture>
                <nav className={classNameMenu}>
                    <ul className="menu">
                        <li className="menu__item">
                            
                            <NavLink onClick={handleClick} to='/' className={({isActive, isPending})=>{
                                return isPending ? "menu__link " : isActive  ? "menu__link active": "menu__link "
                            }}  >Collection</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink onClick={handleClick} to='/men' className={({isActive, isPending})=>{
                                return isPending ? "menu__link " : isActive  ? "menu__link active": "menu__link "
                            }}>Men</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink onClick={handleClick} to='/women' className={({isActive, isPending})=>{
                               return isPending ? "menu__link " : isActive  ? "menu__link active": "menu__link "
                            }}>Women</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink onClick={handleClick} to='/about' className={({isActive, isPending})=>{
                               return isPending ? "menu__link " : isActive  ? "menu__link active": "menu__link "
                            }}>About</NavLink>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header__section">
                <picture className={cartClassname} onClick={handleCart}>
                    {cart.length > 0 && <p className='tag'>{cart.length}</p>}
                    <img src={cartIcon} alt="Cart-icon" className="cart-icon" />
                </picture>
                <picture>
                    <img src={imgProfile} alt="img Profile" className="profile-img" />
                </picture>
            </div>
            <div className={classNameCart}>
                <Cart/>
            </div>
        </header>
    )
}