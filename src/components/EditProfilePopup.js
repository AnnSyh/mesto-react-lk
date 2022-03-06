import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';


function EditProfilePopup(props){
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription ] = React.useState('');


    function handleChangeName(evt) {
        setName(evt.target.value);
    };

    function handleChangeDescription(evt) {
        setDescription(evt.target.value);
    };

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    function handleSubmit(evt) {
        evt.preventDefault(evt);
        props.onUpdateUser({
            name: name,
            about: description
        });
    };


    return(
        <PopupWithForm 
            name="edit-profile"
            title="Редактировать профиль"
            button="profile"
            buttonText='Сохранить профиль'
            buttonSubmitText={props.buttonSubmitText}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
          <div className="form__field">
            <input 
                placeholder="Имя" 
                type="text"
                id="user-title" 
                className="popup__input popup__input_user-title" 
                name="title" 
                required 
                minLength="2"
                maxLength="40" 
                value={name|| ''}
                onChange={handleChangeName}
              />
            <span className="popup__input-error user-title-error"></span>
          </div>
          <div className="form__field">
              <input    placeholder="О себе" 
                        type="text"
                        id="user-subtitle" 
                        className="popup__input popup__input_user-subtitle" 
                        name="subtitle" 
                        required 
                        minLength="2" 
                        maxLength="200" 
                        value={description || ''}
                        onChange={handleChangeDescription}                        
                />
            <span className="popup__input-error user-subtitle-error"></span>
          </div>
        </PopupWithForm>
    )
        
}

export default EditProfilePopup;