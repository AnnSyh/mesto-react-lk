import React from 'react';

function ImgPopup(props) {

  return (

    <div className="open-img">
        <div className="popup open-img__popup popup_opened1">
            <div className="popup__overlay"></div>
            <div className="popup__container">
                <div className="popup__body">
                    <button className="popup__close popup__close-img"
                        type="button"></button>
                    <figure className="popup__figure">
                        <img className="popup__img"
                            src={props.card.src}
                            alt={props.card.title} />
                        <figcaption className="popup__caption">{props.card.title}</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>

  );
}

export default ImgPopup;