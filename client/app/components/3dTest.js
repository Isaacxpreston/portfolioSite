import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

class Simple extends React.Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    this.state = {
      cubeRotation: new THREE.Euler(),
    };

    this._onAnimate = () => {
      // we will get this callback every frame
      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        cubeRotation: new THREE.Euler(
          //this.state.cubeRotation.x,
          0,
          this.state.cubeRotation.y + 0.01,
          0
        ),
      });
    };
  }

  render() {
    const width = 100 //window.innerWidth; // canvas width
    const height = 100  //window.innerHeight; // canvas height

    return (
    <div
      style = {{
        border: '20px solid black',
        width: width,
        height: height
      }}
      onClick={() => {console.log("HEY")}}
    >
    <React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}
      onAnimate={this._onAnimate}
      alpha={true}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}
          position={this.cameraPosition}
        />
        <mesh
          rotation={this.state.cubeRotation}
        >
          <boxGeometry
            width={5}
            height={4}
            depth={0.5}
          />
          <meshBasicMaterial
            color={0x00ff00}
          />
        </mesh>
      </scene>
    </React3>
    </div>
    );
  }
}

// ReactDOM.render(<Simple/>, document.body);
export default Simple;