import React from 'react';


// function Card({ handleCardClick, title, src }) {
function Card(props) {
    
    console.log('Card props= ',props);
    // console.log('Card props.link= ',props.link);
    // console.log('Card props.name= ',props.name);

    function handleCardClick() {
        props.onCardClick(props);
      }    


    return (
        <li className="cards__item">
            <div className="cards__pic" 
                 onClick={handleCardClick}
             >
                <img className="cards__img" 
                        data-popup="open-img__popup" 
                        src={props.link}
                        alt={props.name} /> 
                <button className="cards__trash hidden"></button>
            </div>
            <div className="cards__text">
                <h2 className="cards__title text-overflow">{props.name}</h2>
                <div>
                    <button className="cards__heart"></button>
                    <div className="cards__heart-counter">{props.likes.length}</div>
                </div>
            </div>
        </li>
    );
}

export default Card;