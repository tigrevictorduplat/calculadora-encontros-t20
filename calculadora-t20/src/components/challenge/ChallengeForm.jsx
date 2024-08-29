import {useState} from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/EncounterForm.module.scss'

function ChallengeForm({handleSubmit, btnText, encounterData }) {

const [challenge, setChallenge] = useState({})

const submit = (e) => {
    e.preventDefault()
    encounterData.desafios.push(challenge)
    handleSubmit(encounterData)
}

    function handleInputOnChange(e) {
        setChallenge( { ...challenge, [e.target.name] : e.target.value})        
    }


    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
            type={"text"}
            title={"Nome Desafio"}
            name={"nome"}
            placeholder={"Insira o nome do Desafio ou Criatura"}
            handleOnChange={handleInputOnChange}
            />
            <Input
            type={"number"}
            title={"ND do Desafio/Criatura"}
            name={"nd_desafio"}
            placeholder={"Insira o Nível de Desafio da Criatura"}
            handleOnChange={handleInputOnChange}
            />
            <Input
            type={"text"}
            title={"Descrição do Desafio ou Criatura"}
            name={"descricao"}
            placeholder={"Insira uma descrição para o Desafio ou Criatura"}
            handleOnChange={handleInputOnChange}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ChallengeForm