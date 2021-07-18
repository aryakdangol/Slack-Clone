import React from 'react'
import './Login.css'
import {Button} from "@material-ui/core"
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionType } from './reducer'

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result)
           dispatch({
               type: actionType.SET_USER,
               user: result.user,
           })
        })
        .catch(error =>{
            alert(error)
        })
    }
    return (
        <div className="login">
            <div className="login-container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp" alt="" />
                <h1>Sign In</h1>
                <p>slack.com</p>
                <Button onClick = {signIn}>SIGN IN WITH GOOGLE</Button>
            </div>
        </div>
    )
}

export default Login
