import './App.css';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./profile.png' className="App-logo" alt="logo" />
        <header 
          className="App-icons" >
        <a
          className='App-icon'
          href="https://github.com/cormac-doyle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className='App-icon'
          href="https://www.instagram.com/cormacdoyle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram/>
        </a>
        <a
          className='App-icon'
          href="https://www.linkedin.com/in/cormac--doyle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin/>
        </a>
        </header>
        
        
        
      </header>
    </div>
  );
}

export default App;
