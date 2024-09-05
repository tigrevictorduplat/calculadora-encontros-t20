import { useState, useEffect } from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function EncounterForm({ handleSubmit, btnText, encounterData }) {
    const [categorias, setCategorias] = useState([]);
    const [encounter, setEncounter] = useState(encounterData || { categoria: { id: 1, nome: 'Combate' } });

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => setCategorias(data))
            .catch((err) => console.log(err));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(encounter);
    };

    function handleInputOnChange(e) {
        setEncounter({ ...encounter, [e.target.name]: e.target.value });
    }

    function handleSelectOnChange(e) {
        setEncounter({
            ...encounter,
            categoria: {
                id: e.target.value,
                nome: e.target.options[e.target.selectedIndex].text,
            },
        });
    }

    return (
        <form onSubmit={submit} className="row g-3">
            <div className="col-12">
                <Input
                    type="text"
                    name="titulo"
                    title="Título do Encontro"
                    placeholder="Digite aqui o Título do seu Encontro"
                    handleOnChange={handleInputOnChange}
                    value={encounter.titulo ? encounter.titulo : ''}
                />
            </div>
            <div className="col-12">
                <Input
                    type="number"
                    name="nd_encontro"
                    title="ND do Encontro"
                    placeholder="Digite aqui o ND do seu Encontro"
                    handleOnChange={handleInputOnChange}
                    value={encounter.nd_encontro ? encounter.nd_encontro : ''}
                />
            </div>
            <div className="col-12">
                <Select
                    name="id_categoria"
                    title="Escolha uma Categoria"
                    options={categorias}
                    handleOnChange={handleSelectOnChange}
                    value={encounter.categoria ? encounter.categoria.id : 1}
                />
            </div>
            <div className="col-12 d-grid">
                <SubmitButton text={btnText} />
            </div>
        </form>
    );
}

export default EncounterForm;
