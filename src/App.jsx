import React from 'react';
import './style.css';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer, BrightnessContrast } from '@react-three/postprocessing';
import Cyl from './Cyl.jsx';
import Home from './Components/Home.jsx';
import Nav from './Components/Nav.jsx';
import Circle from './Components/Circle.jsx';

const App = () => {
  return (
    <div className='relative h-full w-full'>
      <Canvas flat camera={{ fov: 30 }}>
        <ambientLight intensity={3.5} /> {/* Ambient light for base brightness */}
        <directionalLight position={[5, 5, 5]} intensity={1.5} /> {/* Directional light for contrast */}
        <Cyl />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={2.0} // Stronger bloom for highlights
            luminanceThreshold={0.25} // Lower threshold for broader effect
            luminanceSmoothing={0.8} // Smoothen bloom transition
          />
          <BrightnessContrast
            brightness={-0.1} // brightness. min: -1, max: 1
            contrast={0.2} // contrast: min -1, max: 1
          />
        </EffectComposer>
      </Canvas>
       <Nav />
       <Circle/>
        <Home />
    </div>
  );
};

export default App;
