import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Box,
  PointLight,
  SpotLight,
  DirectionalLight,
  AmbientLight,
  Sphere
} from 'react-vr';

const colors = ['red','green','blue','white','yellow','purple','seashell','rebeccapurple','turquoise','tomato','teal','pink'];

class FireFlies extends React.Component {
  constructor() {
    super()
    this.state = {
      rotation: 200,
      translateX: Math.random() * 10,
      rotateY: Math.random() * 10,
      translateZ: -(Math.random() * 5)
    }
    this.lastUpdate = Date.now();
    this.rotate = this.rotate.bind(this);
  } 
  rotate() { 
    const now = Date.now(); 
    const delta = now - this.lastUpdate; 
    this.lastUpdate = now; 
    this.setState({ rotation: this.state.rotation + delta / 150 }); 
    this.frameHandle = requestAnimationFrame(this.rotate); 
  } 
  componentDidMount() {
    this.rotate();
  }
  render() {
      return (
        <Sphere 
            radius={0.2}
            widthSegments={10}
            heightSegments={6}
            lit={true}
            style={{
              color: this.props.color,
              transform: [
                {translateX:this.state.translateX},
                {translateZ: -(this.state.translateZ)},
                {rotateY: this.state.rotation}
              ]
            }}
          >
          <SpotLight 
            intensity={1} 
            style={{
              color: 'seashell',
              transform: [
                {translateY: 0},
                {rotateY: this.state.rotation}
              ]
            }}
          />
          </Sphere>
      )
  }
}


export default class first extends React.Component {
  makeFlies() {
    return colors.map((color,i) => <FireFlies color={color}/>)
  }
  render() {
    return (
      <View>
        {this.makeFlies()}

      </View>
    );
  }
};

AppRegistry.registerComponent('first', () => first);

