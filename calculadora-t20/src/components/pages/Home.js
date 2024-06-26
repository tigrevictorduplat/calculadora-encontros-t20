import styles from './Home.module.css'

import valkaria from '../../img/valkaria-fullbody.png'
import LinkButton from '../layout/LinkButton'


function Home () {
    return (
        <section className={styles.homewrap}>
        <h1>Deuses de Arton</h1>

        <h1>Bem vindos a <span>Calculadora de Desafios de Valkaria</span></h1>
        <p>Onde os deuses podem preparar Encontros e Desafios para os seus aventureiros preferidos(ou desqueridos)</p>
        <LinkButton to="/new-encounter" text="Criar Encontro"/>
        <img src={valkaria} alt="Deusa Valkaria - Corpo Inteiro" />
        </section>
    )
}

export default Home

