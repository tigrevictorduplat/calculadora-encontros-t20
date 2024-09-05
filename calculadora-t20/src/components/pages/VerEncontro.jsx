import { parse, v4 as uuidv4} from 'uuid'

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import styles from "./VerEncontro.module.scss"

import Loading from "../layout/Loading"
import Container from "../layout/Container"
import EncounterForm from "../project/EncounterForm"
import Message from "../layout/Message"
import ChallengeForm from "../challenge/ChallengeForm"
import ChallengeCard from '../challenge/ChallengeCard'

function VerEncontro () {
    const {id} = useParams()
    const [encounter, setEncounter] = useState([]) 
    const [challenges, setChallenges] = useState([])
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
               setChallenges(data.desafios)
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

    function createChallenge(encounter){
        setMessage("")
        const desafio = encounter.desafios
        const lastDesafio = desafio[desafio.length-1] 

        lastDesafio.id = uuidv4()
        const lastDesafioND = lastDesafio.nd_desafio 
        const newND = parseInt(encounter.nd_atual) + parseInt(lastDesafioND)

        //MaxND Validation
        if (newND > parseInt(encounter.nd_encontro)) {
            setMessage("Valor de ND ultrapassado! Tente adicionar um Desafio de ND menor!")
            setType("error")
            toggleChallenge()
            desafio.pop()
            return false
        }
        encounter.nd_atual = newND

        //Update
        fetch(`http://localhost:5000/encounters/${encounter.id}` , {
            method : 'PATCH',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(encounter),
            })
            .then( response => response.json())
            .then( data => {
            toggleChallenge()
            setEncounter(data)
            setChallenges(data.desafios)
            setMessage("Desafio Adicionado com Sucesso!")
            setType("success")
            })
    }

    function deleteChallengeByID(id,nd){
        setMessage("")
        const challengesUpdated = encounter.desafios.filter(
            (desafio) => desafio.id !== id
        )
        const encounterUpdated = encounter
        
        encounterUpdated.desafios = challengesUpdated
        encounterUpdated.nd_atual = parseInt(encounterUpdated.nd_atual) - parseInt(nd)
        
        


        fetch( `http://localhost:5000/encounters/${encounter.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(encounterUpdated)
        })
        .then((response) => response.json())
        .then((data) => {
            setEncounter(encounterUpdated)
            setChallenges(challengesUpdated)
            setType("success")
            setMessage("Desafio removido com sucesso!")
            
        })
        .catch(error => console.log(error))
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
        <Container customClass="flex-column justify-content-start">
        {message && <Message type={messageType} message={message} />}
        <div className={styles.info_block}>
            <h1>{encounter.titulo} - ND{encounter.nd_encontro} </h1>
            <button className={styles.mybutton} onClick={toggleView}>
                {editInfoState? "Cancelar Edição":" Editar Encontro"}
            </button>
            { !editInfoState? (
                <div className={styles.details}>
                    <p>
                        <span>Categoria:</span> {encounter.categoria.nome}
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
                {editChallengeState? "Cancelar Edição":"Adicionar Desafio"}
            </button>
            <div className={styles.details}> 
                {editChallengeState &&  <ChallengeForm
                    handleSubmit={createChallenge}
                    btnText={"Adicionar Desafio"}
                    encounterData={encounter}
                />
                }
            </div>
            
        </div>
        <h2>Desafios</h2>
        <Container customClass="justify-content-start flex-nowrap">
        {challenges.length > 0 &&
                challenges.map((challenge) =>
                <ChallengeCard
                    id={challenge.id}
                    title={challenge.nome}
                    nd={challenge.nd_desafio}
                    descricao={challenge.descricao}
                    key={challenge.id}
                    handleRemove={deleteChallengeByID}
                />
                )
            }
        {challenges.length === 0 && <span className={styles.vazio}><p>Ainda não há Desafios ou Criaturas nesse Encontro</p></span>}
        </Container>
        </Container>
    </div>
    ) : (
        <Loading/>
    )
    }</>)
}

export default VerEncontro