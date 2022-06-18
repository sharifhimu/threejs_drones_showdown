


const Bulb = (props) => {
    return(
      <mesh {...props} >
        <pointLight 
        position={[0, 0, 2]} 
        castShadow   
        shadow-radius={15}
        />
        <sphereBufferGeometry args={[.5]} />
        <meshPhongMaterial emissive='red' />
      </mesh>
    )
}

export default Bulb;