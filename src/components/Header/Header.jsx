import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import "./Header.scss";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import Logo from '../../assets/logotype.png'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(false);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const { cartCount, showCart, setShowCart, user, handleLogout } = useContext(Context);

    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <div className="left">
                        <img className="header-logo" src={Logo} alt="nice" onClick={() => {
                            navigate('/')
                        }} />
                    </div>
                    {/* <div className="center" onClick={() => navigate("/")}>
                        JSDEVSTORE.
                    </div> */}
                    <ul className="right">
                        <li onClick={() => { navigate('/') }}>Home</li>
                        <li onClick={() => { navigate('/category/1') }}>TShirts</li>
                        <li onClick={() => { navigate('/category/2') }}>Hoodies</li>
                        <li onClick={() => { navigate('/category/3') }}>Sweatshirts</li>
                        <span
                            className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                        {user && (
                            <li onClick={() => {
                                handleLogout();
                            }}>Logout</li>
                        )}
                        {!user && (
                            <li onClick={() => { navigate('/login') }}>Login</li>
                        )}
                    </ul>
                </div>
            </header>
            {showCart && <Cart />}
        </>
    );
};

export default Header;
