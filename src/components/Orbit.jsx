import {  useEffect } from 'react'
import { useThree, extend } from "react-three-fiber";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import state from '../State'


extend({ OrbitControls })

const CameraController = ({ controlOrbitBydragger }) => {
    const { camera, gl, scene } = useThree();
    useEffect(
       () => {
          const controls = new OrbitControls(camera, gl.domElement);
          controls.enabled = controlOrbitBydragger;
          // controls.update = state.shouldUpdate
          // console.log('orbit control scene ', scene );
          scene.orbitControls = controls
          return () => {
            controls.dispose();
          };
       },[camera, gl, controlOrbitBydragger,  ]);
    return null;
};

export default CameraController ;