import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../../services/api';

function Body() {
  const [dados, setDados] = useState([]);

  useEffect(() => {

    async function buscaDados() {
      try {
        const response = await api.get('/');

        setTimeout(() => {
          setDados(response.data);
          const carregando = document.querySelector('.carregando');
          carregando.classList.remove('ativo');
        }, 2000)

      } catch (error) {
        console.log(error);
      }
    }
    buscaDados();

  }, []);

  return (
    <div className="main">
      <div className="carregando ativo">
        <div class="textCarregar">
          <h1>Carregando</h1>
        </div>
      </div>
      <section className="container">
        <ul className="content">
          {dados.map((dado) => (
            <li key={dado.name} className="card">
              <div className="image">
                <img src={dado.image} alt="" />
              </div>
              <div className="description">
                <h2 className="name">{dado.name}</h2>
                <div className="boxInfo">
                  <h3>Status:</h3>
                  {dado.status === 'Alive' ? <p style={{ color: '#2e9244' }}>{dado.status}</p> :
                    dado.status === 'Dead' ? <p style={{ color: '#f00' }}>{dado.status}</p> :
                      <p style={{ color: '#555' }}>{dado.status}</p>}
                </div>
                <div className="boxInfo">
                  <h3>Gender:</h3>  <p>{dado.gender}</p>
                </div>
                <h3>Epsodies:</h3> <p>{dado.episode.map((item) => {
                  return item + ' | ';
                })}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Body;
