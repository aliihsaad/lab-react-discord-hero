// src/App.jsx
import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import discordBackground from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={discordLogo} alt="Discord Logo" className="navbar-logo" />
        <ul className="navbar-links">
          <li><a href="#">Download</a></li>
          <li><a href="#">Nitro</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Safety</a></li>
          <li><a href="#">Quests</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
          <li><a herf="#" className="navbar-login">Login</a></li>
        </ul>
        <img src={menuIcon} alt="Menu" className="navbar-menu-icon" />
      </nav>
      <main className="hero">
        <div className="hero-content">
           <h1 className="hero-title">IMAGINE A PLACE...</h1>
           <p className="hero-description">
            ...where you can belong to a school club, a gaming group, or a worldwide
            art community. Where just you and a handful of friends can spend time
            together. A place that makes it easy to talk every day and hang out
            more often.
           </p>
           
           <div className="hero-buttons">
            <a href="#" className="btn btn-dark">Download for Mac</a>
            <a href="#" className="btn btn-white">Open Discord in your browser</a>
           </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={discordBackground} alt="Discord illustration" className="hero-image" />
        </div>
      </main>
    </div>
  );
}

export default App
