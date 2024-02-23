import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function Team() {
    // const items = [
    //     { id: 1, image: '/images/team1.png', name: 'Eren Christopher', occupation: 'Founder of Agota Store' },
    //     { id: 2, image: '/images/team2.png', name: 'Mike Jefferson', occupation: 'PR Manager of Agota Store' },
    //     { id: 3, image: '/images/team3.png', name: 'Linda Sardeni', occupation: 'Designer of Agota Store' },
    // ]
    const refTitle = useRef()
    const refMember = useRef()
    const isInViewMember = useInView(refMember, { once: true })
    const isInViewTitle = useInView(refTitle, { once: true })
    const title = useAnimation()
    const teamOne = useAnimation()
    const teamThree = useAnimation()
    useEffect(() => {
        const animateTitle = async () => {
            if (isInViewTitle) {
                await title.start('visible');
            }
        };

        const animateMembers = async () => {
            if (isInViewMember) {
                await teamOne.start('visible');
                await teamThree.start('visible');
            }
        };

        animateTitle();
        animateMembers();
    }, [isInViewTitle, isInViewMember])
    return (
        <section id="team">
            <div className="container w70 m-center">
                <motion.div
                    className="row"
                    ref={refTitle}
                    variants={{
                        hidden: { opacity: 0, y: -75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial='hidden'
                    animate={title}
                    transition={{ duration: 0.3, delay: 0.25 }}
                >
                    <div className="hLine"></div>
                    <div className="history-title">
                        <span>Our Team</span>
                        <h2>Team Members</h2>
                    </div>
                </motion.div>
                <div className="row f-jBetween" ref={refMember}>
                    <motion.div
                        className="wrapper"
                        variants={{
                            hidden: { opacity: 0, x: -200 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial='hidden'
                        animate={teamOne}
                        transition={{ duration: 0.3, ease: 'easeIn' }}
                    >
                        <div className="image">
                            <img src="/images/team1.png" alt="" />
                        </div>
                        <h5>Eren Christopher</h5>
                        <span>Founder of Agota Store'</span>
                    </motion.div>
                    <div className="wrapper">
                        <div className="image">
                            <img src="/images/team2.png" alt="" />
                        </div>
                        <h5>Mike Jefferson</h5>
                        <span>PR Manager of Agota Store</span>
                    </div>
                    <motion.div
                        className="wrapper"
                        variants={{
                            hidden: { opacity: 0, x: 200 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial='hidden'
                        animate={teamThree}
                        transition={{ duration: 0.3, ease: 'easeIn' }}
                    >
                        <div className="image">
                            <img src="/images/team3.png" alt="" />
                        </div>
                        <h5>Linda Sardeni</h5>
                        <span>Designer of Agota Store</span>
                    </motion.div>
                    {/* {items.map(el => (
                        <motion.div 
                        key={el.id} 
                        className="wrapper"
                        variants={{

                        }}
                        >
                            <div className="image">
                                <img src={el.image} alt="" />
                            </div>
                            <h5>{el.name}</h5>
                            <span>{el.occupation}</span>
                        </motion.div>
                    ))} */}
                </div>
            </div>
        </section>
    )
}