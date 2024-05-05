import { useEffect, useState } from "react";
import Page from '../../DataBase/DataBase';


export default function IntroBox(){
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchDataFromLocalStorage = () => {
      const storedData = localStorage.getItem('currtitle');
      const Language = JSON.parse(storedData);
      
      console.log(storedData)
      if (storedData) {
  
        const currentData = Page.find(page => page.Language === Language );
        console.log(currentData);
        setData(currentData);
      }
    };

    // Call the function to fetch data from local storage
    fetchDataFromLocalStorage();
  }, []);
  
  return(
    <div className="IntroBox_Margin">
      <div className="introBox_Container">
        <div className="Box_Left">
          <h1>{data.Language}</h1>
          <div className="Card_Description">
            <p>
              <span className="First_Letter" style={{ color: 'white'}}>
                D
              </span>
              escription:
            </p>
            <hr style={{ borderColor: 'white'}} />
          </div>
          <p>{data.Description}</p>
        </div>
        <div className="Box_Right">
          <img src="#" alt="Image" />
        </div>
      </div>
    </div>
  )
}