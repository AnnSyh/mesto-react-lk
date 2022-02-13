import React from 'react';
import '../components/App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import AppContainer from './AppContainer/AppContainer';

function App() {
  return (
    <>
      <Header />
      <AppContainer />
      <Footer />
    </>
  );
}

export default App;
