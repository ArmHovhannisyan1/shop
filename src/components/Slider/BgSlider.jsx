import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './bgslide.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react';
export default function BgSlider() {
    const sameVariant = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    }
    const fadeImages = [
        { url: '/images/bg-slider1.jpg', caption: 'Featured Products', title: 'Outset' },
        { url: '/images/bg-slider2.jpg', caption: 'Top Sale Of The Month', title: 'Styles' },
        { url: '/images/bg-slider3.jpg', caption: 'Hot Deal Off The Day', title: 'Office' }
    ]
    const refArray = fadeImages.map(() => useRef());
    const isInViewArray = refArray.map(useInView);
    const captionControl = refArray.map(() => useAnimation());
    const titleControl = refArray.map(() => useAnimation());
    const textControl = refArray.map(() => useAnimation());
    const btnControl = refArray.map(() => useAnimation());
    // console.log(isInViewArray)
    useEffect(() => {
        isInViewArray.forEach((isInView, index) => {
            if (isInView) {
                captionControl[index].start('visible');
                titleControl[index].start('visible');
                textControl[index].start('visible');
                btnControl[index].start('visible');
            }
            else {
                captionControl[index].start('hidden');
                titleControl[index].start('hidden');
                textControl[index].start('hidden');
                btnControl[index].start('hidden');
            }
        });
    }, [isInViewArray]);
    return (
        <div id='bgSlide'>
            <Swiper
                direction={'vertical'}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    disableOnInteraction: true,
                }}
                modules={[Autoplay, Pagination]}
                noSwiping={true}
                noSwipingClass={'swiper-no-swiping'}
                className="mySwiper">
                {fadeImages.map((el, index) => {
                    return (
                        <SwiperSlide key={index} style={{
                            backgroundImage: `url(${el.url})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }} className=' swiper-no-swiping'>
                            <div ref={refArray[index]} className="item w100">
                                <motion.div
                                    className='row'
                                    variants={{
                                        hidden: { opacity: 0, y: -100 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    initial='hidden'
                                    animate={captionControl[index]}
                                    transition={{ duration: 0.5, delay: 0.5, yoyo: Infinity }}
                                >
                                    <div className="hLine"></div>
                                    <p>{el.caption}</p>
                                </motion.div>
                                <motion.h3
                                    variants={sameVariant}
                                    initial='hidden'
                                    animate={titleControl[index]}
                                    transition={{ duration: 0.5, delay: 0.5, yoyo: Infinity }}
                                >
                                    {el.title}
                                </motion.h3>
                                <motion.span
                                    className='block'
                                    variants={sameVariant}
                                    initial='hidden'
                                    animate={textControl[index]}
                                    transition={{ duration: 0.8, delay: 0.5, yoyo: Infinity }}
                                >
                                    Form is designed by Agota Store and is part of the Form series. It is an <br /> armless modern chair with great back support.
                                </motion.span>
                                <motion.div
                                    className='btn-parent'
                                    variants={sameVariant}
                                    initial='hidden'
                                    animate={btnControl[index]}
                                    transition={{ duration: 1.2, delay: 0.5, yoyo: Infinity }}
                                >
                                    <Link className="btn" to='/shop' >Explore</Link>
                                </motion.div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper >
        </div>
    );
}