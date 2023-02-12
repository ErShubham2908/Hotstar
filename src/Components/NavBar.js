import searchimg from './image/search.png'
import HomeIcon from './image/Home.png';
import './Style.css'

const NavBar = () => {
    return(
        <div className="item_navbar_parent">
            <img src={HomeIcon} className="item_home_icon" alt="Not Found" />
            <div className="item_navbar">
                <span className="item_nav">
                    <span className="item_diseny">Diseny+</span> 
                    <span className="item_hotstar">Hotstar</span>
                </span>
                <span className="item_nav" >TV</span>
                <span className="item_nav" >Movies</span>
                <span className="item_nav" >Sports</span>
                <span className="item_nav" >Diseny+</span>
            </div>

            <div className="item_search">
                <input type="search" placeholder="Search" className="item_search_icon"/>
                <img src={searchimg} alt="Not Found" className="item_search_img" />
                <p className="item_subscribe">Subscribe</p>
                <p className="item_login">LOGIN</p>
            </div>
            </div>
    )
}

export default NavBar;