import React, { Component } from 'react';
import logo from './assets/logo.svg';
import Parallax from 'react-springy-parallax'
import imagey from './assets/clients-main.svg'
import pBG from './assets/parallaxBackground.png'
import './App.css';

class App extends Component {
  render() {
    const styles = {
    parallax:{
      backgroundImage: `url(${pBG})`,
      backgroundSize: '100%'

      },
    parallaxLayer: {
       fontFamily: 'Menlo-Regular, Menlo, monospace',
       fontSize: 14,
       lineHeight: '10px',
       color: 'white',
       display: 'flex', alignItems: 'center', justifyContent: 'center'
     },
     innerDiv: {
       backgroundColor: 'yellow',
       height: '80%',
       width: '80%'
     },
     textDiv: {

     },
     screenShotDiv: {

     }
  }
    return (
      <Parallax ref="parallax" pages={4} style={styles.parallax}>

          <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#576CA8' }} />
          <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#576CA8' }} />
          <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#0F4C5C' }} />
          <Parallax.Layer offset={3} speed={1} style={{ backgroundColor: '#DE3645' }} />


          <Parallax.Layer
              offset={0}
              speed={0.5}
              style={styles.parallaxLayer}
              onClick={() => this.refs.parallax.scrollTo(1)}>
              <div style={styles.innerDiv}>
                Writing Stuff here
              </div>
          </Parallax.Layer>

          <Parallax.Layer
              offset={1}
              speed={-0.1}
              style={styles.parallaxLayer}
              onClick={() => this.refs.parallax.scrollTo(2)}>
              <div style={styles.innerDiv}>
                Writing Stuff here
              </div>
          </Parallax.Layer>

          <Parallax.Layer
              offset={2}
              speed={0.5}
              style={styles.parallaxLayer}
              onClick={() => this.refs.parallax.scrollTo(3)}>
              <div style={styles.innerDiv}>Writing Stuff here</div>
          </Parallax.Layer>

          <Parallax.Layer
              offset={3}
              speed={0.5}
              style={styles.parallaxLayer}
              onClick={() => this.refs.parallax.scrollTo(0)}>
              <div style={styles.innerDiv}>Writing Stuff here</div>
          </Parallax.Layer>

      </Parallax>
    );
  }
}

export default App;
