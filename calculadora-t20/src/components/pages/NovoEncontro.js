import {useNavigate} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NovoEncontro.module.css'

function NovoEncontro () {
    const navigate = useNavigate()

    function createEncounter(encounter){
        // Empty encounter attributes
        encounter.currentND = 0
        encounter.challenges = []
    
        fetch('http://localhost:5000/encounters', {
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(encounter)
        })
        .then((response) => response.json())
        .then((data) => {
            navigate('/my-encounters', {message: 'Novo Encontro adicionado à coleção!'})
        })
        .catch((err) => console.log(err) ) 

    }

    return (
        <div className={styles.new_encounterwrap}>
            <h1>Criar Encontros</h1>
            <p>Defina as Características Gerais e ND para então adicionar os Perigos</p>
            <ProjectForm handleSubmit={createEncounter} btnText="Criar Encontro"/>
        </div>
    )
}

export default NovoEncontro