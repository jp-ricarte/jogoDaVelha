import React, { useState } from 'react';
import './App.css';
import './index.css';

// import { Container } from './styles';

function App() {
  const [nome1, setNome1] = useState();
  const [nome2, setNome2] = useState();

  const [player, setPlayer] = useState(true);
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');
  const [valor4, setValor4] = useState('');
  const [valor5, setValor5] = useState('');
  const [valor6, setValor6] = useState('');
  const [valor7, setValor7] = useState('');
  const [valor8, setValor8] = useState('');
  const [valor9, setValor9] = useState('');

  const [start, setStart] = useState(false);

  // true == player 1
  // false == player 2

  function handleClick1() {
    if (valor1 === '') {
      setPlayer(!player);
      if (player) {
        setValor1('X');
      } else {
        setValor1('O');
      }
    }
  }
  function handleClick2() {
    if (valor2 === '') {
      setPlayer(!player);
      if (player) {
        setValor2('X');
      } else {
        setValor2('O');
      }
    }
  }
  function handleClick3() {
    if (valor3 === '') {
      setPlayer(!player);
      if (player) {
        setValor3('X');
      } else {
        setValor3('O');
      }
    }
  }
  function handleClick4() {
    if (valor4 === '') {
      setPlayer(!player);
      if (player) {
        setValor4('X');
      } else {
        setValor4('O');
      }
    }
  }
  function handleClick5() {
    if (valor5 === '') {
      setPlayer(!player);
      if (player) {
        setValor5('X');
      } else {
        setValor5('O');
      }
    }
  }
  function handleClick6() {
    if (valor6 === '') {
      setPlayer(!player);
      if (player) {
        setValor6('X');
      } else {
        setValor6('O');
      }
    }
  }
  function handleClick7() {
    if (valor7 === '') {
      setPlayer(!player);
      if (player) {
        setValor7('X');
      } else {
        setValor7('O');
      }
    }
  }
  function handleClick8() {
    if (valor8 === '') {
      setPlayer(!player);
      if (player) {
        setValor8('X');
      } else {
        setValor8('O');
      }
    }
  }
  function handleClick9() {
    if (valor9 === '') {
      setPlayer(!player);
      if (player) {
        setValor9('X');
      } else {
        setValor9('O');
      }
    }
  }
  function handleChange(e) {
    setNome1(e.target.value);
  }
  function handleChange2(e) {
    setNome2(e.target.value);
  }

  return (
    <div className="container">
      {start ? (
        <div className="jogo">
          <div className="player">
            <h1>Vez de jogar: {player ? nome1 : nome2}</h1>
          </div>

          <table>
            <tbody>
              <tr>
                <td>
                  <button type="button" onClick={handleClick1}>
                    <h2>{valor1}</h2>
                  </button>
                </td>
                <td>
                  <button type="button" onClick={handleClick2}>
                    <h2>{valor2}</h2>
                  </button>
                </td>
                <td>
                  <button type="button" onClick={handleClick3}>
                    <h2>{valor3}</h2>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" onClick={handleClick4}>
                    <h2>{valor4}</h2>
                  </button>
                </td>
                <td>
                  <button type="button" onClick={handleClick5}>
                    <h2>{valor5}</h2>
                  </button>
                </td>
                <td>
                  <button type="button" onClick={handleClick6}>
                    <h2>{valor6}</h2>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" onClick={handleClick7}>
                    <h2>{valor7}</h2>
                  </button>
                </td>
                <td>
                  <button type="button" onClick={handleClick8}>
                    <h2>{valor8}</h2>
                  </button>
                </td>
                <td>
                  <button type="button" onClick={handleClick9}>
                    <h2>{valor9}</h2>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="head">
          <h1>Jogo da velha</h1>
          <form>
            <div>
              <p>Nome do player 1</p>
              <input type="text" onChange={handleChange} />
              <p>Nome do player 2</p>
              <input onChange={handleChange2} type="text" />
              <button
                onClick={() => setStart(true)}
                className="btn-start"
                type="submit"
              >
                COMEÇAR!
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
