import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WishButton from "../WishSection/WishButton";
import CartButton from "../CartSection/CartButton";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Header({
    scrollPosition,
    handleActive,
    active,
    menuRef,
    handleRemoveActive,
    handlePageScroll,
    handleCategoryClick,
    handleFormSubmit,
    handleSearchActive
}) {

     const handleNoPageScroll = () => {
        document.body.classList.add('no-scroll')
    }
    // const location = useLocation();

    // // Extract the path from the location object
    // const currentPath = location.pathname;
  
    // // State to track if the current path includes "/product/"
    // const [isProductPage, setIsProductPage] = useState(false);
  
    // useEffect(() => {
    //   // Check if the current path includes "/product/" when the component mounts or when location changes
    //   setIsProductPage(currentPath.includes("/product/"));
    // }, [currentPath]);
    //   console.log(currentPath);
    return (
        <header className={`fixed ${scrollPosition > 50 ? 'bg-white' : ''}`}>
            <div className={`row f-jBetween f-aCenter ${(scrollPosition > 50) ? 'black' : ''}`}>
                <div className="f-rReverse w90 row f-aCenter">
                    <div className="wrapper w10">
                        <div className="image">
                            <img className='logo' style={{
                                filter: scrollPosition > 50 ? '' : 'invert(1) sepia(1) hue-rotate(0deg) brightness(1.2)'
                            }} src="/images/header-logo.svg" alt="" />
                        </div>
                    </div>
                    <Menu
                        handleActive={handleActive}
                        handleNoPageScroll={handleNoPageScroll}
                        scrollPosition={scrollPosition}
                        active={active}
                        menuRef={menuRef}
                        handleRemoveActive={handleRemoveActive}
                        handlePageScroll={handlePageScroll}
                        handleCategoryClick={handleCategoryClick}
                        handleFormSubmit={handleFormSubmit}
                    />
                </div>
                <div className="wrapper row">
                    <div className="col icon-mob">
                        <Link to='/register'>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </div>
                    <div className="col icon-mob">
                        <Link onClick={() => {
                            handleSearchActive();
                            handleNoPageScroll();
                        }}>
                            <FontAwesomeIcon icon={faSearch} />
                        </Link>
                    </div>
                    <div className="col icon-mob">
                        <Link to='/wish'>
                            <WishButton />
                        </Link>
                    </div>
                    <div className="col">
                        <Link to='/cart'>
                            <CartButton />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}