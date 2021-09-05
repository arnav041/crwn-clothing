import React from 'react';
import './Sign-up.style.scss';
import FormInput from '../Form-input/Form-input.component';
import CustomButton from '../Custom-button/Custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';


class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;


        if (password !== confirmPassword) {
            alert('password do not match')
            return;
        }

        signUpStart({ displayName, email, password });
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up" >
                <h1 className="title">I do not have an account</h1>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit} >
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

const mapStateToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapStateToProps)(SignUp);