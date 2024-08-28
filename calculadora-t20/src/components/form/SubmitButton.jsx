import styles from './SubmitButton.module.scss'
function SubmitButton ({text}) {
    return (
        <div>
            <button className={styles.mybutton}>{text}</button>
        </div>
    )
}

export default SubmitButton