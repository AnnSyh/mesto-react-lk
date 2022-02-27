import React from 'react';
import { useState, useEffect } from 'react';
import avatar from '../images/avatar.jpg';
import Button from './button';
import api from '../utils/api.js';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({
    handleEditAvatarClick,
    handleEditProfileClick,
    handleAddPlaceClick,
    handleCardClick,
    handleCardLike,
    handleCardDelete
}) {

    // Подписываемся на контекст CurrentUserContext
    const currentUser = React.useContext(CurrentUserContext);

    const [cards, setCards] = useState([]);

    useEffect(() => {

        api.getInitialCards()
            .then((cards) => {
                // console.log('cards = ',cards)
                setCards(cards);
            })
            .catch((err) => console.log(err));

    }, []);

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLike(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            });
    }

    function handleCardDelete(card) {
        console.log('handleDeleteClick');

        // Отправляем запрос в API и удаляем карточку 
        api.deleteCard(card._id)
            .then((newCard) => {
                setCards( (state) => state.filter((c) => c._id !== card._id));
            });
    }



    return (
        <>
            <section className="profile section content__section">
                <div className="profile__user">
                    <div className="profile__pic btn-avatar-edit">
                        <img className="profile__img"
                            src={`${currentUser.avatar}`}
                            alt="аватар" />
                        <Button title=""
                            btnClass="profile__btn profile__btn_user-edit profile__btn_avatar-edit  link-hover"
                            handleClick={handleEditAvatarClick} />
                    </div>

                    <div className="profile__info">
                        <div className="profile__edit">
                            <h1 className="profile__name text-overflow">{`${currentUser.name}`}</h1>

                            <Button title=""
                                btnClass="profile__btn profile__btn_user-edit btn-user-edit link-hover"
                                handleClick={handleEditProfileClick} />
                        </div>
                        <p className="profile__job text-overflow">{`${currentUser.about}`}</p>
                    </div>

                </div>

                <Button title="+"
                    btnClass="profile__btn profile__btn_user-add link-hover"
                    handleClick={handleAddPlaceClick} />
            </section>

            <section className="cards section content__section ">
                <div className="list-template-inner">
                    <ul className="cards__list list-template-place">
                        {cards.map((card) => {
                            return (
                                <Card key={card._id}
                                    handleCardClick={() => handleCardClick(card)}
                                    handleCardLike={() => handleCardLike(card)}
                                    handleCardDelete={() => handleCardDelete(card)}
                                    {...card}
                                />
                            );
                        })}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Main;
