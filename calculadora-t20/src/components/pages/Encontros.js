import {useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Encontro.module.css'

import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import DashboardCard from '../project/DashboardCard'
function Encontros () {
    const [myencounterList, setEncounters] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect( () => {
        fetch("http://localhost:5000/encounters", {
            method : 'GET' ,
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then( (response) => response.json())
        .then( (data) => {
            setEncounters(data)
        })
        .catch((err) => console.log(err))
    }, [])

 return (
    <div className={styles.dashboard_container}>
        <div className={styles.dashboard_title}>
            <h1>Meus Encontros</h1>
            <LinkButton to="/new-encounter" text="Novo Encontro"/>
        </div>
        {message && <Message message={message} type="success" timeout={3500}/>}
        <Container customClass="start">
            {myencounterList.length > 0 &&
                myencounterList.map((encounter) =>
                <DashboardCard
                    id={encounter.id}
                    title={encounter.titulo}
                    nd={encounter.nd_encontro}
                    category={encounter.category?.name}
                    key={encounter.id}
                />
                )
            }
        </Container>

    </div>
    )
}

export default Encontros