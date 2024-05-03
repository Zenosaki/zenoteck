import mainVideo from '../assets/videos/main-bg-video.mp4';
import Logo from '../assets/imgs/logo-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faPenNib} from '@fortawesome/free-solid-svg-icons';
export default function Section1() {
  return (
    <div className="Section1-container">
      <div className="header">
        <div className="left-content">
          <img src={Logo} alt="logo" />
          <h1>Zeno<span>Teck</span></h1>
        </div>
        <div className="right-content">
          <ol>
            <li><a href="#Section3"><FontAwesomeIcon className='icon' icon={faEnvelope}/>Contact-Daddy</a></li>
            <li><a href="#Section3"><FontAwesomeIcon className='icon' icon={faSearch}/>Explore</a></li>
            <li><a href="#AboutMe"><FontAwesomeIcon className='icon' icon={faPenNib}/>About-Us</a></li>
            <li className='user-icon'><a href="#" className='user-line'><FontAwesomeIcon  icon={faUser}/>Signe-up/Log-in</a></li>
          </ol>
        </div>
      </div>
      <div className="video-background">
        <video className="VideoBackground" autoPlay loop muted playsInline>
          <source src={mainVideo} type="video/mp4" />
        </video>
      </div>
      <div className="section1-content">
        <h1 className='Section1-Title'>Learn the right Way</h1>
        <h3>Better Than Tunisian System</h3>
        <div className="section1-buttons">
          <button className='link-1'><a href="#">Learn more</a></button>
          <button className='link-2'><a href="#">Include me</a></button>
        </div>
      </div>
      <a href="#Section2" ><FontAwesomeIcon className='Jump-Button' icon={faChevronDown} /></a>
    </div>
  );
}
