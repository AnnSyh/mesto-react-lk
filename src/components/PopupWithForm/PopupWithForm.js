import React from 'react';

function PopupWithForm({ title, name}) {
  return (

    <div className={`${name}`}>

{/* className={`popup popup_type_${name}`}    */}

        <div className={`popup ${name}__popup`}>
            <div className="popup__overlay"></div>
            <div className="popup__container">
                <form className="form popup__form"
                    name={`${name}`}
                    novalidate>
                          {/* className="popup__close popup__close_add-plaсe" */}
                    <button 
                        className={`popup__close popup__close_${name}`}
                        type="button"></button>
                    <h2 className="page-title popup__page-title  text-overflow">{title}</h2>
                    <div className="form__field">
                        <input placeholder="название"
                            id="place-title-input"
                            className="popup__input popup__input_plaсe-title"
                            name="name"
                            type="text"
                            required
                            minlength="2"
                            maxlength="30" />
                        <span className="popup__input-error place-title-input-error"></span>
                    </div>
                    <div className="form__field">
                        <input placeholder="ссылка на картинку"
                            id="plaсe-img-input"
                            className="popup__input popup__input_plaсe-img"
                            name="link"
                            required
                            type="url" />
                        <span className="popup__input-error plaсe-img-input-error"></span>
                    </div>
                    <button className="popup__btn"
                        name="btn"
                        type="submit"
                        value="Сохранить">Сохранить</button>
                </form>
            </div>
        </div>
    </div>
    
  );
}

export default PopupWithForm;
