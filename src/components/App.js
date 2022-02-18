import React from 'react';
import '../components/App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Profile from './profile/Profile';
import PopupWithForm from './PopupWithForm/PopupWithForm';
import ImgPopup from './imgPopup/imgPopup';
import Card from './card/Card';

let cards = [
  {
    "id": "jaH3QF46gAY",
    "src": "https://images.unsplash.com/photo-1513326738677-b964603b136d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5NTI3OXwwfDF8c2VhcmNofDF8fFJ1c3NpYXxlbnwwfHx8fDE2NDQyNjQ3MDE&ixlib=rb-1.2.1&q=80&w=1080",
    "alt": "Saint Basil's Cathedral, Moscow, Russia",
    "title": "St. Basil’s Cathedral in Moscow",
    "subtitle": "Nikolay Vorobyev"
  },
  {
    "id": "L4jrg4c7928",
    "src": "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5NTI3OXwwfDF8c2VhcmNofDJ8fFJ1c3NpYXxlbnwwfHx8fDE2NDQyNjQ3MDE&ixlib=rb-1.2.1&q=80&w=1080",
    "alt": "brown and gray concrete building during daytime",
    "title": "Finally froze while looking for this shot, but it was worth it.",
    "subtitle": "Michael Parulava"
  },
  {
    "id": "lvJZhHOIJJ4",
    "src": "https://images.unsplash.com/photo-1520106212299-d99c443e4568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5NTI3OXwwfDF8c2VhcmNofDN8fFJ1c3NpYXxlbnwwfHx8fDE2NDQyNjQ3MDE&ixlib=rb-1.2.1&q=80&w=1080",
    "alt": "St. Basils Cathedral",
    "title": "Saint Basil’s Cathedral",
    "subtitle": "Nikita Karimov"
  },
];
const addCardToDB = data => {
  cards = [...cards, data];
}

function App() {
  //сохраняем ссылку на картинку вводимую в input(это для формы добавления эл-та)
  const [pictureLink, setPictureLink] = React.useState('https://cdn.fishki.net/upload/post/2021/02/02/3586907/tn/8-11.jpg');
  //устанавливаем нач набор карточек из массива
  const [cardData, setCardData] = React.useState(cards)

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false)
  const [isConfirmPopupOpen, setisConfirmPopupOpen] = React.useState(false)
  const [isImgPopupOpen, setisImgPopupOpen] = React.useState(false)

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
  const handleImgPopupOpen = () => { 
    setisImgPopupOpen(true)
  }

  const [selectedCard, setSelectedCard] = React.useState({}); 
  const handleCardClick = (card) => {
    setSelectedCard(card)
    setisImgPopupOpen(true)
    // document.querySelector('.open-img__popup').classList.add('popup_opened');
  };

  const closeAllPopups = () => {
    console.log('closeAllPopups');
    setisAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisConfirmPopupOpen(false);
    setisImgPopupOpen(false);
  };

  return (
    <>
      <Header />
      <main className="content">
        <Profile  handleEditAvatarClick={handleEditAvatarClick}
                  handleEditProfileClick={handleEditProfileClick}
                  handleAddPlaceClick={handleAddPlaceClick}
                  handleConfirmClick={handleConfirmClick}
                  handleImgPopupOpen={handleImgPopupOpen}
        />

        <section className="cards section content__section ">
          <div className="list-template-inner">
          <ul className="cards__list list-template-place">
              {cardData.map(({ id, ...card }) => {
                  return (
                    <Card  key={id} handleCardClick={() => handleCardClick(card)} {...card} />
                  );
              })}
          </ul>
          </div>
        </section>
      </main>

      <Footer />

      {setSelectedCard ? <ImgPopup onClose={closeAllPopups} 
                                   isOpen={isImgPopupOpen} 
                                   caption={selectedCard.alt} 
                                   src={selectedCard.src}/> : null}


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
