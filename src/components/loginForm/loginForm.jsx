import React from 'react'
import Input from '../input/input'
import {isValidName, isValidSurName, isValidPassword} from '../../helpers/verifires/verifires'

export default class LoginForm extends React.Component{
    constructor(props)
    super(props)
}

render(){
    return(
        <div>
            <form action="">
                <Input type="text" placeholder="Name" verifier="isValidName" />
                <Input type="text" placeholder="Name" verifier="isValidSurName" />
                <Input type="password" placeholder="password" verifier="isValidPassword" />
                
            </form>
        </div>
    )
}
