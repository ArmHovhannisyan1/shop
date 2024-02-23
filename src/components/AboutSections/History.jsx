import { motion, useAnimation, useInView } from 'framer-motion'
import { Fragment, useEffect, useRef } from 'react'
export default function History() {
    const items = [
        { id: 1, text: 'It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, velillum dolore eu feugiat nulla facilisis.' },
        { id: 2, text: 'The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it.' },
        { id: 3, text: 'Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography. Talk about it. When you talk about it, other people get excited about it. There are few plugins and apps available for this purpose, many of them required a monthly subscription or needed to expose the full store data to a third party.' },
    ]
    const ref = useRef();
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
        <section id="history">
            <div className="container w70 m-center">
                <div className="row">
                    <div className="hLine"></div>
                    <div className="history-title">
                        <span>Our History</span>
                        <h2>We Are A Lifestyle Brand</h2>
                    </div>
                </div>
                <div className="row f-column rel" ref={ref}>
                    {items.map(el => (
                        <Fragment key={el.id}>
                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, x: 75 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                                initial='hidden'
                                animate={mainControls}
                                transition={{ duration: 0.5, delay: 0.25 }}
                            >{el.text}
                            </motion.p>
                            <motion.div
                                variants={{
                                    hidden: { left: 0 },
                                    visible: { left: '100%' }
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