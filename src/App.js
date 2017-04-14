import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import Parallax from 'react-springy-parallax'
import imagey from '../assets/clients-main.svg'
import './App.css';

class App extends Component {
  render() {
    const styles = {
    parallax: {
       fontFamily: 'Menlo-Regular, Menlo, monospace',
       fontSize: 14,
       lineHeight: '10px',
       color: 'white',
       display: 'flex', alignItems: 'center', justifyContent: 'center'
     }
  }
    return (
      <Parallax ref="parallax" pages={4}>

          <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#576CA8' }} />
          <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#576CA8' }} />
          <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#0F4C5C' }} />
          <Parallax.Layer offset={3} speed={1} style={{ backgroundColor: '#DE3645' }} />


          <Parallax.Layer
              offset={0}
              speed={0.5}
              style={styles.parallax}
              onClick={() => this.refs.parallax.scrollTo(1)}>
              <div  styles={styles.innerDiv}>Writing Stuff here</div>
          </Parallax.Layer>

          <Parallax.Layer
              offset={1}
              speed={-0.1}
              style={styles.parallax}
              onClick={() => this.refs.parallax.scrollTo(2)}>
              <div  styles={styles.innerDiv}>Writing Stuff here</div>
          </Parallax.Layer>

          <Parallax.Layer
              offset={2}
              speed={0.5}
              style={styles.parallax}
              onClick={() => this.refs.parallax.scrollTo(3)}>
              <div  styles={styles.innerDiv}>Writing Stuff here</div>
          </Parallax.Layer>

          <Parallax.Layer
              offset={3}
              speed={0.5}
              style={styles}
              onClick={() => this.refs.parallax.scrollTo(0)}>
              <div  className='innerDiv'>Writing Stuff here</div>
          </Parallax.Layer>

      </Parallax>
    );
  }
}

export default App;
