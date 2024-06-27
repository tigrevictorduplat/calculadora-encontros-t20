import {FaGithub, FaLinkedin, FaInstagram, FaCodepen} from 'react-icons/fa'

import styles from './Footer.module.css'
function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.mylinks}>
                <li><FaGithub/></li>
                <li><FaLinkedin/></li>
                <li><FaInstagram/></li>
                <li><FaCodepen/></li>
            </ul>
            <p className={styles.copyright}> <span>Calculadora de Valkaria</span> &copy; 2024</p>
        </footer>

    )
}

export default Footer