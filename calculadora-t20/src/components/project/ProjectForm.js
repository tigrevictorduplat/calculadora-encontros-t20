import {useState, useEffect} from 'react'

import Input from '../form/Input.js'
import Select from '../form/Select.js'

import SubmitButton from '../form/SubmitButton.js'

import styles from './ProjectForm.module.css'

function ProjectForm({handleSubmit, btnText, encounterData}) {
const [categorias, setCategorias] = useState([])
const [encounter, setEncounter] = useState(encounterData || {})

useEffect ( ()=> {
    fetch('http://localhost:5000/categories', {
        method : 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {setCategorias(data)})
    .catch((err) => console.log(err))
},[])

const submit = (e) => {
    e.preventDefault()
    handleSubmit(encounter)
}

    function handleInputOnChange(e) {
        setEncounter( { ...encounter, [e.target.name] : e.target.value})        
    }

    function handleSelectOnChange(e) {
        setEncounter( { ...encounter, 
            category : {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        })        
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                name="titulo"
                title="Titulo do Encontro"
                placeholder="Digite aqui o Título do seu Encontro"
                handleOnChange={handleInputOnChange}
                value={encounter.titulo ? encounter.titulo : ''}
            />
            <Input
                type="number"
                name="nd_encontro"
                title="ND do Encontro"
                placeholder="Digite aqui o Nível de Desafio do seu Encontro"
                handleOnChange={handleInputOnChange}
                value={encounter.nd_encontro ? encounter.nd_encontro : ''}
            />
            <Select
            name="id_categoria"
            title="Escolha uma Categoria"
            options={categorias}
            handleOnChange={handleSelectOnChange}
            value={encounter.category ? encounter.category.id : '' }
            
            />
           <SubmitButton text={btnText}/>
        </form>

    )
}

export default ProjectForm