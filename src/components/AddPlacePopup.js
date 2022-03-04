import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
const [nameValue, setnameValue] = React.useState("");
const nameRef = React.useRef();

const [linkValue, setlinkValue] = React.useState("");
const linkRef = React.useRef();

  

  function handleSubmit(evt) {
    evt.preventDefault(evt);

    setnameValue(nameRef.current.value);
    setlinkValue(linkRef.current.value);

    props.onAddPlace(nameRef.current.value, linkRef.current.value);
    props.onClose();
  }


  return (
    <PopupWithForm
      title='Новое место'
      name='add-plaсe'
      buttonName="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <div className="form__field">
        <input 
            placeholder="название" 
            id="place-title-input" 
            className="popup__input popup__input_plaсe-title" 
            name="name" 
            required 
            minLength="2" 
            maxLength="30" 
            ref={nameRef} 
        />
        <span className="popup__input-error place-title-input-error"></span>
      </div>
      <div className="form__field">
        <input 
          placeholder="ссылка на картинку" 
          id="plaсe-img-input" 
          className="popup__input popup__input_plaсe-img" 
          name="link" 
          required 
          type="url" 
          ref={linkRef}
        />
        <span className="popup__input-error plaсe-img-input-error"></span>
      </div>
    </PopupWithForm>
  )

}

export default AddPlacePopup;