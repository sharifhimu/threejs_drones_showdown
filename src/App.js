import './App.css';
import { Canvas } from 'react-three-fiber'
import {   useState,  } from 'react'
import { Physics } from '@react-three/cannon';
import Orbit from './components/Orbit'
import Floor from './components/Floor'
import Background from './components/Background';
import Colorpicker from './components/Colorpicker';
import Cars from './components/Cars';
import CameraControls from './components/CameraControls';
import Buttons from './components/Buttons';
import { EffectComposer, DepthOfField, Bloom  } from '@react-three/postprocessing'
import Lights from './components/Lights';

function App() {

  const [controlOrbitBydragger, setControlOrbitByDragger ] = useState(true)

  return (
      <div style={{ height: '100vh', width: '100vw', backgroundColor: 'black' }} >
        
        <Colorpicker />
        <Buttons />

        <Canvas 
        shadows={true} 
        camera={{ position: [2,10,5] }} 
        >
          
          <Lights/>
          <axesHelper  args={[5]} />
          <Orbit controlOrbitBydragger={controlOrbitBydragger} />
          <CameraControls />
          <Physics>
            <Cars  setControlOrbitByDragger={setControlOrbitByDragger} />
            <Floor  position={[0,0,0]} />
          </Physics>

          <EffectComposer>
              <DepthOfField 
                focusDistance={0} // where to focus
                focalLength={0.05} // focal length
                bokehScale={2} // bokeh size
                height={1000} 
              />
               <Bloom 
               luminanceThreshold={.3}
               luminanceSmoothing={0.9} 
               height={300} 
               />
          </EffectComposer>

          <Background />


        </Canvas>
      </div>
  );
}

export default App;
