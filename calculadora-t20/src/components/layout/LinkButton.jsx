import { Link } from 'react-router-dom';
import styles from './LinkButton.module.scss'
import classNames from 'classnames';

function LinkButton({ to, text, icon }) {
    return (
        <Link className={classNames("btn", "btn-primary", "d-flex", "align-items-center", "fw-medium", "mybutton")} to={to}>
            {text} {icon && <span className={`ms-2 ${styles.mybutton}`} >{icon}</span>}
        </Link>
    );
}

export default LinkButton;
