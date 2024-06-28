import {useLocation} from 'react-router-dom'

import Message from "../layout/Message"

function Encontros () {
    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

 return (
    <div>
        <h1>Meus Encontros</h1>
        {message && <Message message={message} type="success" timeout={3500}/>}
    </div>
    )
}

export default Encontros