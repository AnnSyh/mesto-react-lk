import React from 'react';
import '../components/App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Card from './Card';
import api from  '../utils/api';

function App() {
  //сохраняем ссылку на картинку вводимую в input(это для формы добавления эл-та)
  const [pictureLink, setPictureLink] = React.useState('https://cdn.fishki.net/upload/post/2021/02/02/3586907/tn/8-11.jpg');

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false)
  const [isConfirmPopupOpen, setisConfirmPopupOpen] = React.useState(false)
  const [isImagePopupOpen, setisImagePopupOpen] = React.useState(false)

  const handleEditAvatarClick = () => { 
    setIsEditAvatarPopupOpen(true)
   }
   const handleAddPlaceClick = () => {
     setisAddPlacePopupOpen(true)
   }
  const handleEditProfileClick = () => { 
    setisEditProfilePopupOpen(true)
  }
  const handleConfirmClick = () => { 
    setisConfirmPopupOpen(true)
  }
  const handleImagePopupOpen = () => { 
    setisImagePopupOpen(true)
  }

  const [selectedCard, setSelectedCard] = React.useState({}); 
  const handleCardClick = (card) => {
    setSelectedCard(card)
    setisImagePopupOpen(true)
    // document.querySelector('.open-img__popup').classList.add('popup_opened');
  };

  const closeAllPopups = () => {
    // console.log('closeAllPopups');
    setisAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisConfirmPopupOpen(false);
    setisImagePopupOpen(false);
  };


  const [cards , setCards ] = React.useState([]);

  React.useEffect(() => {

    api.getInitialCards()
      .then((cards) => {
          // console.log('cards = ',cards)
          setCards(cards);
      })
      .catch((err) => console.log(err));

  }, []);


  return (
    <>
      <Header />
      <main className="content">
        <Main  handleEditAvatarClick={handleEditAvatarClick}
                  handleEditProfileClick={handleEditProfileClick}
                  handleAddPlaceClick={handleAddPlaceClick}
                  handleConfirmClick={handleConfirmClick}
                  handleImagePopupOpen={handleImagePopupOpen}
        />

        <section className="cards section content__section ">
          <div className="list-template-inner">
          <ul className="cards__list list-template-place">
              {cards.map(({ id, ...card }) => {
                  return (
                    <Card   key={card._id} 
                            handleCardClick={() => handleCardClick(card)} 
                            {...card} 
                    />
                        );
              })}
          </ul>
          </div>
        </section>
      </main>

      <Footer />

      {setSelectedCard ? <ImagePopup onClose={closeAllPopups} 
                                   isOpen={isImagePopupOpen} 
                                   name={selectedCard.name} 
                                   link={selectedCard.link}/> : null}

{/* попап Редактировать профиль */}
      <PopupWithForm  onClose={closeAllPopups} 
                      isOpen={isEditProfilePopupOpen}  
                      title={'Редактировать профиль'} 
                      name={'edit-profile'} 
      >
        <div className="form__field">
          <input placeholder="Имя" id="user-title" className="popup__input popup__input_user-title" name="title" required="" minLength="2" maxLength="40" /> 
          <span className="popup__input-error user-title-error"></span>
        </div>
        <div className="form__field">
          <input placeholder="О себе" id="user-subtitle" className="popup__input popup__input_user-subtitle" name="subtitle" required="" minLength="2" maxLength="200" /> 
          <span className="popup__input-error user-subtitle-error"></span>
        </div>
      </PopupWithForm>

{/* попап добавления карточки       */}
      <PopupWithForm  onClose={closeAllPopups}
                      isOpen={isAddPlacePopupOpen}  
                      title={'Новое место'} 
                      name={'add-plaсe'}
      >
        <div className="form__field">
          <input placeholder="название" id="place-title-input" className="popup__input popup__input_plaсe-title" name="name" required="" minLength="2" maxLength="30" /> 
          <span className="popup__input-error place-title-input-error"></span>
          </div>
        <div className="form__field">
          <input placeholder="ссылка на картинку" id="plaсe-img-input" className="popup__input popup__input_plaсe-img" name="link" required="" type="url" /> 
          <span className="popup__input-error plaсe-img-input-error"></span>
        </div>
      </PopupWithForm>

{/* попап Обновить аватар       */}
      <PopupWithForm  onClose={closeAllPopups} 
                      isOpen={isEditAvatarPopupOpen} 
                      title={'Обновить аватар'} 
                      name={'new-avatar'}
      >
        <div className="form__field">
          <input placeholder="ссылка на изображение аватара" id="avatar-input" className="popup__input popup__input_avatar-img" name="avatar-src" required="" type="url" /> 
          <span className="popup__input-error plaсe-img-input-error"></span>
        </div>
      </PopupWithForm>

{/* попап с удалением карточки */}
      <PopupWithForm  onClose={closeAllPopups} 
                      isOpen={isConfirmPopupOpen}
                      title={'Вы уверены?'} 
                      name={'confirmation'}
      >
        <button className="popup__btn confirmation-btn" name="btn" type="submit" value="Согласиться">Да</button>
      </PopupWithForm>


    </>
  );
}

export default App;
