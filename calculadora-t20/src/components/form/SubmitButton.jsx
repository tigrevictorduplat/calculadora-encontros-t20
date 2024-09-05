import styles from './SubmitButton.module.scss'
function SubmitButton({ text }) {
    return (
        <div className="mb-3">
            <button className={`btn btn-primary py-2 px-3 rounded-0 `}
            type="submit">
                {text}
            </button>
        </div>
    );
}

export default SubmitButton;