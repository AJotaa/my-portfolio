import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  const options = {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#126464",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.9,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.5,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 2,
        direction: "top",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          size: 10,
          duration: 0.3,
          opacity: 1,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.7,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };
  // if (show) {
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        style={{ position: "absolute !important" }}
      />
    );
  // }
}
export default ParticlesBackground;
