import {Link} from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton ({to, text, icon}) {
    return (
        <Link className={styles.mybutton} to={to}>
        {text} {icon}
        </Link>
    )
}

export default LinkButton