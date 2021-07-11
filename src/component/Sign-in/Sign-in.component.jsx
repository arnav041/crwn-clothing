import React from 'react'
import './Sign-in.style.scss'
import FormInput from '../Form-input/Form-input.component';
import CustomButton from '../Custom-button/Custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils.js'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h1 className='title' >I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        label='Email'
                        onChange={this.handleChange} required />


                    <FormInput
                        name="password"
                        type="password"
                        label='Password'
                        value={this.state.password}
                        onChange={this.handleChange} required />
                        
                    <div className="buttons">
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
export default SignIn