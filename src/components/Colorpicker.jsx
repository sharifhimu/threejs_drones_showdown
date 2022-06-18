import * as THREE from 'three';
import state from '../State'

const Colorpicker = () => {

    const colors = ['blue', 'black', 'red']

    const handleColor = color => {
      // console.log('color ', color);
      if( state.activeMesh?.material ){
        state.activeMesh.material.color = new THREE.Color(color)
      }
      else{
        const material = new THREE.MeshStandardMaterial( {
          color: new THREE.Color(color)
        });
        // material.color = color
        state.activeMesh.material = material
      }

    }

    return(
      <div style={{ position: 'absolute', zIndex: 1, display: 'flex' }}>
          {
            colors.map((x, i) => {
                return(
                    <div 
                    style={{ background: x, height: '30px', width: '30px', margin: '5px', cursor: 'pointer' }} 
                    onClick={() => handleColor(x)}
                    >
                    </div>
                )
            } )
          }
      </div>
    )
  }

  export default Colorpicker ;