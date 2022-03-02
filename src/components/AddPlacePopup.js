import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  const nameRef = React.useRef();
  const linkRef = React.useRef();

  React.useEffect(() => {
// debugger
console.log('nameRef = ',nameRef);

    nameRef.current = '';
    linkRef.current='';
  }, [props.isOpen]);


  function handleSubmit(e) {
      e.preventDefault(e);
      console.log('nameRef.current.value = ', nameRef.current);
      props.handleAddPlaceClick(nameRef.current.value, linkRef.current);
      props.onClose();
    }

  return (
    <PopupWithForm
      onClose={props.closeAllPopups}
      isOpen={props.isAddPlacePopupOpen}
      title={'Новое место'}
      name={'add-plaсe'}
      buttonName={"Создать"}
      onSubmit={handleSubmit}
    >
      <div className="form__field">
        <input 
            placeholder="название" 
            id="place-title-input" 
            className="popup__input popup__input_plaсe-title" 
            name="name" 
            required="" 
            minLength="2" 
            maxLength="30" 
        />
        <span className="popup__input-error place-title-input-error"></span>
      </div>
      <div className="form__field">
        <input 
          placeholder="ссылка на картинку" 
          id="plaсe-img-input" 
          className="popup__input popup__input_plaсe-img" 
          name="link" 
          required="" 
          type="url" 
        />
        <span className="popup__input-error plaсe-img-input-error"></span>
      </div>
    </PopupWithForm>
  )

}

export default AddPlacePopup;