import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./bgslide.css";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function BlogPosts() {
    const item = [
        { src: '/images/blogPosts1.jpg', date: '01 nov, 2020', link: 'Supt In Qui Officia Deserunt', text: 'It is accompanied by a case that can contain up to three different diffusers and can be used for dry …' },
        { src: '/images/blogPosts2.jpg', date: '01 nov, 2020', link: 'How Wear The Summer Style', text: 'It is accompanied by a case that can contain up to three different diffusers and can be used for dry …' },
        { src: '/images/blogPosts3.jpg', date: '01 nov, 2020', link: 'Men Wearing Canvas Boots', text: 'It is accompanied by a case that can contain up to three different diffusers and can be used for dry …' },
        { src: '/images/blogPosts4.jpg', date: '01 nov, 2020', link: 'Miranda Skoaled Homestead', text: 'It is accompanied by a case that can contain up to three different diffusers and can be used for dry …' },
    ]
    const ref = useRef()
    const isInView = useInView(ref, {once:true})
    const blogControl = useAnimation()
    useEffect(()=>{
        if(isInView){
            blogControl.start('visible')
        }
    },[isInView])
    return (
        <section id="blogPosts">
            <motion.div 
            className="container"
            ref={ref}
            variants={{
                hidden: {opacity: 0, y: 150},
                visible: {opacity: 1, y: 0},
            }}
            initial='hidden'
            animate={blogControl}
            transition={{duration: 0.4}}
            >
                <div className="row">
                    <div className="wrapper text-center m-center">
                        <h2>Our Blog Posts</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    className="mySwiper">
                    {item.map((el, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="wrapper">
                                    <div className="image"
                                        onMouseEnter={(e) => e.currentTarget.classList.add('hoverImage')}
                                        onMouseLeave={(e) => e.currentTarget.classList.remove('hoverImage')}>
                                        <img src={el.src} alt="" />
                                    </div>
                                    <div className="about-post">
                                        <p>Post date: <Link to='/'>{el.date}</Link></p>
                                        <h5>
                                            <Link to='/'>{el.link}</Link>
                                        </h5>
                                        <p className="span">{el.text}</p>
                                        <div>
                                            {/* <button> */}
                                            <Link className="btn" to='/'>Continue Reading</Link>
                                            {/* </button> */}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </motion.div>
        </section>
    );
}