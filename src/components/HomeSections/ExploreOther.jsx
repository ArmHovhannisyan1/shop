import { Link } from 'react-router-dom'

export default function ExploreOther() {
    const items = [
        { id: 1, image: '/images/explore-other1.jpg', prgph: 'Ends Today', title: 'Elements Of Style', about: 'USB Powered LED Lights – Use It Anywhere!',to: '/shop', btn: 'Explore Items' },
        { id: 2, image: '/images/explore-other2.jpg', prgph: 'Your Space', title: 'Unique Life', about: 'Big Sale September 8th To October 6th',to: '/shop', btn: 'Explore Items' },
    ]
    return (
        <section id="explore-other">
            <div className="container">
                <div className="row f-jBetween">
                    {items.map(el => ( 
                        <div className="rel wrapper w48" 
                        onMouseEnter={(e) => e.currentTarget.classList.add('hoverImage')} 
                        onMouseLeave={(e) => e.currentTarget.classList.remove('hoverImage')} 
                        key={el.id}>
                            <div className="image image-other">
                                <img src={el.image} alt="" />
                            </div>
                            <div className="item">
                                <div className="abs overlay">
                                    <p>{el.prgph}</p>
                                    <h3>{el.title}</h3>
                                    <span>{el.about}</span>
                                    <div>
                                        <button className="btn-other">
                                            <Link to={el.to} className='rel'>{el.btn}</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}