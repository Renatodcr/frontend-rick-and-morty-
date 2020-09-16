import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/index';
import Body from './components/Body/index';
import Footer from './components/Footer/index';

function App() {
 /* useEffect(() => {
    setTimeout(() => {
      const carregando = document.querySelector('.carregando');
      carregando.classList.remove('ativo');
    }, 2000);
  }, []);*/

  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
