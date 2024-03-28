import "./App.css";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github-mark.png";

function App() {
  return (
    <div className="flex items-center justify-center h-screen mx-auto pl-24">
      <div className="grid grid-cols-2 grid-rows-2 gap-5 max-w h-128 mx-auto">
        <div className="text-left font-mono bg-green row-span-2 p-6 mx-auto rounded-xl shadow-2xl shadow-brown">
          <h1 className="text-4xl">&#60;Max /&#62;</h1>
          <h2 className="text-xl pb-2">Fullstack Web Developer</h2>
          <p>
            Hey! I'm Max. I'm an Irish developer based in belfast with a passion
            for creating elegent and functional web applications. I began my
            career in 2021 after graduating from the University of Ulster with a
            degree in Computing Science and becoming a developer for Kainos.
          </p>
          <br />
          <p>
            I am proficient in the MERN stack having experience with
            technologies such as Angular, React, Python, Java, and TypeScript.
            My full skillset including examples of my work can be found below.
          </p>
          <br />
          <p>
            I am currently seeking new opportunities to further my career in web
            development. If you are interested and wish to reach out, please
            reach out to me on linkedin.
          </p>
        </div>
        <div className="p-2 bg-green shadow-2xl w-80 h-80 relative overflow-hidden rounded-full">
          <img
            src="https://media.discordapp.net/attachments/655408439799054358/1222882884013002864/IMG_1053.jpg?ex=6617d56f&is=6605606f&hm=6110420059789e6848ccd1b63b8c417535cf07d5005e967c5d474503a1c1ccba&=&format=webp&width=714&height=1000"
            className="w-80 h-80 p-2 rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ></img>
        </div>
        <div className="bg-green w-80 h-42 p-6 max-w-sm rounded-xl shadow-2xl shadow-brown ">
          <div className="pt-16 flex items-center justify-around">
            <a href="https://www.linkedin.com/in/max-magill-a40686192/">
              <img src={linkedin} className="w-16 h-16" alt="linkedin"></img>
            </a>
            <a href="https://www.linkedin.com/in/max-magill-a40686192/">
              <img src={github} className="w-16 h-16" alt="github"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
