import { useEffect, useReducer, useRef, useState } from "react"

const min_characters = 10
const initialState = {
    disableEmail: true,
    disablePassword: true,
    disableConfirm: true,
}

const CHECKS = {
    email: "check-email",
    password: "check-password",
    confirmPassword: "check-confirmpassword",
}

function reducer(state, action){
    switch(action.type){
        case CHECKS.email: {
            let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let validated = re.test(action.emailValue)
            if(validated){
                console.log("conf1")
                return {
                    ...state,
                    disableEmail: false
                }
            } else{
                return {
                    ...state,
                    disableEmail: true
                }
            }
        }
        case CHECKS.password: {
            if(action.passwordValue.length >= min_characters){
                console.log("conf2")
                return {
                    ...state,
                    disablePassword: false
                }
            } else {
                return {
                    ...state,
                    disablePassword: true
                }
            }
        }
        case CHECKS.confirmPassword: {
            if(action.confirmValue === action.passwordRef){
                console.log("conf3")
                return {
                    ...state,
                    disableConfirm: false
                }
            } else {
                return {
                    ...state,
                    disableConfirm: true,
                }
            }
        }
        default:
            throw new Error(action.type)
    }
}
export default function UseReducer(){
    const passwordRef = useRef()
    const [state, dispatch] = useReducer(reducer, initialState)
    const [disable, setDisable] = useState(true)

    useEffect(() => {
        if(!state.disableEmail && !state.disablePassword && !state.disableConfirm){
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [state])

    return (
        <div>
            <form action="" method="post">
                <label htmlFor="email">E-mail: </label>
                <input type="email" name="email" onChange={(event) => dispatch({type: CHECKS.email, emailValue: event.target.value})}/>
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" ref={passwordRef} onChange={(event) => dispatch({type: CHECKS.password, passwordValue: event.target.value})}/>
                <br />
                <label htmlFor="passwordConfirm">Confirm Password: </label>
                <input type="password" name="passwordConfirm"  onChange={(event) => dispatch({type: CHECKS.confirmPassword, confirmValue: event.target.value, passwordRef: passwordRef.current.value})}/>
                <br />
                <input type="submit" name="submit" disabled={disable}/>
            </form>
        </div>
    )
}