import './styles/App.css';

function Info({ onClose }) {
  const handleStartOver = () => {
    window.location.reload(); 
    onClose();
};
  return (
    <div className="App-page">
      <div className="App-title">
        Sobre
        <button className="App-button-close" onClick={handleStartOver}>
        ✖
        </button>
      </div>
      <div className="App-about">
        <p>Tienes 9 intentos para adivinar las 4 palabras propuestas.</p>
        <hr></hr>
        <table className="Game-rows">
          <tbody>
            <tr className="Row">
              <td className="Row-letter letter-elsewhere">A</td>
              <td className="Row-letter letter-elsewhere">R</td>
              <td className="Row-letter letter-correct">B</td>
              <td className="Row-letter letter-elsewhere">O</td>
              <td className="Row-letter letter-absent">L</td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <p><b className="letter-absent">L</b> no están en la solución.</p>
        <p>
          ¡<b className="letter-correct">B</b> es correcta! La tercera letras es la <b className="letter-correct">B</b>.
          <br></br>
          <b>(Puede haber más de una B en la palabra.)</b>
          </p>
        <p>
          <b className="letter-elsewhere">A</b>, <b className="letter-elsewhere">R</b> y <b className="letter-elsewhere">O</b> estan en otra posición de la palabra.
          <br></br>
          <b>(Y puede que mas de una vez. 🤔)</b>
          </p>
        <hr></hr>
        <table className="Game-rows">
          <tbody>
          <tr className="Row">
            <td className="Row-letter letter-correct">V</td>
            <td className="Row-letter letter-correct">O</td>
            <td className="Row-letter letter-absent">L</td>
            <td className="Row-letter letter-correct">A</td>
            <td className="Row-letter letter-correct">R</td>
            <td></td>
            <td> ¡Muy cerca!</td>
          </tr>
          </tbody>
        </table>
        <table className="Game-rows">
          <tbody>
          <tr className="Row">
            <td className="Row-letter letter-correct">V</td>
            <td className="Row-letter letter-correct">O</td>
            <td className="Row-letter letter-correct">T</td>
            <td className="Row-letter letter-correct">A</td>
            <td className="Row-letter letter-correct">R</td>
            <td></td>
            <td> ¡Ganaste!</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Info;