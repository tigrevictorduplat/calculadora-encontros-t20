import styles from './Input.module.css'

function Input({type, text, title, name, placeholder, handleOnChange, value}) {
    return (
        <div className={styles.masterform}>
            <label htmlFor={name}>{title}: </label>
            <input
                type={type}
                name={name}
                ide={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />  
        </div>
    )
}

export default Input