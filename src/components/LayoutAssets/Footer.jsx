import { Link } from "react-router-dom";

export default function Footer() {
    const footerItems = [
        {
            id: 1, title: 'INFORMATION', links: [
                { text: 'About us', to: '/' },
                { text: 'Customer Service', to: '/' },
                { text: 'Blog', to: '/' },
                { text: 'Page 404', to: '/' },
                { text: 'Sizing Guide', to: '/' },
                { text: 'FAQs', to: '/' },
                { text: 'Contact us', to: '/' },
            ]
        },
        {
            id: 2, title: 'OUR SERVICE', links: [
                { text: 'Shipping Policy', to: '/' },
                { text: 'Help & Contact Us', to: '/' },
                { text: 'Returns & Refunds', to: '/' },
                { text: 'Online Stores', to: '/' },
                { text: 'Payment Method', to: '/' },
                { text: 'Terms & Conditions', to: '/' },
                { text: 'Privacy Policy', to: '/' },
            ]
        },
        {
            id: 3, title: 'PAYMENT & SHIPPING', links: [
                { text: 'Terms Of Use', to: '/' },
                { text: 'Payment Methods', to: '/' },
                { text: 'Shipping Guide', to: '/' },
                { text: 'Locations We Ship To', to: '/' },
                { text: 'Estimated Delivery Time', to: '/' },
                { text: 'Express', to: '/' },
            ]
        }
    ]
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="item m-center f-jBetween w60 row">
                        {footerItems.map(el => <div className="wrapper w30" key={el.id}>
                            <h6>{el.title}</h6>
                            <ul>
                                {el.links.map((item, index) => <li key={index}><Link to={item.to}>{item.text}</Link></li>)}
                            </ul>
                        </div>)}
                    </div>
                    <div className="item w40">
                        <div className="wrapper">
                            <h6>GET DEALS OF THE STORE</h6>
                            <p>Subscribe tto the Agota Store mailing list to receive updates on new arrivals, special offers and other discount information.</p>
                            <form>
                                <div className="form-wrapper row f-jBetween">
                                    <div className="input-wrapper w70">
                                        <input type="text" className='w100' placeholder='Subscribe to our newsletter...' />
                                    </div>
                                    <div className='btn-wrapper w25'>
                                        <button className='btn w100'>
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <p>Email: admin@basictheme.com.</p>
                            <p>Add: S9 Heaven Stress, Beverly Hill, Melbourne, USA.</p>
                        </div>
                    </div>
                </div>
                <div className="row f-jBetween f-aCenter">
                    <div className="wrapper row f-aCenter w50 f-jBetween">
                        <span>Copyright © <Link to='/'>Agota – BasicTheme.</Link>All Rights Reserved</span>
                        <div className="vLine"></div>
                        <ul className='row'>
                            <li><Link to='/'>Site Map</Link></li>
                            <li><Link to='/'>Search Terms</Link></li>
                            <li><Link to='/'>Advanced Search</Link></li>
                            <li><Link to='/'>Contact us</Link></li>
                        </ul>
                    </div>
                    <div className="image-wrapper">
                        <div className="image">
                            <img src="/images/footer.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}