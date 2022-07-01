import './App.css';
import {FaGithub, FaLinkedin, FaInstagram, FaArrowCircleDown} from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to my Personal Portfolio</h1>
        <img src='./profile.png' className="App-profile" />
        
        <header 
          className="App-icons" >
            <a
              className='App-icon'
              href="https://github.com/cormac-doyle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub/>
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

        <FaArrowCircleDown/>
      </header>
    </div>
  );
}



export default App;
