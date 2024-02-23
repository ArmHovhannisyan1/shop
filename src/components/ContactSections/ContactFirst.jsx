import ForEveryPage from "../ForEveryPage/ForEveryPage";

export default function ContactFirst(){
    const info = { id: 'contact-first', bgImage: '/images/contact1.jpg', title: 'Contact Us', href: 'Home' };

    return(
            <ForEveryPage {...info}/>
    )
}