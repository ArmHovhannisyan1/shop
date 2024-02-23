import ForEveryPage from "../ForEveryPage/ForEveryPage";

export default function ShopFirst(){
    const info = { id: 'shop-first', bgImage: '/images/shop1.jpg', title: 'Shop', href: 'Home' };

    return(
            <ForEveryPage {...info}/>
    )
}