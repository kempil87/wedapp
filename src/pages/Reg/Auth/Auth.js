import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {api} from "../../../base/axios";
import {useDispatch} from "react-redux";
import "./Auth.css"
import {Button} from "react-bootstrap";

const Auth = () => {
    const dispatch = useDispatch()
    const [mail,setMail] = useState("")
    const [password,setPassword] = useState("")

    const authUser = () => {

        if (mail.length < 4 ){
            alert("eMail должен быть больше 4 символов")
        } else if ( password.length <6 ){
            alert("Пароль должен быть больше 6 символов")
        } else {
            api.post("auth/login", {email: mail,password}).then((res) =>{
                dispatch({
                    type: "ADD_TOKEN",
                    payload: res.data.token
                })
                console.log(res.data)
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('email',res.data.email);
            })
        }
    }


    return (
        <div className="auth">
            <div className="auth-wrap d-flex align-items-center justify-content-center flex-column" >
                <h4 className="auth-title">Вход</h4>
                <label className="mt-4">
                    <input  className="auth-input" placeholder="Почта" type="email" name="mail" value={mail} onChange={e => setMail(e.target.value)}/>
                </label>
                <label className="mt-3">
                    <input className="auth-input" placeholder="Пароль" type="text" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <Link  className="mt-2 auth-link" to={"/registration"}>Регистрация</Link>
                <div className="mt-2 auth-btn" onClick={authUser}>Войти</div>
            </div>
        </div>
    );
};

export default Auth;
