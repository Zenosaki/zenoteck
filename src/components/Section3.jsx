import Card from './utils/Sec3_Cards';



export default function Section3(){
  return(
    <div id="Section3" className="Section3-container">
      <h1>Latest Languages</h1>
      <div className="Section3_Box">
        <Card 
        mainColor='hsl(27, 84%, 45%)'
        Language="Html"
        Description="Essential markup language defining web page structure and content."
        />
        <Card 
        mainColor='hsl(223, 70%, 54%)'
        Language="Css"
        Description="Style sheet language used to style and format HTML elements on web pages."
        />
        <Card 
        mainColor='hsl(60, 74%, 53%)'
        Language="JavaScript"
        Description="Dynamic scripting language enabling interactive web experiences and client-side functionality."
        />
        <Card 
        mainColor='hsl(120, 100%, 25%)'
        Language="Python"
        Description="High-level language known for its simplicity, readability, and versatility in web development."
        />
        <Card 
        mainColor='hsl(300, 100%, 25%)'
        Language="PhP"
        Description="Server-side scripting language commonly used for dynamic web page generation and web application development."
        />
        <Card 
        mainColor='hsl(0, 82%, 61%)'
        Language="Ruby"
        Description="Elegant language often paired with the Ruby on Rails framework, emphasizing convention over configuration in web development."
        />
        <Card 
        mainColor='hsl(180, 94%, 37%)'
        Language="Java"
        Description="Versatile language utilized for both front-end and back-end web development, known for its platform independence and scalability"
        />
        <Card 
        mainColor='hsl(350, 93%, 74%)'
        Language="Go"
        Description="Efficient language developed by Google, favored for its concurrency support and suitability for building scalable web applications."
        />
        <Card 
        mainColor='hsl(168, 52%, 48%)'
        Language="C#"
        Description="Microsoft's language commonly used for ASP.NET web development, offering strong typing and seamless integration with other Microsoft technologies."
        />
      </div>
    </div>
  )
}