import React from 'react';

function PopupWithForm(props) {

// console.log('props= ',props);
// console.log('props.onClose= ',props.onClose);
// console.log('props.isOpen= ',props.isOpen);

  return (

    <div className={`${props.name}`}>
        <div className={`popup ${props.name}__popup  ${props.isOpen && "popup_opened"}`}>
            <div className="popup__overlay"></div>
            <div className="popup__container">
                <form className="form popup__form"
                    name={`${props.name}`}
                    noValidate>
                    <button 
                        className={`popup__close popup__close_${props.name}`}
                        type="button"
                        onClick={props.onClose}
                        >
                        </button>
                    <h2 className="page-title popup__page-title  text-overflow">{props.title}</h2>

                    {props.children}
                    
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
