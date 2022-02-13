import React from 'react';
import Profile from '../profile/Profile';
import Cards from '../cards/Cards';

function AppContainer() {
  return (
    <main className="content">
      <Profile />
      <Cards />
      {/* <section className="profile section content__section">
        111
      </section>
      <section className="cards section content__section">
        222
      </section> */}
    </main>
  );
}

export default AppContainer;
