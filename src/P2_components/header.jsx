import Logo from '../assets/imgs/logo-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';
import {faKey} from '@fortawesome/free-solid-svg-icons';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import IntroBox from './components/introBox';

export default function header(){
  return(
    <div className="Page2_Container">
      <div className="Header2_Container">
       <div className="left-content">
         <img src={Logo} alt="logo" />
         <h1><a href="index.html">Zeno<span>Teck</span></a></h1>
       </div>
       <div className="right_content">
       <ol>
          <li><a href="#Section3"><FontAwesomeIcon className='icon' icon={faKey} />Tutoriels</a></li>
          <li><a href="#Section3"><FontAwesomeIcon className='icon' icon={faDumbbell} />Exercices</a></li>
          <li><a href="#AboutMe"><FontAwesomeIcon className='icon' icon={faCamera} />Lives</a></li>
          <li className='user-icon'><a href="#" className='user-line'><FontAwesomeIcon className='User'  icon={faUser}/></a></li>
          </ol>
       </div>
      </div>
      <IntroBox/>
    </div>
  )
}