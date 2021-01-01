import React from 'react';
import {Field, Form, reduxForm} from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../Utils/Validator/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router";
import style from "./../common/FormsControls/FormsControls.module.css"


const LoginForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       name={"email"}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       component={Input}
                       validate={[required]}
                       type={"password"}
                />
            </div>
            <div>
                <Field component={Input}
                       name={"rememberMe"}
                       type={"checkbox"}
                />
                Remember me
            </div>

            {props.error && <div className={style.formSummeryError}>
                {props.error}
            </div>
            }
            <div>
                <button>
                    Login
                </button>
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
        props.login(formData.email, formData.password, formData.rememberMe)
    }


    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }


    return <div>
        <h1>LOGIN</h1>
        <LoginFormRedux onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login)