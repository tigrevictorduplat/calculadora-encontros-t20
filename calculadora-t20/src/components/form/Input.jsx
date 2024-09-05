
function Input({ type, title, name, placeholder, handleOnChange, value }) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label text-primary fw-bold">{title}:</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                className="form-control border-0 border-bottom border-secondary rounded-bottom-0"
            />
        </div>
    );
}

export default Input;
