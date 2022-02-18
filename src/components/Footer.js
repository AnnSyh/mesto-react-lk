import React from 'react';
import arkhyz from '../images/avatar.jpg';

function Footer() {

  return (
    <>
        <footer className="footer section page__footer">
            <p className="footer__copyright">©&nbsp;2021&nbsp;Mesto&nbsp;Russia</p>
        </footer>

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
