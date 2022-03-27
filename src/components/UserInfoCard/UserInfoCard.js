import React from 'react';
import "./UserInfoCard.css"

const UserInfoCard = ({manName, womanName, email, guests, notes, city, deleteNote, deleteGuest}) => {

    return (
        <div className='container'>
            <div className="d-flex align-items-center c mt-3">
                <div className="avatar">
                <span className="material-icons control_point">
                 control_point
                </span>
                </div>
                <div className="names">{manName} и {womanName}</div>
            </div>
            <div className="names">Ваш город {city}</div>
            <div className="names">Ваша почта {email}</div>
            <div className="">
                <div className="names">Список гостей</div>
                {guests.length > 0 ? (
                    <div>
                        {guests.map((i) => (
                            <div className="d-flex justify-content-between align-items-center guests" key={i._id}>
                                <div className="names">{i.guestName} {i.personCount}</div>
                                <>
                            <span onClick={(() => deleteGuest(i._id))} className="material-icons icon-clear">
                                clear
                            </span>
                                </>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h3 className="names">пуст</h3>
                )}
            </div>
            {notes.length > 0 ? (
                    <div className="names">
                        Заметки : {notes.map((i) => (
                        <div className="d-flex justify-content-between align-items-center notes" key={i._id}>
                            {i.noteText}
                            <span onClick={(() => deleteNote(i._id))} className="material-icons icon-clear">
                                clear
                            </span>
                        </div>))}
                    </div>
                ) :
                <h3 className="names">Нет Заметок</h3>}
        </div>
    );
};

export default UserInfoCard;
