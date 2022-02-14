import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPhone, faAngleDown, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div>
      <header className='header'>
        <div className="logo">
          <img src="https://thriveagency.com/files/new-thrive-logo-color-300.png" height="55" width="90" alt="logo-thrive" />
        </div>
        <div className="header-container">
          <ul>
            <li>Service<FontAwesomeIcon icon={faAngleDown} /></li>
            <li>Work<FontAwesomeIcon icon={faAngleDown} /></li>
            <li>About<FontAwesomeIcon icon={faAngleDown} /></li>
            <li>Resoucres<FontAwesomeIcon icon={faAngleDown} /></li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="contact-info">
          <ul>
            <li><FontAwesomeIcon icon={faPhone} /></li>
            <li>843-353-6383</li>
            <li><FontAwesomeIcon icon={faSearch} /></li></ul>
        </div>
      </header>


      <div className="body-section">
        <div className="background-img">



          <div className="body-tag">
          

            <h2 className="first-tag">Digital Marketing Services</h2>
            <h4 className="secound-tag">Grow Your Client Base With Data-Driven and Targeted Strategies
            </h4>
            <button className="button-img">GET MY FREE PROPOSAL</button>
          </div>


        </div>


      </div>
      <div className="arrows">
        <h3 className="home-link">HOME</h3><span className="icons"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
        <p>Digital Marketing Services</p>
      </div>

      <div className="social">

        <span>
          <h1>Google</h1>
          <p>100+ Reviews</p></span>
        <span>
          <h1>Faceook</h1>
          <p>50+ Reviews</p></span>
        <span>
          <h1>Clutch</h1>
          <p>30+ Reviews</p></span>

      </div>



    </div>
  );
}

export default App;
