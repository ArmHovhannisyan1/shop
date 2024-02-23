import { Link, useNavigate } from "react-router-dom";
import ForEveryPage from "../ForEveryPage/ForEveryPage";
import { useState } from "react";
import axios from "axios";

export default function LoginSect() {
    const info = { id: 'login-first', bgImage: '/images/login.jpg', title: 'Login', href: 'Home' };
    const navigate = useNavigate();
    const [error, setError] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        axios.post('http://shop/api/auth.php', data).then(function (response) {
            console.log(response.data);
            if (response.data.status === 1) {
                navigate('/addproduct')
            } else {
                const error = [response.data.message];
                console.log(error)
                setError(error);
            }
        })
    }

    return (
        <>
            <ForEveryPage {...info} />
            <section id="login">
                <div className="container">
                    <div className="row f-jCenter m-center w60">
                        <form className="w100" onSubmit={handleSubmit}>
                            <h4>Login Form</h4>
                            <div className="form-container">
                                <div className="input-wrapper">
                                    <p>Email address*</p>
                                    <input
                                        type="email"
                                        name="email"
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <p>Password*</p>
                                    <input
                                        type="password"
                                        name="password"
                                    />
                                </div>
                                {error.length > 0 && (
                                        <div className="error-messages">
                                            <ul>
                                                {error.map((err, index) => (
                                                    <li key={index}>{err}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                <input type="hidden" name="action" value='login' />
                                <p>Don't have an account ? <Link to='/register'>Register</Link></p>
                                <div className="submit-wrapper input-wrapper">
                                    <input className="btn" type="submit" value='Login' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}