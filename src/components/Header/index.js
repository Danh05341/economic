import { AiOutlineSearch } from "react-icons/ai";
import { BsTelephone, BsCart4, BsFillTelephoneFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

import './Header.scss'

function Header() {
    return (
        <div className='header'>
            <div className="container">
                <div className='logo'>
                    <img src='https://bizweb.dktcdn.net/100/342/645/themes/701397/assets/logo.png?1677377108874'></img>
                </div>
                <div className='header-menu'>
                    <div className='search'>
                        <input className="search-input" placeholder='Tìm kiếm...'></input>
                        <button className="search-icon">
                            <AiOutlineSearch></AiOutlineSearch>
                        </button>
                        
                    </div>
                    <a className='hotline-link' href="#">
                        <div className="hotline-content">
                            <p>Tư vấn bán hàng</p>
                            <h3>Gọi ngay 19006750</h3>
                        </div>
                        <div className="hotline-icon">
                            <BsFillTelephoneFill></BsFillTelephoneFill>
                        </div>
                    </a>

                    <div className="login">
                        <CiUser></CiUser>
                    </div>
                    <div className="cart">
                        <BsCart4></BsCart4>
                    </div>
                </div>
            </div>

            <div>
                TEST PULL V2
            </div>
        </div>
    )
}

export default Header