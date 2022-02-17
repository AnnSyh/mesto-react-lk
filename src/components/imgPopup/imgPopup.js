import React from 'react';

function ImgPopup(props) {
    // debugger

  return (

    <div className="open-img">
        <div className="popup open-img__popup popup_opened1">
            <div className="popup__overlay"></div>
            <div className="popup__container">
                <div className="popup__body">

{/* <div>props ={props.card.src}</div> */}

                    <button className="popup__close popup__close-img"
                        type="button"></button>
                    <figure className="popup__figure">
                        <img className="popup__img"
                            src={props.src}
                            alt={props.caption} />
                        <figcaption className="popup__caption">
                            {props.caption}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>

  );
}

export default ImgPopup;