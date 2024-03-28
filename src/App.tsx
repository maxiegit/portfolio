import "./App.css";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";

function App() {
  return (
    <div className="flex items-center justify-center h-screen mx-auto pl-24">
      <div className="grid grid-cols-2 grid-rows-2 gap-5 max-w h-128 mx-auto">
        <div className="text-left font-mono bg-green row-span-2 p-6 mx-auto rounded-xl shadow-2xl shadow-brown">
          <h1 className="text-4xl pb-4">&#60;Max /&#62;</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            iaculis id risus nec fermentum. Pellentesque placerat at enim
            suscipit porta. Donec nec ante quis ante bibendum tincidunt. In
            sapien lectus, dignissim eget varius a, auctor ut lacus. Nunc
            faucibus arcu nec massa tempor, eu imperdiet orci molestie. Nulla
            semper pulvinar elit ac lacinia. Vivamus mattis hendrerit congue.
            Aenean scelerisque volutpat enim in euismod. In rhoncus tristique
            fringilla. Sed vitae augue consectetur, sodales dolor ultrices,
            cursus nisi.
          </p>
        </div>
        <div className="p-2 bg-green shadow-2xl w-80 h-80 relative overflow-hidden rounded-full">
          <img
            src="https://media.discordapp.net/attachments/655408439799054358/1222882884013002864/IMG_1053.jpg?ex=6617d56f&is=6605606f&hm=6110420059789e6848ccd1b63b8c417535cf07d5005e967c5d474503a1c1ccba&=&format=webp&width=714&height=1000"
            className="w-80 h-80 p-2 rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ></img>
        </div>
        <div className="bg-green w-80 h-42 p-6 max-w-sm rounded-xl shadow-2xl shadow-brown ">
          <div className="flex items-center justify-between">
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
