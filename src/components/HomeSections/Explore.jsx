import { Link } from 'react-router-dom'
import './Explore.css'

export default function Explore() {
    return (
        <section id="explore">
            <div className="container">
                <div className="row f-jBetween">
                    <div className="rel wrapper w30"
                        onMouseEnter={(e) => e.currentTarget.classList.add('hoverImage')}
                        onMouseLeave={(e) => e.currentTarget.classList.remove('hoverImage')} >
                        <div className="image image-other">
                            <img src="/images/explore1.jpg" alt="" />
                        </div>
                        <div className="item">
                            <div className="abs overlay">
                                <p>Decoration</p>
                                <h3>Featured Lifestyle</h3>
                                <span>On Pre – Sep 6th Free Shipping</span>
                                <div>
                                    <button className="btn-other">
                                        <Link to='/shop' className='rel'>Explore Items</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rel wrapper w30">
                        <div className="image">
                            <img src="/images/explore4.jpg" alt="" />
                        </div>
                        <div className="item h100 f-aCenter abs f-jCenter text-center">
                            <div className="overlay">
                                <p className='p-other'>Furniture</p>
                                <h3 className='white'>Sale Off Everything</h3>
                                <span>Limited Time: Online Only!</span>
                                <div className="image w70 m-center">
                                    <img src="./images/explore2.png" alt="" />
                                </div>
                                <div>
                                    <button className="btn">
                                        <Link to='/shop'>Explore Items</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rel wrapper w30" 
                        onMouseEnter={(e) => e.currentTarget.classList.add('hoverImage')}
                        onMouseLeave={(e) => e.currentTarget.classList.remove('hoverImage')}>
                        <div className="image image-other">
                            <img src="/images/explore3.jpg" alt="" />
                        </div>
                        <div className="item">
                            <div className="abs overlay">
                                <p>Lighting</p>
                                <h3>Trending Lighting</h3>
                                <span>Free Delivery + Assembly On Most Items</span>
                                <div>
                                    <button className="btn-other">
                                        <Link to='/shop' className='rel'>Explore Items</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}