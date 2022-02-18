import React from 'react';

function ImgPopup(props) {

    return (

        <div className="open-img">
            <div className={`popup open-img__popup  ${props.isOpen && "popup_opened"}`}>
                <div className="popup__overlay"></div>
                <div className="popup__container">
                    <div className="popup__body">
                        <button className="popup__close popup__close-img"
                            type="button"
                            onClick={props.onClose}>
                        </button>
                        <figure className="popup__figure">
                            <img className="popup__img"
                                src={props.link}
                                alt={props.name} />
                            <figcaption className="popup__caption">
                                {props.name}
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ImgPopup;