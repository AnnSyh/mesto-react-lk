import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext';

import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  // --------------------------
  const [cards, setCards] = useState([]);

  useEffect(() => {

    api
      .getInitialCards()
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
    api
      .changeLike(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    console.log('handleDeleteClick');

    // Отправляем запрос в API и удаляем карточку 
    api
      .deleteCard(card._id)
      .then((newCard) => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(name, link) {
    console.log('handleAddPlaceSubmit');
    console.log('handleAddPlaceSubmit card = ', name);
    console.log('handleAddPlaceSubmit link = ', link);

    // Отправляем запрос в API и добавляем карточку 
    api
      .postCreateCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => console.log(err));
  }

  // --------------------------


  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUser()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(err));
  }, []);



  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
    componentDidMount()         //устанавливаем событие при нажатии клавиши Esc
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
    componentDidMount()         //устанавливаем событие при нажатии клавиши Esc
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
    componentDidMount()         //устанавливаем событие при нажатии клавиши Esc
  }
  const handleConfirmClick = () => {
    setIsConfirmPopupOpen(true)
    componentDidMount()         //устанавливаем событие при нажатии клавиши Esc
  }
  const handleImagePopupOpen = () => {
    setIsImagePopupOpen(true)
  }

  //открываем попап с картинкой
  const [selectedCard, setSelectedCard] = useState({});
  const handleCardClick = (card) => {
    setSelectedCard(card)       //передаем  данные карточки
    setIsImagePopupOpen(true)   //открываем попап скартинкой
    componentDidMount()         //устанавливаем событие при нажатии клавиши Esc
    // document.querySelector('.open-img__popup').classList.add('popup_opened');
  };

  //закрываем попап с картинкой
  const closeAllPopups = () => {
    // console.log('closeAllPopups');
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setIsImagePopupOpen(false);
    componentWillUnmount()  //снимаем событие при нажатии клавиши Esc
  };

  const onKeyDown = (evt) => {
    if (evt.key == "Escape") {
      // console.log('onKeyDown');
      closeAllPopups()
    }
  }
  const componentDidMount = () => {
    document.addEventListener('keydown', onKeyDown);
  }
  const componentWillUnmount = () => {
    document.removeEventListener('keydown', onKeyDown);
  }


  // Функция обновления пользователя 
  function handleUpdateUser(user) {
    api
      .postUser(user)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }
  // Функция обновления аватара 
  function handleUpdateAvatar(avatar) {

    console.log('avatar= ', avatar);

    api
      .postAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <main className="content">
        <Main
          handleEditAvatarClick={handleEditAvatarClick}
          handleEditProfileClick={handleEditProfileClick}
          handleAddPlaceClick={handleAddPlaceClick}
          handleConfirmClick={handleConfirmClick}
          handleImagePopupOpen={handleImagePopupOpen}
          handleCardClick={handleCardClick}

          cards={cards}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
        />
      </main>
      <Footer />
      {/* /попап для картинки карточки */}
      <ImagePopup onClose={closeAllPopups}
        isOpen={isImagePopupOpen}
        name={selectedCard.name}
        link={selectedCard.link}
      />
      {/* попап Редактировать профиль */}
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      {/* попап добавления карточки       */}
      <AddPlacePopup
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
        onAddPlace={handleAddPlaceSubmit}
      />
      {/* попап Обновить аватар       */}
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      {/* попап с удалением карточки */}
      <PopupWithForm onClose={closeAllPopups}
        isOpen={isConfirmPopupOpen}
        title={'Вы уверены?'}
        name={'confirmation'}
      >
        <button className="popup__btn confirmation-btn" name="btn" type="submit" value="Согласиться">Да</button>
      </PopupWithForm>

    </CurrentUserContext.Provider>
  );
}

export default App;
