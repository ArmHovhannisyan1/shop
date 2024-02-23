import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./bgslide.css";
import { useEffect, useState } from "react";

export default function Sponsor() {
    const item = [
        { url: '/images/sponsor1.png' },
        { url: '/images/sponsor2.png' },
        { url: '/images/sponsor3.png' },
        { url: '/images/sponsor4.png' },
        { url: '/images/sponsor5.png' },
        { url: '/images/sponsor1.png' },
        { url: '/images/sponsor2.png' }
    ]
    // const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView(window.innerWidth));

    // useEffect(() => {
    //     const handleResize = () => {
    //         setSlidesPerView(getSlidesPerView(window.innerWidth));
    //     };

    //     window.addEventListener("resize", handleResize);
    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);

    // function getSlidesPerView(width) {
    //     if (width < 500) {
    //         return 1;
    //     } else if (width < 992) {
    //         return 2;
    //     } else if (width < 1200) {
    //         return 3
    //     } else {
    //         return 5;
    //     }
    // }
    return (
        <section id="sponsor">
            <div className="container w90 m-center">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={100}
                    className="mySwiper">
                    {item.map((el, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="wrapper">
                                    <div className="image">
                                        <img src={el.url} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    );
}