import { useMemo } from "react";
import { useThree, useLoader } from "react-three-fiber"
import * as THREE from 'three';


const Background = () => {

    const { gl } = useThree()
    const texture = useLoader(THREE.TextureLoader, process.env.PUBLIC_URL + '/equrectengular4.jpg')

    const formatted = useMemo(() => 
        new THREE.WebGLCubeRenderTarget(
        texture.image.height
      ).fromEquirectangularTexture(gl, texture)
    , [])
    

    // console.log('formatted ', formatted );

    return(
      <primitive 
        object={formatted.texture}
        attach='background'
      />
    )
}

export default Background;