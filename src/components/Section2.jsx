import s1 from '../assets/imgs/StepsImgs/1.png';
import arrow from '../assets/imgs/StepsImgs/arrow1.png';
import s2 from '../assets/imgs/StepsImgs/2.png';
import arrow2 from '../assets/imgs/StepsImgs/arrow2.png';
import s3 from '../assets/imgs/StepsImgs/3.png';
import s4 from '../assets/imgs/StepsImgs/4.png';


export default function Section2() {
  return (
    <div id='Section2' className="Section2-container">
      <div className='Title_Section2'>
        <h1>How It Works</h1>
      </div>
      <div className="margin-box">
        <div className="steps">
          <div className="step">
            <img src={s1}/>
          </div>
          <img src={arrow}/>
            <div className="step">
            <img src={s2}/>
          </div>
          <img src={arrow2}/>
          <div className="step">
            <img src={s3}/>
          </div>
          <img src={arrow}/>
          <div className="step">
            <img src={s4}/>
          </div>
        </div>
      </div>
    </div>
  );
}
