import styles from './Select.module.css'

function Select({title, name, options, handleOnChange, value}) {
    return (
        <div className={styles.masterform}>
            <label htmlFor={name}>{title}: </label>
            <select name={name} id={name}>
                <option selected disabled> Selecione uma Categoria para o seu Encontro </option>

            </select>
        </div>
    )
}

export default Select