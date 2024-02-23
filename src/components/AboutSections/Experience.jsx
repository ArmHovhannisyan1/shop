import { motion, useAnimation, useInView } from 'framer-motion'
import { Fragment, useEffect, useRef } from 'react';
export default function Experience() {
    const items = [
        { id: 1, icon: 'Icon', title: '19 Years of Experience', prgph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.' },
        { id: 2, icon: 'Icon', title: '60,000+ Happy Customer', prgph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.' },
        { id: 3, icon: 'Icon', title: 'Awesome Performance', prgph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.' },
        { id: 4, icon: 'Icon', title: 'Impressive Design', prgph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.' },
    ]
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation()
    const slideControls = useAnimation()
    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
            slideControls.start('visible')
        }
    }, [isInView])
    return (
        <section id="experience">
            <div ref={ref} className="container w70 m-center">
                <div className="row f-wrap rel">
                    {items.map(el => (
                        <Fragment key={el.id}>
                            <motion.div
                                className="wrapper"
                                variants={{
                                    hidden: { opacity: 0, y: 75 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                initial='hidden'
                                animate={mainControls}
                                transition={{ duration: 0.5, delay: 0.25 }}
                            >
                                <span className="icon">{el.icon}</span>
                                <h4>{el.title}</h4>
                                <p>{el.prgph}</p>
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: { top: 0 },
                                    visible: { top: '100%' }
                                }}
                                initial='hidden'
                                animate={slideControls}
                                transition={{ duration: 0.5, ease: 'easeIn' }}
                                style={{
                                    position: 'absolute',
                                    top: 4,
                                    bottom: 4,
                                    left: 0,
                                    right: 0,
                                    background: 'rgba(0, 0, 0, 0.115)',
                                    zIndex: 20
                                }}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}