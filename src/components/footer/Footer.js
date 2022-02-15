import React from 'react';
// import arkhyz from 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
import arkhyz from '../../images/avatar.jpg';

function Footer() {

  return (
    <>
        <footer className="footer section page__footer">
            <p className="footer__copyright">©&nbsp;2021&nbsp;Mesto&nbsp;Russia</p>
        </footer>
 

        {/* <div className="open-img">
            <div className="popup open-img__popup">
                <div className="popup__overlay"></div>
                <div className="popup__container">
                    <div className="popup__body">
                        <button className="popup__close popup__close-img"
                            type="button"></button>
                        <figure className="popup__figure">
                            <img className="popup__img"
                                src={arkhyz}
                                alt="Путешествия по России" />
                            <figcaption className="popup__caption">картинка не загрузилась</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>

        <div className="confirmation">
            <div className="popup confirmation__popup">
                <div className="popup__overlay"></div>
                <div className="popup__container">
                    <form className="form popup__form"
                        name="confirmation"
                        noValidate>
                        <button className="popup__close popup__close_add-plaсe"
                            type="button"></button>
                        <h2 className="page-title popup__page-title  text-overflow">Вы уверены?</h2>
                        <button className="popup__btn confirmation-btn"
                            name="btn"
                            type="submit"
                            value="Согласиться">Да</button>
                    </form>
                </div>
            </div>
        </div> */}


        <template className="list-template">
            <div className="list-template-inner">
                <ul className="cards__list"></ul>
            </div>
        </template>

        <template className="card-template">
            <li className="cards__item">
                <div className="cards__pic">
                    <img className="cards__img"
                        data-popup="open-img__popup"
                        src={arkhyz}
                        alt="картинка шаблона" />
                    <button className="cards__trash"></button>
                </div>
                <div className="cards__text">
                    <h2 className="cards__title text-overflow"></h2>
                    <div>

                        <button className="cards__heart"></button>
                        <div className="cards__heart-counter"></div>
                    </div>
                </div>
            </li>
        </template>

    </>

  );
}

export default Footer;
