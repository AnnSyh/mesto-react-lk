import React from 'react';
import avatar from '../images/avatar.jpg';
import Button from './button';
import api from  '../utils/api.js';

function Main({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick}) {

const [userName, setUserName] = React.useState('Имя пользователя');
const [userDescription, setUserDescription] = React.useState('О пользователе');
const [userAvatar, setUserAvatar] = React.useState(avatar);
  
    React.useEffect(() => {

      api.getUser()
        .then((userData) => {
            // console.log('userData = ',userData)
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
        })
        .catch((err) => console.log(err));

    }, []);

  return (

    <section className="profile section content__section">
        <div className="profile__user">
            <div className="profile__pic btn-avatar-edit">
                <img className="profile__img"
                    src={userAvatar}
                    alt="аватар" />
                <Button title="" 
                        btnClass="profile__btn profile__btn_user-edit profile__btn_avatar-edit  link-hover" 
                        handleClick={handleEditAvatarClick}/>
            </div>

            <div className="profile__info">
                <div className="profile__edit">
                    <h1 className="profile__name text-overflow">{userName}</h1>

                    <Button title="" 
                            btnClass="profile__btn profile__btn_user-edit btn-user-edit link-hover" 
                            handleClick={handleEditProfileClick}/>
                </div>
                <p className="profile__job text-overflow">{userDescription}</p>
            </div>

        </div>

        <Button title="+" 
                btnClass="profile__btn profile__btn_user-add link-hover" 
                handleClick={handleAddPlaceClick}/>
    </section>

  );
}

export default Main;
