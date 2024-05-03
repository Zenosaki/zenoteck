import AbtImg from '../assets/imgs/About_Me/about2.png';


export default function Section4(){
  return(
    <div id='AboutMe' className="Section4_Container">
        <img width={1000} src={AbtImg} alt="image" />
       <div className="About_Text">
        <h1><span>A</span>bout Me:</h1>
        <p>Hello! My name is Arselin Chaabanie, and Im passionate about front-end development. I was born on November 23, 2006, and I currently attend high school at Khasnadar. Living at 3 Biss Rue Hannibal, Ive always been fascinated by technology and its potential to create meaningful experiences on the web. As a front-end developer, I enjoy crafting user-friendly interfaces and bringing designs to life through code. Im skilled in HTML, CSS, and JavaScript, and I love staying up-to-date with the latest trends and technologies in the field. In my free time, youll often find me experimenting with new coding techniques, working on personal projects, or exploring the ever-evolving world of web development. Im excited to continue honing my skills and making a positive impact through my work in the tech industry.</p>
        <h1 className='conc'>(I hate Tunisien System)</h1>
       </div>
    </div>
  )
}