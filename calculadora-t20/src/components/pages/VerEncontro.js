import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import styles from "./VerEncontro.module.css"

import Loading from "../layout/Loading"
import Container from "../layout/Container"

function VerEncontro () {
    const {id} = useParams()
    const [encounter, setEncounters] = useState([]) 
    const [ editInfoState, toggleEditInfo] = useState(false)

    useEffect( () => {
        setTimeout(() => {
            fetch(`http://localhost:5000/encounters/${id}` , {
                method : 'GET',
                headers : {
                    'Content-Type' : 'application/json'
                } })
            .then( response => response.json())
            .then( data => {
                setEncounters(data)
            }
            )
            .catch( (error) => console.log(error)) 
        }, 300);
        },[id])
    function toggleView(){
        toggleEditInfo(!editInfoState)
    }
    return (<>{encounter.titulo?(
    <div className={styles.view_container}>
        <Container customClass="column">
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
                    <p>FORM DESAFIOS</p>
                </div>
            )

            }
        </div>
        </Container>
    </div>
    ) : (
        <Loading/>
    )
    }</>)
}

export default VerEncontro