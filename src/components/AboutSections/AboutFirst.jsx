import ForEveryPage from '../ForEveryPage/ForEveryPage';
import './About.css'

export default function AboutFirst() {
    const info = { id: 'about-first', bgImage: '/images/about1.jpg', title: 'About Us', href: 'Home' };
    return (
        <ForEveryPage {...info}/>
    )
}