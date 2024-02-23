import { useDispatch } from "react-redux"
import Accordion from "./Accordion"
import { Link } from 'react-router-dom'
import { setCategoryFilter1 } from "../../redux/filter/actions"

export default function SubAccordion({ close, closescroll }) {
    const dispatch = useDispatch()
    const handleCategoryClick = (category) => {
        dispatch(setCategoryFilter1(category))
    }
    return (
        <li className='tablet f-column'>
            <Accordion
                controllerElement={(isActive) => (
                    <>
                        <Link to='/home'
                            onClick={() => {
                                close()
                                closescroll()
                            }}>Home</Link> {isActive ? '-' : '+'}
                    </>
                )}>
                <li>
                    <ul className='content'>
                        <li>
                            <Link to='/'>Homepage Demos</Link>
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
            </Accordion>
            <Accordion
                controllerElement={(isActive) => (
                    <>
                        <Link onClick={() => {
                            close()
                            closescroll()
                        }} className='label' to='/shop'>Shop </Link>{isActive ? '-' : '+'}
                    </>
                )}>
                <li>
                    <Accordion
                        controllerElement={(isActive) => (
                            <>
                                <Link className='label'>Shop Layout</Link> {isActive ? '-' : '+'}
                            </>
                        )}>
                        <li>
                            <ul className='content'>
                                {/* <li><Link to='/'>Full Width</Link></li> */}
                                {/* <li><Link to='/'>Sidebar Right</Link></li> */}
                                {/* <li><Link to='/'>Sidebar Left</Link></li> */}
                                {/* <li><Link to='/'>List View</Link></li> */}
                                <li><Link to='/'>Checkout</Link></li>
                                <li onClick={() => {
                                    close()
                                    closescroll()
                                }}><Link to='/cart'>Cart</Link></li>
                                <li onClick={() => {
                                    close()
                                    closescroll()
                                }}><Link to='/wish'>Wishlist</Link></li>
                            </ul>
                        </li>
                    </Accordion>
                    {/* <Accordion
                        controllerElement={(isActive) => (
                            <>
                                <Link className='label' to='/'>Product Layout</Link> {isActive ? '-' : '+'}
                            </>
                        )}>
                        <li>
                            <ul className='content'>
                                <li><Link to='/'>Big Images Scrolling</Link></li>
                                <li><Link to='/'>Product Carousel</Link></li>
                                <li><Link to='/'>Product Grid</Link></li>
                                <li><Link to='/'>Vertical Right</Link></li>
                                <li><Link to='/'>Vertical Left</Link></li>
                                <li><Link to='/'>Vertical Horizontal</Link></li>
                                <li><Link to='/'>Collection</Link></li>
                            </ul>
                        </li>
                    </Accordion> */}
                    <Accordion
                        controllerElement={(isActive) => (
                            <>
                                <Link className='label'>Product Types</Link> {isActive ? '-' : '+'}
                            </>
                        )}>
                        <li>
                            <ul className='content'>
                                <li><Link to='/'>Simple Product</Link></li>
                                <li><Link to='/'>Grouped Product</Link></li>
                                <li><Link to='/'>Variable Product</Link></li>
                                <li><Link to='/'>Downloadable</Link></li>
                                <li><Link to='/'>Special Product</Link></li>
                                <li><Link to='/'>Outshoot Store</Link></li>
                                {/* <li><Link to='/'>Music</Link></li> */}
                            </ul>
                        </li>
                    </Accordion>
                    <Accordion
                        controllerElement={(isActive) => (
                            <>
                                <Link className='label'>Product Categories</Link> {isActive ? '-' : '+'}
                            </>
                        )}>
                        <li>
                            <ul className='content'>
                                <li onClick={() => {
                                    handleCategoryClick('Bedroom')
                                    close()
                                    closescroll()
                                }}>
                                    <Link to='/shop'>Bedroom</Link>
                                </li>
                                <li onClick={() => {
                                    handleCategoryClick('Outdoor')
                                    close()
                                    closescroll()
                                }}>
                                    <Link to='/shop'>Outdoor</Link>
                                </li>
                                {/* <li onClick={handleCategoryClick('Bedroom')}><Link to='/shop'>Decoration</Link></li> */}
                                <li onClick={() => {
                                    handleCategoryClick('Kitchen')
                                    close()
                                    closescroll()
                                }}>
                                    <Link to='/shop'>Kitchen</Link>
                                </li>
                                <li onClick={() => {
                                    handleCategoryClick('Lighting')
                                    close()
                                    closescroll()
                                }}>
                                    <Link to='/shop'>Lighting</Link>
                                </li>
                                <li onClick={() => {
                                    handleCategoryClick('Table')
                                    close()
                                    closescroll()
                                }}>
                                    <Link to='/shop'>Table</Link>
                                </li>
                                <li onClick={() => {
                                    handleCategoryClick('Decor')
                                    close()
                                    closescroll()
                                }}>
                                    <Link to='/shop'>Decor</Link>
                                </li>
                            </ul>
                        </li>
                    </Accordion>
                </li>
            </Accordion>
            <Accordion
                controllerElement={(isActive) => (
                    <>
                        <Link className='label' to='/'>Blog</Link> {isActive ? '-' : '+'}
                    </>
                )}>
                <li>
                    <Accordion
                        controllerElement={(isActive) => (
                            <>
                                <Link to='/'>Blog Standard</Link> {isActive ? '-' : '+'}
                            </>
                        )}>
                        <li>
                            <ul className="content">
                                <li><Link to='/'>Blog Full Width</Link></li>
                                <li><Link to='/'>Blog Left Sidebar</Link></li>
                                <li><Link to='/'>Blog Right Sidebar</Link></li>
                                <li><Link to='/'>Blog Sidebar None</Link></li>
                            </ul>
                        </li>
                    </Accordion>
                    <ul className="content">
                        <li><Link to='/'>Blog Big Image</Link></li>
                        <li><Link to='/'>Blog Grid</Link></li>
                        <li><Link to='/'>Blog Box Landing</Link></li>
                    </ul>
                </li>
            </Accordion>
            <Accordion
                controllerElement={(isActive) => (
                    <>
                        <Link className='label'>Pages</Link>{isActive ? '-' : '+'}
                    </>
                )}>
                <li>
                    <ul className="content">
                        <li onClick={() => {
                            close()
                            closescroll()
                        }}>
                            <Link to='/about'>About Me</Link>
                        </li>
                        <li onClick={() => {
                            close()
                            closescroll()
                        }}>
                            <Link to='/register'>Login & Register</Link>
                        </li>
                        <li onClick={() => {
                            close()
                            closescroll()
                        }}>
                            <Link to='/'>Pages 404</Link>
                        </li>
                    </ul>
                </li>
            </Accordion>
        </li>
    )
}