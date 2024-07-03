import {Link} from 'react-router-dom'

import { GiBurningSkull, GiSpinningSword } from "react-icons/gi";


import styles from './DashboardCard.module.css'

function DashboardCard({id, title, nd, category, handleRemove}) {
    const remove = (e) => {
            e.preventDefault()
            handleRemove(id)
    }
    let categoryStyle = ""
    function convertCategory(category) {
        switch (category) {
            case  "Combate":
                 categoryStyle = styles.combat
                break;
            case  "Embate Social":
                 categoryStyle = styles.social
                break;
            case  "Perigo Complexo":
                categoryStyle = styles.complex_danger
               break;
            case  "Desafio de Perícia":
                categoryStyle = styles.skill_challenge
               break;
            case  "Teste Estendido":
                categoryStyle = styles.extended
               break;
            case  "Chefe Final":
               categoryStyle = styles.boss
              break;
            default:
                break;
        }
        return categoryStyle
    }

    return (
        <div className={styles.dashboard}>
            <h4>{title}</h4>
            <p>
                <span>Nível de Desafio</span> - {nd}
            </p>
            <p className={styles.category}>
                <span className={convertCategory(category)}></span> {category}
            </p>
            <div className={styles.dashboard_actions}>
                <Link to="/">
                    <GiSpinningSword/> Editar
                </Link>
                <button onClick={remove}>
                   <GiBurningSkull/> Excluir
                </button>
            </div>
        </div>

    )
}

export default DashboardCard