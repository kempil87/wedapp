import React, {useEffect, useState} from 'react';
import {api} from "../../../base/axios";
import UserInfoCard from "../../../components/UserInfoCard/UserInfoCard";
import Select from "react-select";
import "./Profile.css"

const Profile = () => {
    const email = localStorage.getItem("email")
    const [usInfo, setUsInfo] = useState(null)
    const [manName, setManName] = useState("")
    const [womanName, setWomanName] = useState("")
    const [notes, setNotes] = useState("")
    const [city, setCity] = useState([])
    const [currentCity, setCurrentCity] = useState({value: "", label: "Выберите Город"})
    const [guest, setGuest] = useState("")
    const [guestCount, setGuestCount] = useState("1")


    const getUserInfo = () => {
        api.post('user', {email}).then((res) => {
            setUsInfo(res.data)
        })
    };

    const getCity = () => {
        api.post('city/search',).then((res) => {
            setCity(res.data)
        })
    };
    const updateUserName = () => {
        api.post('user/update', {manName, womanName, email}).then((res) => {
            getUserInfo()
        })
    }
    const createUserNotes = () => {

        api.post('user/note/add', {noteText: notes, email}).then((res) => {
            getUserInfo()
        })
    }
    const createUserGuests = () => {

        api.post('user/guest/add', {guestName: guest, personCount: guestCount, email}).then((res) => {
            getUserInfo()
        })
    }
    const deleteNote = (id) => {

        return api.post('user/note/delete', {noteId: id, email,}).then((res) => {
            getUserInfo()
        });
    }

    const deleteGuest = (id) => {

        return api.post('user/guest/delete', {guestId: id, email,}).then((res) => {
            getUserInfo()
        });
    }

    const addUserCity = (e) => {
        setCurrentCity(e)
        api.post("user/city/add", {email, city: e.label}).then((res) => {
            getUserInfo()
        })
    }


    useEffect(() => {
        getUserInfo()
        getCity()
    }, [])

    return (
        <div className="profile d-flex flex-column container">
            <div className="">
                <h2>Мой Аккаунт</h2>
            </div>
            <div className="">
                <div>
                    {usInfo && (
                        <UserInfoCard
                            email={usInfo?.user.email}
                            manName={usInfo?.user.personal.manName}
                            womanName={usInfo?.user.personal.womanName}
                            city={usInfo?.user.personal.city}
                            guests={usInfo?.user.guest}
                            notes={usInfo?.user.userNotes}
                            deleteNote={(id) => deleteNote(id)}
                            deleteGuest={(id) => deleteGuest(id)}
                        />
                    )}
                </div>
                <div className="d-flex flex-column mt-5">
                    <h4>Заполните имена</h4>
                    <div className="profile-Name mb-4">
                        <label>
                            Жених
                            <input className="profile-input" type="text"
                                   value={manName ? manName : usInfo?.user.personal.manName}
                                   onChange={e => setManName(e.target.value)}/>
                        </label>
                        <label>
                            Невеста
                            <input className="profile-input" type="text"
                                   value={womanName ? womanName : usInfo?.user.personal.womanName}
                                   onChange={e => setWomanName(e.target.value)}/>
                        </label>
                        <button className="profile-btn" onClick={updateUserName}>Сохранить</button>
                    </div>

                    <h4>Напишите заметки к свадьбе</h4>
                    <div className="profile-note mb-4">
                        <label>

                            <input className="profile-input" type="text" value={notes}
                                   onChange={e => setNotes(e.target.value)}/>
                        </label>
                        <button className="profile-btn" onClick={createUserNotes}>Создать Заметку</button>
                    </div>

                    <h4>Напишите гостей и их количество </h4>
                    <div className="profile-guest mb-4 ">
                        <label className="profile-guest ">
                            <input className="profile-input" type="text" value={guest}
                                   onChange={e => setGuest(e.target.value)}/>
                            <input className="profile-input-count" type="number" value={guestCount}
                                   onChange={e => setGuestCount(e.target.value)}/>
                        </label>
                        <button className='profile-btn' onClick={createUserGuests}>Создать гостя</button>
                    </div>
                    <h4>В каком городе будет ваша свадьба?</h4>
                    <div className="city-select mb-5">
                        <Select
                            value={currentCity}
                            onChange={(e) => addUserCity(e)}
                            options={city.map((item) => ({value: item._id, label: item.name}))}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
