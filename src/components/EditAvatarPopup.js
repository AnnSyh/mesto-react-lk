import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

  // console.log('EditAvatarPopup.js: props = ',props);

  const inputRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault(evt);
    console.log('EditAvatarPopup.js: inputRef.current.value = ', inputRef.current.value);
    props.onUpdateAvatar(inputRef.current.value);
  };

  React.useEffect(() => {
    inputRef.current.value = '';
  }, [props.isOpen]);


  return (
    <PopupWithForm
      name="new-avatar"
      title="Обновить аватар"
      button="profile"
      buttonSubmitText={props.buttonSubmitText}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <div className="form__field">
        <input
          placeholder="ссылка на изображение аватара"
          type="url"
          id="avatar-input"
          className="popup__input popup__input_avatar-img"
          name="avatar-src"
          required
          ref={inputRef}
        />
        <span className="popup__input-error plaсe-img-input-error"></span>
      </div>
    </PopupWithForm>
  )

}

export default EditAvatarPopup;