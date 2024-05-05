import PropTypes from 'prop-types';
import Page from '../../DataBase/DataBase';
import P2 from '../../DataBase/P2_Props';

export default function Card(props) {
    const handleClick = () => {
      const language = props.Language;
      console.log(language);
  
      Page.forEach(page => {
        if (page.Title === language) {
          P2.Title= language;
          P2.Description= props.Description;
          console.log(page.lessons.l1);
        }
      });
      console.log(P2);
    };
  return (
    <div className="card-container">
      <div className="theCard" style={{ borderColor: props.mainColor }}>
        <div className="Font-Face">
          <h3 style={{ color: props.mainColor }}>{props.Language}</h3>
          <div className="Card_Description">
            <p>
              <span className="First_Letter" style={{ color: props.mainColor }}>
                D
              </span>
              escription:
            </p>
            <hr style={{ borderColor: props.mainColor }} />
          </div>
          <p>{props.Description}</p>
        </div>
        <div className="Back-Face">
          <h2>Learn now</h2>
          <button
            id="Data-Button"
            className="js-Button"
            style={{ backgroundColor: props.mainColor }}
            onClick={handleClick}
          >
           <a href="#">Join</a>
          </button>
        </div>
      </div>
    </div>
  );
}


Card.propTypes = {
  mainColor: PropTypes.string,
  Description: PropTypes.string,
  Language: PropTypes.string,
};
