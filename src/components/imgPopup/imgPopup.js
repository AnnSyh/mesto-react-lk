import React from 'react';

function ImgPopup(props) {
    // debugger

console.log('ImgPopup props= ',props);
console.log('ImgPopup props.src= ',props.src);
console.log('ImgPopup props.caption= ',props.caption);
console.log('ImgPopup props.onClose= ',props.onClose);
console.log('ImgPopup props.isOpen= ',props.isOpen);

    return (

        //   <div className={`${props.name}`}>
        //     <div className="popup open-img__popup popup_opened1">
        <div className="open-img">
            <div className={`popup open-img__popup  ${props.isOpen && "popup_opened"}`}>
                <div className="popup__overlay"></div>
                <div className="popup__container">
                    <div className="popup__body">

                        {/* <div>props ={props.card.src}</div> */}

                        <button className="popup__close popup__close-img"
                            type="button"
                            onClick={props.onClose}>
                        </button>
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