import React, {useState} from 'react';
import {api} from "../../../base/axios";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const Registration = () => {

    const [mail,setMail] = useState("")
    const [password,setPassword] = useState("")

    const registerUser = () => {

        if (mail.length < 4 ){
            alert("eMail должен быть больше 4 символов")
        } else if ( password.length <6 ){
            alert("Пароль должен быть больше 6 символов")
        } else {
            api.post("auth/register", {email: mail,password}).then((res) =>{
                console.log(res)
            })
        }
    }

    return (
        <div className="auth">
            <div className="auth-wrap d-flex align-items-center justify-content-center flex-column" >
                <h4 className="auth-title">Регистрация</h4>
                <label className="mt-4">
                    <input className="auth-input" placeholder="Почта" type="email" name="mail" value={mail} onChange={e => setMail(e.target.value)}/>
                </label>
                <label className="mt-3">
                    <input className="auth-input" placeholder="Пароль" type="text" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <Link  className="mt-2 auth-link" to={"/"}>Есть Аккаунт</Link>
                <div className="mt-2 auth-btn" onClick={registerUser}>Зарегестрироваться</div>
            </div>
        </div>
    );
};

export default Registration;
