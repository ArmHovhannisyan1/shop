import { Link } from 'react-router-dom'
import allStyles from './ForEvery.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../LogReg/signing.css'

export default function ForEveryPage(props) {
    return (
        <section id={props.id} className={allStyles.forEvery} style={
            { backgroundImage: `url(${props.bgImage})`}
        }>
            <div className={`${allStyles.container}`}>
                <div className={"row text-center f-jCenter f-aCenter " + `${allStyles.row}`}>
                    <div className={`${allStyles.wrapper}`}>
                        <h1 className={allStyles.title}>{props.title}</h1>
                        <div className="info">
                            <Link to={'/' + props.href} className={allStyles.link}>{props.href}</Link>
                            <FontAwesomeIcon icon={faArrowRight} className={allStyles.icon}/>
                            <span>{props.title}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}