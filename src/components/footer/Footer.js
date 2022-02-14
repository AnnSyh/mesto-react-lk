import React from 'react';
// import arkhyz from 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
import arkhyz from '../../images/avatar.jpg';

function Footer() {

  return (
    <>
        <footer className="footer section page__footer">
            <p className="footer__copyright">©&nbsp;2021&nbsp;Mesto&nbsp;Russia</p>
        </footer>

        <div className="add-plaсe">
            <div className="popup add-plaсe__popup">
                <div className="popup__overlay"></div>
                <div className="popup__container">
                    <form className="form popup__form"
                        name="add-place"
                        noValidate>
                        <button className="popup__close popup__close_add-plaсe"
                            type="button"></button>
                        <h2 className="page-title popup__page-title  text-overflow">Новое место</h2>
                        <div className="form__field">
                            <input placeholder="название"
                                id="place-title-input"
                                className="popup__input popup__input_plaсe-title"
                                name="name"
                                type="text"
                                required
                                minLength="2"
                                maxLength="30" />
                            <span className="popup__input-error place-title-input-error"></span>
                        </div>
                        <div className="form__field">
                            <input placeholder="ссылка на картинку"
                                id="plaсe-img-input"
                                className="popup__input popup__input_plaсe-img"
                                name="link"
                                required
                                type="url" />
                            <span className="popup__input-error plaсe-img-input-error"></span>
                        </div>
                        <button className="popup__btn"
                            name="btn"
                            type="submit"
                            value="Сохранить">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>

        <div className="edit-profile">
            <div className="popup edit-profile__popup">
                <div className="popup__overlay"></div>
                <div className="popup__container">
                    <form className="form popup__form"
                        name="edit-profile"
                        noValidate>
                        <button className="popup__close popup__close_edit-profile"
                            type="button"></button>
                        <h2 className="page-title popup__page-title  text-overflow">Редактировать профиль</h2>
                        <div className="form__field">
                            <input placeholder="Имя"
                                id="user-title"
                                className="popup__input popup__input_user-title"
                                name="title"
                                required
                                minLength="2"
                                maxLength="40"
                                type="text" />
                            <span className="popup__input-error user-title-error"></span>
                        </div>
                        <div className="form__field">
                            <input placeholder="О себе"
                                id="user-subtitle"
                                className="popup__input popup__input_user-subtitle"
                                name="subtitle"
                                required
                                minLength="2"
                                maxLength="200"
                                type="text" />
                            <span className="popup__input-error user-subtitle-error"></span>
                        </div>
                        <button className="popup__btn"
                            name="btn"
                            type="submit"
                            value="Сохранить">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>

        <div className="open-img">
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
        </div>

        <div className="new-avatar">
            <div className="popup new-avatar__popup">
                <div className="popup__overlay"></div>
                <div className="popup__container">
                    <form className="form popup__form"
                        name="avatar"
                        noValidate>
                        <button className="popup__close popup__close_add-plaсe"
                            type="button"></button>
                        <h2 className="page-title popup__page-title  text-overflow">Обновить аватар</h2>
                        <div className="form__field">
                            <input placeholder="ссылка на изображение аватара"
                                id="avatar-input"
                                className="popup__input popup__input_avatar-img"
                                name="avatar-src"
                                required
                                type="url" />
                            <span className="popup__input-error plaсe-img-input-error"></span>
                        </div>
                        <button className="popup__btn submit-avatar-btn"
                            name="btn"
                            type="submit"
                            value="Сохранить">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>

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
