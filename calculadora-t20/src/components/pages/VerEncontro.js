import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import styles from "./VerEncontro.module.scss"

import Loading from "../layout/Loading"
import Container from "../layout/Container"
import EncounterForm from "../project/EncounterForm"
import Message from "../layout/Message"

function VerEncontro () {
    const {id} = useParams()
    const [encounter, setEncounter] = useState([]) 
    const [ editInfoState, toggleEditInfo] = useState(false)
    const [ editChallengeState, toggleChallengeInfo] = useState(false)
    const [message, setMessage] = useState(false)
    const [messageType, setType] = useState()

    useEffect( () => {
        setTimeout(() => {
            fetch(`http://localhost:5000/encounters/${id}` , {
                method : 'GET',
                headers : {
                    'Content-Type' : 'application/json'
                } })
            .then( response => response.json())
            .then( data => {
               setEncounter(data)
            })
            .catch( (error) => console.log(error)) 
        }, 300);
        },[id])

    function editEncounter(encounter) {
        setMessage("")
        //Validação ND
        if (encounter.nd_atual > encounter.nd_encontro) {
            setMessage("Atenção! A ND Atual não pode ser maior que a ND Total do Encontro")
            setType("error")
            return false
        }
        fetch(`http://localhost:5000/encounters/${encounter.id}` , {
            method : 'PATCH',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(encounter),
        
        })
        .then( response => response.json())
        .then( data => {
            setEncounter(data)
            toggleEditInfo(false)
            setMessage("Encontro Atualizado com Sucesso!")
            setType("success")
        }
        )
        .catch( (error) => console.log(error))
    }

    function toggleView(){
        toggleEditInfo(!editInfoState)
    }

    function toggleChallenge(){
        toggleChallengeInfo(!editChallengeState)
    }
    return (
    <>
    {encounter.titulo?(
    <div className={styles.view_container}>
        <Container customClass="column">
        {message && <Message type={messageType} message={message} />}
        <div className={styles.info_block}>
            <h1>{encounter.titulo} - ND{encounter.nd_encontro} </h1>
            <button className={styles.mybutton} onClick={toggleView}>
                {editInfoState? "Concluir Edição":" Editar Encontro"}
            </button>
            { !editInfoState? (
                <div className={styles.details}>
                    <p>
                        <span>Categoria:</span> {encounter.category.name}
                    </p>
                    <p>
                        <span>ND do Encontro:</span> {encounter.nd_encontro}
                    </p>
                    <p>
                        <span>ND Atual:</span> {encounter.nd_atual}
                    </p>
                </div>
            ) : (
                <div className={styles.details}>
                    <EncounterForm handleSubmit={editEncounter} btnText={"Concluir Edição"} encounterData={encounter}/>
                </div>
            )

            }
        </div>
        <div className={styles.challenge_block}>
            <h2>Adicione um Desafio</h2>
            <button className={styles.mybutton} onClick={toggleChallenge}>
                {editChallengeState? "Concluir Edição":"Adicionar Desafio"}
            </button>
            {editChallengeState && 
            <div className={styles.details}> Formulário Desafio</div>
            }
        </div>
        <h2>Desafios</h2>
        <Container customClass="start">
            <p>Item Exemplo</p>
        </Container>
        </Container>
    </div>
    ) : (
        <Loading/>
    )
    }</>)
}

export default VerEncontro