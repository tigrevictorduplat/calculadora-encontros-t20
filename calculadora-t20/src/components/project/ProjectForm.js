import Input from '../form/Input.js'
import Select from '../form/Select.js'
import SubmitButton from '../form/SubmitButton.js'
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input
                type="text"
                name="titulo"
                title="Titulo do Encontro"
                placeholder="Digite aqui o Título do seu Encontro"
            />
            <Input
                type="number"
                name="nd_encontro"
                title="ND do Encontro"
                placeholder="Digite aqui o Nível de Desafio do seu Encontro"
            />
            <Select name="id_categoria" title="Escolha uma Categoria"/>
           <SubmitButton text={btnText}/>
        </form>

    )
}

export default ProjectForm