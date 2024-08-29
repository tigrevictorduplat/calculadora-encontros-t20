import {Link} from 'react-router-dom'

import { GiBurningSkull, GiSpinningSword } from "react-icons/gi";


import styles from './DashboardCard.module.scss'

function DashboardCard({id, title, nd, categoria, handleRemove}) {
    const remove = (e) => {
            e.preventDefault()
            handleRemove(id)
    }
    let categoriaStyle = ""
    function convertCategoria(categoria) {
        switch (categoria) {
            case  "Combate":
                 categoriaStyle = styles.combat
                break;
            case  "Embate Social":
                 categoriaStyle = styles.social
                break;
            case  "Perigo Complexo":
                categoriaStyle = styles.complex_danger
               break;
            case  "Desafio de Perícia":
                categoriaStyle = styles.skill_challenge
               break;
            case  "Teste Estendido":
                categoriaStyle = styles.extended
               break;
            case  "Chefe Final":
               categoriaStyle = styles.boss
              break;
            default:
                break;
        }
        return categoriaStyle
    }

    return (
        <div className={styles.dashboard}>
            <h4>{title}</h4>
            <p>
                <span>Nível de Desafio</span> - {nd}
            </p>
            <p className={styles.categoria}>
                <span className={convertCategoria(categoria)}></span> {categoria}
            </p>
            <div className={styles.dashboard_actions}>
                <Link to={`/encounter/${id}`}>
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