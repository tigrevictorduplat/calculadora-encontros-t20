import styles from './Select.module.scss'
import classNames from 'classnames';

function Select({ title, name, options, handleOnChange, value }) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label text-primary fw-bold">{title}:</label>
            <select
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}
                className="form-select border-0 border-bottom border-secondary rounded-bottom-0"
            >
                <option disabled>Selecione uma Categoria para o seu Encontro</option>
                {options.map(option => (
                    <option value={option.id} key={option.id}>
                        {option.nome}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
