import { GiBurningSkull } from "react-icons/gi";
import styles from './ChallengeCard.module.scss'

function ChallengeCard({id, title, nd, descricao, handleRemove}) {
    const remove = (e) => {
            e.preventDefault()
            handleRemove(id,nd)
    }

    return (
        <div className={styles.dashboard}>
            <h4>{title} - ND{nd}</h4>
            <p>
                {descricao}
            </p>
            <div className={styles.dashboard_actions}>
                <button onClick={remove}>
                   <GiBurningSkull/> Excluir
                </button>
            </div>
        </div>

    )
}

export default ChallengeCard