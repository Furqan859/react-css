import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPhone, faAngleDown, faAngleDoubleRight,faCaretDown } from '@fortawesome/free-solid-svg-icons';
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
        <p className="digital">Digital Marketing Services</p>
      </div>


      

      <div className="carret-down"></div>

      <div className="line"></div>


      <div className="video-div">
      <p className="main-para">
      
      <p className="paragraph1">Thrive Internet Marketing Agency is a dynamic, versatile and full-service digital marketing agency that doesn’t rely on smoke and mirrors to attract new clients. Instead, Thrive trusts its own search engine optimization (SEO) and marketing skills to drive new customers to our website.</p>

    <p className="paragraph2">  We’re not a static company. We don’t limit ourselves to specific industries. Thrive has the experience and professionals to build a custom website and use multiple digital marketing services to assist any size company in any industry.</p>
    <p>Unlike so many other agencies that use glitz and glamor to close sales and then fail to execute, Thrive focuses on client relationships and results. We always deliver substance, not false promises, ensuring we maximize your budget, so you get the most return on investment (ROI).</p>
    <p>Our reviews and testimonials speak volumes. We earn your business every day with month-to-month contracts.</p>
    <p>Take a look below at the wide variety of digital marketing services Thrive offers. Contact us today to learn more about how we can help your business!</p>
      </p>
      
      <iframe className="video" src="https://www.youtube.com/embed/JBPmDzL-Xek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      </div>
      
      <div className="paragraph3">
      <span className="img-para"></span>
      <p>So many other agencies rely on a one-size-fits-all approach, many times offering you the same strategy and cookie-cutter website as your competitor down the street.</p>
      <p>Thrive works with you to produce customized internet marketing services and a plan that aligns with your unique business needs. We become an extension of your team, a partner that understands your market and goals, rather than just an agency that executes strategies blindly.</p>
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
        <p>30+ Reviews</p></span>``

    </div>

    </div>
  );
}

export default App;
