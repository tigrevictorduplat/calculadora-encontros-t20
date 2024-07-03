import {useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react'

import { GiDeathNote , GiDiceTwentyFacesOne
} from "react-icons/gi";

import styles from './Encontro.module.css'

import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import DashboardCard from '../project/DashboardCard'
import Loading from '../layout/Loading';
function Encontros () {
    const [myencounterList, setEncounters] = useState([])
    const [toggleLoading, setLoadingState] = useState(true)
    const [localMessage, setLocalMessage] = useState()
    const localMessageTimeout = 3500;

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect( () => {
        setTimeout(
            () => {
                
        fetch("http://localhost:5000/encounters", {
            method : 'GET' ,
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then( (response) => response.json())
        .then( (data) => {
            setEncounters(data)
            setLoadingState(false)
        })
        .catch((err) => console.log(err))
    
            }, 500 )
        }, [])

        function deleteEncounterByID(id) {
            fetch (`http://localhost:5000/encounters/${id}`, {
                method : 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then (response => response.json())
            .then(() => {
                setEncounters(myencounterList.filter((encounter) => encounter.id !== id))
                setLocalMessage("Encontro excluído com sucesso!")
                setTimeout(() => {
                    setLocalMessage(false)
                }, localMessageTimeout+100);
            } )
            .catch(error => console.log(error))
        }

 return (
    <div className={styles.dashboard_container}>
        <div className={styles.dashboard_title}>
            <h1>Meus Encontros</h1>
            <LinkButton to="/new-encounter" text="Novo Encontro" icon={<GiDeathNote/>} /> 
        </div>
        
        {message && <Message message={message} type="success" timeout={3500}/>}
        {localMessage && (
            <Message message={localMessage} type="success" timeout={localMessageTimeout}/>
        )}
        <Container customClass="start">
            {myencounterList.length > 0 &&
                myencounterList.map((encounter) =>
                <DashboardCard
                    id={encounter.id}
                    title={encounter.titulo}
                    nd={encounter.nd_encontro}
                    category={encounter.category?.name}
                    key={encounter.id}
                    handleRemove={deleteEncounterByID}
                />
                )
            }
        {toggleLoading && <Loading/>}
        {!toggleLoading && myencounterList.length === 0 && (
            <div className={styles.empty}>
            <GiDiceTwentyFacesOne />
            <p>Não há Encontros registrados...</p>
            

            </div>
        )}
        </Container>

    </div>
    )
    
}

export default Encontros