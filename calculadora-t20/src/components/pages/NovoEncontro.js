import ProjectForm from '../project/ProjectForm'
import styles from './NovoEncontro.module.css'

function NovoEncontro () {
    return (
        <div className={styles.new_encounterwrap}>
            <h1>Criar Encontros</h1>
            <p>Defina as Características Gerais e ND para então adicionar os Perigos</p>
            <ProjectForm btnText="Criar Encontro"/>
        </div>
    )
}

export default NovoEncontro