import React from 'react';

function imgPopup({ caption, src, handleClickImg}) {
  return (

    <div className="open-img">
        <div className="popup open-img__popup">
            <div className="popup__overlay"></div>
            <div className="popup__container">
                <div className="popup__body">
                    <button className="popup__close popup__close-img"
                        type="button"></button>
                    <figure className="popup__figure">
                        <img className="popup__img"
                            src={src}
                            alt={caption} />
                        <figcaption className="popup__caption">{caption}</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>

  );
}

export default imgPopup;