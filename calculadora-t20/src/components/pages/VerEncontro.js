import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function VerEncontro () {
    const {id} = useParams()
    const [encounter, setEncounters] = useState([]) 

    useEffect( () => {
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
        },[id])

    return (
        <h1>{encounter.titulo} - ND{encounter.nd_encontro} </h1> 
    )
}

export default VerEncontro