import styles from './DashboardCard.module.css'

function DashboardCard({id, title, nd, category, handleRemove}) {
    return (
        <div>
            <h4>{title}</h4>
            <p>
                <span>Nível de Desafio</span> - {nd}
            </p>
            <p>
                <span></span> {category}
            </p>
            <div>
                <p>Editar</p>
                <p>Remover</p>
            </div>
        </div>

    )
}

export default DashboardCard