import React, {useEffect, useState} from 'react';
import "./Header.css"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {api} from "../../base/axios";


const Header = () => {

    const dispatch = useDispatch()
    const email = localStorage.getItem("email")
    const [usInfo, setUsInfo] = useState(null)

    const getUserInfo = () => {
        api.post('user', {email}).then((res) => {
            setUsInfo(res.data)
        })
    };

    const logout = () => {
        dispatch({
            type: "DELETE_TOKEN",
            payload: null

        })
        localStorage.clear()
    }
    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <div className="header  d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <Link className="header-logo" to={"/"}>
                    WEDDING APP
                </Link>
            </div>
            {usInfo && (
                <h5 className="d-flex align-items-center header-name">
                    {usInfo?.user.personal?.manName}
                    <div className="header-heart">❤</div>
                    {usInfo?.user.personal?.womanName}
                </h5>
            )}
            <div className="header-content d-flex align-items-center">
                <Link className="header-link" to={"/"}>
                    <div className="d-flex align-items-center" >
                        Главная
                        <span className="material-icons feed">
                         {/*home*/}
                    </span>
                    </div>
                </Link>
                <Link className="header-link " to={"/news"}>
                    <div className="d-flex align-items-center" >
                        Новости и подборки
                        <span className="material-icons feed">
                        {/*feed*/}
                    </span>
                    </div>
                </Link>
                <Link className="header-link" to={"/profile"}>
                    <div className="d-flex align-items-center">
                        Аккаунт
                        <span className="material-icons account_circle">
                            {/*account_circle*/}
                        </span>
                    </div>
                </Link>
                <Link  className="header-link" to={"/"}>
                    <div className="d-flex align-items-center header-link" onClick={logout}>Выйти
                        <span className="material-icons exit_to_app">
                         {/*exit_to_app*/}
                    </span>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default Header;
