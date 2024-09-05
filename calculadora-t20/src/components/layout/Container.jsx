import styles from './Container.module.scss'

function Container({ customClass, children }) {
    return <div className={`container d-flex ${customClass}`}>{children}</div>;
}

export default Container;
