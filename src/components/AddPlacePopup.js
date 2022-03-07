import React from 'react';
import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  // console.log('props = ',props);
  // console.log('props.isSubmit = ',props.IsSubmit);

  const [nameCard, setNameCard] = useState('');
  const [linkCard, setLinkCard] = useState('');

  function handleСhangeCardName(e) {
    setNameCard(e.target.value)
  }

  function handleСhangeCardLink(e) {
    setLinkCard(e.target.value)
  }
  
  function handleSubmit(evt) {
    evt.preventDefault(evt);

    props.onAddPlace({
      name: nameCard,
      link: linkCard
    });

  }

   // очищаем поля
   useEffect(() => {
    setNameCard("");
    setLinkCard("");
  }, [props.isOpen])


  return (
    <PopupWithForm
      title='Новое место'
      name='add-plaсe'
      buttonText={
        props.IsSubmit
        ? 'Сохранить...'
        : 'Сохранить'
      } 
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
            value={nameCard}
            onChange={handleСhangeCardName}
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
          value={linkCard}
          onChange={handleСhangeCardLink}
        />
        <span className="popup__input-error plaсe-img-input-error"></span>
      </div>
    </PopupWithForm>
  )

}

export default AddPlacePopup;