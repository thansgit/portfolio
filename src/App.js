
import './App.css';
import Navigation from './screens/navigationBar/NavigationBar'
import Particles from 'react-tsparticles';
import Header from './screens/header/Header';
import AboutMe from "./screens/aboutMe/AboutMe";
import Technologies from "./screens/technologies/Technologies";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Particles

        id="tsparticles"
        options={{
          fullScreen: {
            enable: false
          },
          background: {
            color: {
              value: 'rgb(34,36,23)',
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              // onHover: {
              //   enable: true,
              //   mode: "repulse",
              // },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffff5f",
              distance: 150,
              enable: true,
              opacity: 0.5,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
          },
        }}
      />

      <AboutMe />
      <Technologies />
    </div>
  );
}

export default App;
