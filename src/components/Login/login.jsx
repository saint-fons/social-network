import React from 'react';
import {Field, Form, reduxForm} from 'redux-form'


const LoginForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </Form>
    )
}


const LoginFormRedux = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginFormRedux onSubmit={onSubmit} />
    </div>
}


export default Login