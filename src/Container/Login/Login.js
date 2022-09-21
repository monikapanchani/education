import React, { useState } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux'
import { Form, Formik, useFormik } from 'formik';
import { ForgotPasswordAction, GoogleLoginAction, singinAction, singupAction } from '../../reduxsaga/action/action';



function Login(props) {



    const [usertype, Setusertype] = useState('Login');
    const [password, setpassword] = useState(false);

    const handleGoggleLogin=()=>{
        dispatch(GoogleLoginAction())
    }
const HandlePassword=(values)=>{
    console.log(values);
    dispatch(ForgotPasswordAction(values))
}
    // const handleForgotPassword=(values)=>{
    //     console.log(values);
    //     dispatch(ForgotPasswordAction(values))
    // }

    const dispatch = useDispatch();

    let LoginSchema, initVal;

    if (usertype == 'Login') {
        LoginSchema = {
            email: yup.string().email("Invalid email address format").required("Email is required"),
            password: yup.string().required("Password is required")
        };
        initVal = {
            email: '',
            password: ''
        }
    } else if (usertype == 'Signup') {
        LoginSchema = {
            name: yup.string().required("name is required"),
            email: yup.string().email("Invalid email address format").required("Email is required"),
            password: yup.string().required("Password is required")
        };
        initVal = {
            name: '',
            email: '',
            password: ''
        }
    } else if (password){
        LoginSchema =
            { email: yup.string().email("Invalid email address format").required("Email is required") }
        initVal = {
            email: ''
        }
    }

    let Schema = yup.object().shape(LoginSchema);

    let handleLogin=(values)=>{
        // localStorage.setItem('user', '123')
        dispatch(singinAction(values))
    }


    const formikobj = useFormik({
        initialValues: initVal,
        validationSchema: Schema,
        onSubmit: (values) => {
            console.log(values);
            if(usertype === 'Login' && !password){
                handleLogin(values);
            }else if(usertype === 'Signup' && !password){
                // alert(JSON.stringify(values, null, 2));
                dispatch(singupAction(values))
               
            }else if(password === true){
               HandlePassword(values)
            }

        },
    });

    const { errors, handleChange, handleSubmit, handleBlur, touched } = formikobj;


    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        password ?
                            <h2>Forgot Password</h2>
                            :
                            usertype === 'Login' ?
                                <h2>Login</h2>
                                :
                                <h2>Signup</h2>
                    }

                </div >
                <Formik values={formikobj}>
                    <Form mathod="post" onSubmit={handleSubmit} className="php-email-form">
                        <div className='box'>
                            <div className="row justify-content-center">

                                {
                                    usertype === 'Signup' ?
                                        <div className="col-md-4 form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your Name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.name && touched.name ? (
                                                <p>{errors.name}</p>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        :
                                        null
                                }
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email ? (
                                        <p>{errors.email}</p>
                                    ) : (
                                        ""
                                    )}
                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                {
                                    password ?
                                        null : <div className="col-md-4 form-group mt-3 mt-md-0">
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                id="password"
                                                placeholder="Your password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.password && touched.password ? (
                                                <p>{errors.password}</p>
                                            ) : (
                                                ""
                                            )}
                                            <div className="validate" />
                                        </div>
                                }
                            </div>
                            <div className='text-align-center'>
                                {
                                    usertype === 'Login' && password === false ?
                                        <>
                                            <a
                                                type="submit"
                                                onClick={() => Setusertype('Signup')}>
                                                Create an account ?
                                            </a><br />
                                            <a
                                                type="submit"
                                                onClick={() => setpassword(true)}>
                                                Forgot Password ?
                                            </a>
                                        </>
                                        :
                                        password === true ?
                                            <a
                                                type="submit"
                                                onClick={() => setpassword(false)}>
                                                Remember your password !
                                            </a>
                                            :
                                            <a
                                                type="submit"
                                                onClick={() => Setusertype('Login')}>
                                                Already an account ?
                                            </a>
                                }
                            </div>
                        </div>


                        <div className="row">
                            {
                                password ?
                                    <div
                                        className="text-center">
                                        <button type="submit">
                                            Forgot Password
                                        </button>
                                    </div>
                                    :
                                    usertype === 'Login' ?
                                        <div
                                            className="text-center">
                                            <button
                                                type="submit">
                                                Login
                                            </button>
                                        </div>
                                        :
                                        <div
                                            className="text-center">
                                            <button
                                                type="submit">
                                                Signup
                                            </button>
                                        </div>
                            }
                             <div
                                            className="text-center">
                                            <button
                                                type="submit" onClick={()=>handleGoggleLogin()}>
                                                Google Signin
                                            </button>
                                        </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </section>

    );
}

export default Login;