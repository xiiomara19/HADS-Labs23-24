import './styles/App.css';

function Info({ onClose }) {
  return (
    <div class="App-page">
      <div class="App-title">
        About
        <button class="App-button-close" onClick={onClose}>
        ✖
        </button>
      </div>
      <div class="App-about">
        <p>You get 9 tries to guess a target word.</p>
        <hr></hr>
        <p>Our game is....</p>
        <hr></hr>
      </div>
    </div>
  );
}

export default Info;