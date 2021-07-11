import React from 'react'
import './Sign-in.style.scss'
import FormInput from '../Form-input/Form-input.component';
import CustomButton from '../Custom-button/Custom-button.component';

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

                    <CustomButton type='submit'>Sign in</CustomButton>

                </form>
            </div>
        )
    }
}
export default SignIn