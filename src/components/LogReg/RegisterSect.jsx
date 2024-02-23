import { Link, useNavigate } from "react-router-dom";
import ForEveryPage from "../ForEveryPage/ForEveryPage";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../Form/Input";
import {
    name_validation,
    // desc_validation,
    email_validation,
    // num_validation,
    password_validation,
} from '../Form/utils/inputValidations'
import { useState } from 'react'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import axios from 'axios'

export default function RegisterSect() {
    const info = { id: 'register-first', bgImage: '/images/reg.jpg', title: 'Register', href: 'Home' };
    const methods = useForm()
    const [success, setSuccess] = useState(false)
    const [validPhp, setValidPhp] = useState([]);
    const navigate = useNavigate();

    const onSubmit = methods.handleSubmit((info, e) => {
        e.preventDefault();
        console.log(info)

        const data = new FormData(e.target);
        axios.post('http://shop/api/auth.php', data)
            .then(function (response) {
                // console.log(response.data);
                if (response.data.status === 1) {
                    setSuccess(true)
                    navigate('/login');
                } else {
                    const errors = [response.data.message];
                    setValidPhp(errors);
                }
            })
            .catch(function (error) {
                console.error('Error:', error);
            });
    })

    return (
        <>
            <ForEveryPage {...info} />
            <section id="register">
                <div className="container">
                    <div className="row f-jCenter m-center w60">
                        <FormProvider {...methods} >
                            <form
                                className="w100"
                                onSubmit={onSubmit}
                                noValidate
                                autoComplete="off"
                                encType="multipart/form-data"
                            >
                                <h4>Registration Form</h4>
                                <div className="form-container">
                                    {/* <div className="input-wrapper"> */}
                                    <Input {...name_validation} />
                                    <Input {...email_validation} />
                                    {/* <Input {...num_validation}/> */}
                                    <Input {...password_validation} />
                                    {validPhp.length > 0 && (
                                        <div className="error-messages">
                                            <ul>
                                                {validPhp.map((error, index) => (
                                                    <li key={index}>{error}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {/* <Input {...desc_validation}/> */}
                                    {/* </div> */}
                                    <input type="hidden" name="action" value='register' />
                                    <p>Have an account ? <Link to='/login'>Login</Link> </p>
                                    <div className="submit-wrapper input-wrapper">
                                        {success && (
                                            <p>
                                                <BsFillCheckSquareFill /> Form has been submitted successfully
                                            </p>
                                        )}
                                        <input className="btn" type="submit" value='Register' />
                                    </div>
                                </div>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </section>
        </>
    )
}