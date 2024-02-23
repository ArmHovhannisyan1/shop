import { Link } from "react-router-dom";
import SubAccordion from "../Accordion/SubAccordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function NavBar({
    handleRemoveActive,
    handlePageScroll,
    handleCategoryClick
}) {
    const [clicked, setClicked] = useState(false)
    const handleClicked = () => {
        setClicked(true)
    }
    // console.log(clicked)
    const handleHover = () => {
        // console.log(clicked)
        setClicked(false);
    }
    return (
        <nav>
            <ul className="row">
                <SubAccordion close={handleRemoveActive} closescroll={handlePageScroll} />
                <li className='home rel li-parent dropdown-parent'>
                    <Link to='/home' onClick={handleClicked} onMouseEnter={handleHover}>Home</Link>
                    <ul className={`dropdown-mid dropdown ${clicked ? 'clicked' : ''}`}>
                        <li className="dropdown-title">
                            <h5><Link to='/'>Homepage Demos</Link></h5>
                        </li>
                        <li>
                            <Link to='/'>Home V1</Link>
                        </li>
                        <li>
                            <Link to='/'>Home V2</Link>
                        </li>
                        <li>
                            <Link to='/'>Home V3</Link>
                        </li>
                        <li>
                            <Link to='/'>Home V4</Link>
                        </li>
                        <li>
                            <Link to='/'>Home V5</Link>
                        </li>
                        <li>
                            <Link to='/'>Home V6</Link>
                        </li>
                    </ul>
                </li>
                <li className='shop li-parent dropdown-parent'>
                    <Link to='/shop' onClick={handleClicked} onMouseEnter={handleHover}>Shop</Link>
                    <ul className={`dropdown-other dropdown row ${clicked ? 'clicked' : ''}`}>
                        <li>
                            <ul className='dropdown-other-title-parent'>
                                <li className='dropdown-other-title'><h5><Link>Shop Layout</Link></h5></li>
                                <li><Link to='/'>Checkout</Link></li>
                                <li><Link onClick={handleClicked} onMouseEnter={handleHover} to='/cart'>Cart</Link></li>
                                <li><Link onClick={handleClicked} onMouseEnter={handleHover} to='/wish'>Wishlist</Link></li>
                            </ul>
                        </li>
                        <li>
                            <ul className='dropdown-other-title-parent'>
                                <li className='dropdown-other-title'><h5><Link to='/'>Product Layout</Link></h5></li>
                                <li><Link to='/'>Big Images Scrolling</Link></li>
                                <li><Link to='/'>Product Carousel</Link></li>
                                <li><Link to='/'>Product Grid</Link></li>
                                <li><Link to='/'>Vertical Right</Link></li>
                                <li><Link to='/'>Vertical Left</Link></li>
                                <li><Link to='/'>Vertical Horizontal</Link></li>
                                <li><Link to='/'>Collection</Link></li>
                            </ul>
                        </li>
                        <li>
                            <ul className='dropdown-other-title-parent'>
                                <li className='dropdown-other-title'><h5><Link to='/'>Product Types</Link></h5></li>
                                <li><Link to='/'>Simple Product</Link></li>
                                <li><Link to='/'>Grouped Product</Link></li>
                                <li><Link to='/'>Variable Product</Link></li>
                                <li><Link to='/'>Downloadable</Link></li>
                                <li><Link to='/'>Special Product</Link></li>
                                <li><Link to='/'>Outshoot Store</Link></li>
                            </ul>
                        </li>
                        <li>
                            <ul className='dropdown-other-title-parent'>
                                <li className='dropdown-other-title'><h5><Link to='/'>Product Categories</Link></h5></li>
                                <li onClick={() => {
                                    handleCategoryClick('Bedroom');
                                }}>
                                    <Link to='/shop' onClick={handleClicked} onMouseEnter={handleHover}>Bedroom</Link>
                                </li>
                                <li onClick={() => {
                                    handleCategoryClick('Outdoor');
                                }}>
                                    <Link to='/shop' onClick={handleClicked} onMouseEnter={handleHover}>Outdoor</Link>
                                </li>
                                <li onClick={() => {
                                    handleCategoryClick('Kitchen');
                                }}>
                                    <Link to='/shop' onClick={handleClicked} onMouseEnter={handleHover}>Kitchen</Link>
                                </li>
                                <li onClick={() => {
                                    handleCategoryClick('Lighting');
                                }}>
                                    <Link to='/shop' onClick={handleClicked} onMouseEnter={handleHover}>Lighting</Link>
                                </li>
                                <li onClick={() => {
                                    handleCategoryClick('Table');
                                }}>
                                    <Link to='/shop' onClick={handleClicked} onMouseEnter={handleHover}>Table</Link>
                                </li>
                                <li onClick={() => {
                                    handleCategoryClick('Decor');
                                }}>
                                    <Link to='/shop' onClick={handleClicked} onMouseEnter={handleHover}>Decor</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className='li-parent rel small dropdown-parent'>
                    <Link to='/'>Blog</Link>
                    <ul className="dropdown-small dropdown">
                        <li className='double-dropdown-parent'>
                            <Link to='/' className='row f-jBetween f-aCenter'>
                                Blog Standard
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Link>
                            <ul className="double-dropdown">
                                <li className='double-dropdown-child'><Link to='/'>Blog Full Width</Link></li>
                                <li className="double-dropdown-child"><Link to='/'>Blog Left Sidebar</Link></li>
                                <li className="double-dropdown-child"><Link to='/'>Blog Right Sidebar</Link></li>
                                <li className="double-dropdown-child"><Link to='/'>Blog Sidebar None</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/'>Blog Big Image</Link></li>
                        <li><Link to='/'>Blog Grid</Link></li>
                        <li><Link to='/'>Blog Box Landing</Link></li>
                    </ul>
                </li>
                <li className='li-parent rel small dropdown-parent'>
                    <Link onMouseEnter={handleHover}to='/'>Pages</Link>
                    <ul className={`dropdown-small dropdown ${clicked ? 'clicked' : ''}`}>
                        <li><Link to='/about' onClick={handleClicked}>About Me</Link></li>
                        <li><Link to='/register' onClick={handleClicked}>Login & Register</Link></li>
                        <li><Link to='/'>Pages 404</Link></li>
                    </ul>
                </li>
                <li className='li-parent' onClick={() => {
                    handleRemoveActive();
                    handlePageScroll();
                }}><Link to='/about'>About</Link></li>
                <li className='li-parent' onClick={() => {
                    handleRemoveActive();
                    handlePageScroll();
                }}><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>);
}