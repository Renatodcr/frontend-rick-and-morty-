import React from 'react';
import './App.css';
import Header from './components/Header/index';
import Body from './components/Body/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
