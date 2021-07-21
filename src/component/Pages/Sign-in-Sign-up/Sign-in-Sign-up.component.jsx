import React from 'react'
import SignIn from '../../Sign-in/Sign-in.component';
import SignUp from '../../Sign-up/Sign-up.component';
import './Sign-in-Sign-up.style.scss'

const SignInSignUp = () => (
    <div className="sign-in-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignUp;