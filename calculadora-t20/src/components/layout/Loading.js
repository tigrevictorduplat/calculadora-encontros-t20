import loading from '../../img/loading.svg'
import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.loading_display}>
            <img className={styles.loading} src={loading} alt="Loading Clip"/>
        </div>
    )
}

export default Loading