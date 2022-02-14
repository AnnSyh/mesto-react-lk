import React from 'react';
import avatar from '../../images/avatar.jpg';
import Button from '../button/button';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Profile() {

    const handleEditAvatarClick = () => {
       document.querySelector('.new-avatar__popup').classList.add('popup_opened');
      }
    const handleEditProfileClick = () => {
       document.querySelector('.edit-profile__popup').classList.add('popup_opened');
      }
    const handleAddPlaceClick = () => {
       document.querySelector('.add-plaсe__popup').classList.add('popup_opened');
      }



  return (

    <section className="profile section content__section">
        <div className="profile__user">
            <div className="profile__pic btn-avatar-edit">
                <img className="profile__img"
                    src={avatar}
                    alt="аватар" />
                <Button title="" 
                        btnClass="profile__btn profile__btn_user-edit profile__btn_avatar-edit  link-hover" 
                        handleClick={handleEditAvatarClick}/>
                {/* <button type="button"
                    className="profile__btn profile__btn_user-edit profile__btn_avatar-edit  link-hover"
                    data-popup="edit-profile__popup"></button> */}
            </div>

            <div className="profile__info">
                <div className="profile__edit">
                    <h1 className="profile__name text-overflow"></h1>

                    <Button title="" 
                            btnClass="profile__btn profile__btn_user-edit btn-user-edit link-hover" 
                            handleClick={handleEditProfileClick}/>
                    {/* <button type="button"
                        className="profile__btn profile__btn_user-edit btn-user-edit link-hover"
                        data-popup="edit-profile__popup"></button> */}
                </div>
                <p className="profile__job text-overflow"></p>
            </div>

        </div>

        <Button title="+" 
                btnClass="profile__btn profile__btn_user-add link-hover" 
                handleClick={handleAddPlaceClick}/>

        {/* <button type="submit"
            className="profile__btn profile__btn_user-add link-hover"
            data-popup="add-plaсe__popup"></button> */}
    </section>

  );
}

export default Profile;
