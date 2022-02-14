import React from 'react';
import '../components/App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Profile from './profile/Profile';
import PopupWithForm from './PopupWithForm/PopupWithForm';
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
  const updateCards = () => {
    const data = {
      "id": "jaH3QF46gAY" + Math.random(),
      "src": pictureLink,
      "alt": "Some picture",
      "title": "Some picture",
      "subtitle": "Anonymous"
    }
    addCardToDB(data)
    setCardData(cards)
  }

  const handleEditAvatarClick = () => {
    document.querySelector('.new-avatar__popup').classList.add('popup_opened');
   }
 const handleEditProfileClick = () => {
    document.querySelector('.edit-profile__popup').classList.add('popup_opened');
   }
 const handleAddPlaceClick = () => {
    document.querySelector('.add-plaсe__popup').classList.add('popup_opened');
   }

  return (
    <>
      <Header />
      <main className="content">
          <Profile handleEditAvatarClick={handleEditAvatarClick}
                    handleEditProfileClick={handleEditProfileClick}
                    handleAddPlaceClick={handleAddPlaceClick}
          
          />

          <section className="cards section content__section ">
            <div className="list-template-inner">
                <ul className="cards__list list-template-place">

                  { cardData.map(({ id, ...props }) => <Card key={id} {...props} />) }

                </ul>
            </div>
          </section>
      </main>

      <Footer />

      <PopupWithForm></PopupWithForm>

    </>
  );
}

export default App;
