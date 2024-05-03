import Section1 from './components/Section1.jsx';
import Section2 from './components/Section2.jsx';
import Section3 from './components/Section3.jsx';
import Section4 from './components/Section4.jsx';


export default function App(){
  return(
    <div className="Content-Box">
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <footer>
        <ol>
          <li>ZenoTeck © 2024</li>
          <li>Privacy & Legal</li>
          <li>Programme Recalls</li>
          <li>Contact</li>
          <li>News</li>
          <li>Get Updates</li>
          <li>Locations</li>
        </ol>
      </footer>
    </div>
  )
}