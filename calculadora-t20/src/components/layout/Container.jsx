import styles from './Container.module.scss'

function Container ({customClass, children}) {
    return  <div className={`${styles.container} ${styles[customClass]}`} >{children}</div>
}

export default Container