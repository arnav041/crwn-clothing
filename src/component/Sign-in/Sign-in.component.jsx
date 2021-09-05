import React from 'react';
import './Sign-in.style.scss';
import { connect } from 'react-redux'
import FormInput from '../Form-input/Form-input.component';
import CustomButton from '../Custom-button/Custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props;
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
                        handleChange={this.handleChange} required />


                    <FormInput
                        name="password"
                        type="password"
                        label='Password'
                        value={this.state.password}
                        handleChange={this.handleChange} required />

                    <div className="buttons">
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >Sign in with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn);