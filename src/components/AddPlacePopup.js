import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  console.log('AddPlacePopup.js: props = ',props);

  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault(evt);

    console.log('AddPlacePopup.js:  nameRef = ', nameRef);
    console.log('AddPlacePopup.js:  nameRef.current = ', nameRef.current);
    console.log('AddPlacePopup.js:  nameRef.current.value = ', nameRef.current.value);

    props.onAddPlace(nameRef.current, linkRef.current);
    props.onClose();
  }


  React.useEffect(() => {
    // nameRef.current = 'qqqq';
    // linkRef.current='https://hair-fresh.ru/wp-content/uploads/2017/06/2eceb00375e2db39b304f975eb5499b8.jpg';
    nameRef.current = '';
    linkRef.current='';
  }, [props.isOpen]);



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