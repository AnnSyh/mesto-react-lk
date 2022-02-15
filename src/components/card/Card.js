import React from 'react';


function Card({ handleCardClick, title, src }) {
    return (
        <li className="cards__item">
            <div className="cards__pic" 
                 onClick={handleCardClick}
             >
                <img className="cards__img" 
                        data-popup="open-img__popup" 
                        src={src}
                        alt={title} /> 
                <button className="cards__trash hidden"></button>
            </div>
            <div className="cards__text">
                <h2 className="cards__title text-overflow">{title}</h2>
                <div>
                    <button className="cards__heart"></button>
                    <div className="cards__heart-counter">1</div>
                </div>
            </div>
        </li>
    );
}

export default Card;