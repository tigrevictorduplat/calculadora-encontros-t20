import styles from './Select.module.css'

function Select({title, name, options, handleOnChange, value}) {
    return (
        <div className={styles.masterform}>
            <label htmlFor={name}>{title}: </label>
            <select name={name} id={name} onChange={handleOnChange} 
            value={value || ''}>
                <option selected disabled> Selecione uma Categoria para o seu Encontro </option>
                {options.map( (option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>   
                )
                )}

            </select>
        </div>
    )
}

export default Select