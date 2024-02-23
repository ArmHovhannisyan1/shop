import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './bgslide.css';
import { Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export default function Quot() {
    const item = [
        {
            text: 'For me the most important part of improving at photography has been sharing it.Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography. Minimalist approach, bright colors, stainless steel and matte plastic, abstract shapes and curved lines are the defining features of these products designed to be extremely functional, user-friendly and fun.', src: './images/team1.png', author: 'Eren Christopher', occupation: 'Founder of Agota Store'
        },
        {
            text: 'For me the most important part of improving at photography has been sharing it.Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography. Minimalist approach, bright colors, stainless steel and matte plastic, abstract shapes and curved lines are the defining features of these products designed to be extremely functional, user-friendly and fun.', src: './images/team1.png', author: 'Eren Christopher', occupation: 'Founder of Agota Store'
        },
        {
            text: 'For me the most important part of improving at photography has been sharing it.Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography. Minimalist approach, bright colors, stainless steel and matte plastic, abstract shapes and curved lines are the defining features of these products designed to be extremely functional, user-friendly and fun.', src: './images/team1.png', author: 'Eren Christopher', occupation: 'Founder of Agota Store'
        }
    ]
    return (
        <section id='quot'>
            <div className="container">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {item.map((el, index) => {
                        return (
                                <SwiperSlide key={index}>
                                    <div className="wrapper text-center m-center row f-column f-aCenter">
                                        <FontAwesomeIcon icon={faQuoteLeft} className='icon' />
                                        <p>{el.text}</p>
                                        <div className="image w10">
                                            <img src={el.src} alt="" />
                                        </div>
                                        <h5>{el.author}</h5>
                                        <span>{el.occupation}</span>
                                    </div>
                                </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    );
}
