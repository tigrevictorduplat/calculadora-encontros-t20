import classNames from 'classnames';
import styles from './Home.module.scss';
import valkaria from '../../img/valkaria-fullbody.png'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={classNames('d-flex flex-column align-items-center justify-content-center w-100','p-4 p-md-5', styles.homewrap)}>
            <h1 className="display-4 display-md-3">Deeeuses de Arton!</h1>
            <h1 className={`display-5 display-md-4 `}>Bem vindos a <span>Calculadora de Desafios de Valkaria</span></h1>
            <p>Onde os deuses podem preparar Encontros e Desafios para os seus aventureiros preferidos (ou desqueridos)</p>
            <LinkButton to="/new-encounter" text="Criar Encontro" />
            <img src={valkaria} alt="Deusa Valkaria - Corpo Inteiro" />
        </section>
    );
}

export default Home;
