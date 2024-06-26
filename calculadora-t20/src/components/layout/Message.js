import {useState , useEffect } from 'react'

import styles from './Message.module.css'

function Message ({type, message, timeout = 3000}){
    const [visible, setVisible] = useState(false)
    

    useEffect( () => {
        
        if(!message){
            setVisible(false)
            return
        }

        setVisible(true)

        const timerMessage = setTimeout( () => {
                setVisible(false)
            }, timeout)

        return () => clearTimeout(timerMessage)

    }, [message , timeout])

    return (
    <>
    { visible && (
       <div className={ `${styles.message} ${styles[type]}` }>{message}</div> 
    )}
    </>
    )
}

export default Message