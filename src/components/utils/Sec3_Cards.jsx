import PropTypes from 'prop-types';
import Page from '../../scripts/DataBase'

export default function Card(props) {
    let Output;
    const handleClick = () => {
      const language = props.Language;
      console.log(language);
  
      Page.forEach(page => {
        if (page.Title === language) {
          console.log(page.id);
        }
      });
      return Output
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
           <a href="Page.html">Join</a>
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
