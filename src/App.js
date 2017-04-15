import React, { Component } from 'react';
import logo from './assets/logo.svg';
import Parallax from 'react-springy-parallax'
import imagey from './assets/clients-main.svg'
import pBG from './assets/parallaxBackground.png'
import INAB2 from './assets/INAB2.png'
import BG from './assets/BG1.svg'
import Pic from './assets/Picture1.jpg'
import INAB_Grp from './assets/INAB_Group1.svg'


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
       width: '90%',
       display: 'flex', alignItems: 'center', justifyContent: 'space-between'
     },
     picImg: {
       borderRadius: '55px'
     },
     sectionDiv: {
       display: 'flex',
       width: '33%',
       height: '100%',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent:'center'
     },
     skillsDiv: {
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent:'center'
     },
     gridDiv: {
       margin: '5px'
     },
     phone: {
       width: '60%',
       height: '90%'
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
              <div style={{...styles.innerDiv, backgroundImage: `(uri:${BG})`}}>
                <div style={styles.sectionDiv}>
                  <h1>Resdan Logan</h1>
                  <img src={Pic} style={styles.picImg} className="pic1" alt="My-Picture"/>
                </div>
                <div style={styles.sectionDiv}>
                  <h2>About Me:</h2>
                </div>
                <div style={styles.sectionDiv}>
                  <h2>Skills:</h2>
                  <div style={styles.skillsDiv}>
                    <div style={styles.gridDiv}>
                      <p>Technologies:</p>
                    </div>
                    <div  style={styles.gridDiv}>
                      <p>React</p>
                      <p>Redux</p>
                      <p>React Native</p>
                      <p>React Native</p>
                    </div>
                    <div  style={styles.gridDiv}>
                      <p>Ruby</p>
                      <p>AJAX</p>
                      <p>JQuery</p>
                      <p>SCSS / SASS </p>
                    </div>
                  </div>
                  <div style={styles.skillsDiv}>
                    <div style={styles.gridDiv}>
                      <p>Softwares:</p>
                    </div>
                    <div  style={styles.gridDiv}>
                      <p>RESTful APIs</p>
                      <p>Adobe CC</p>
                      <p>Firebase</p>
                      <p>Xcode</p>
                    </div>
                    <div  style={styles.gridDiv}>
                      <p>Trello</p>
                      <p>SnapKit</p>
                      <p>GitHub</p>
                      <p>Postgres</p>
                    </div>
                  </div>
                </div>
              </div>
          </Parallax.Layer>

          <Parallax.Layer
              offset={1}
              speed={-0.1}
              style={styles.parallaxLayer}
              onClick={() => this.refs.parallax.scrollTo(2)}>
              <div style={{...styles.innerDiv, backgroundImage: `url(${BG})`, backgroundPosition: 'fixed', backgroundSize: 'cover'}}>
                <div style={styles.sectionDiv}>
                  <h1>INAB (BeerMe)</h1>
                </div>
                <div style={styles.sectionDiv}>
                  <img src={INAB2} style={styles.phone}/>
                </div>
                <div style={styles.sectionDiv}>
                  <p>Concept:</p>
                </div>
              </div>
          </Parallax.Layer>

          <Parallax.Layer
              offset={2}
              speed={0.5}
              style={styles.parallaxLayer}
              onClick={() => this.refs.parallax.scrollTo(3)}>
              <div style={{...styles.innerDiv, backgroundImage: `url(${BG})`, backgroundPosition: 'fixed', backgroundSize: 'cover'}}>
                <div style={styles.sectionDiv}>
                  <h1>GoTeam</h1>
                </div>
                <div style={styles.sectionDiv}>
                  <img src={INAB2} style={styles.phone}/>
                </div>
                <div style={styles.sectionDiv}>
                  <h2>Skills:</h2>
                  <div style={styles.skillsDiv}>
                    <div style={styles.gridDiv}>
                      <p>Technologies:</p>
                    </div>
                    <div  style={styles.gridDiv}>
                      <p>React</p>
                      <p>Redux</p>
                      <p>React Native</p>
                      <p>React Native</p>
                    </div>
                    <div  style={styles.gridDiv}>
                      <p>Ruby</p>
                      <p>AJAX</p>
                      <p>JQuery</p>
                      <p>SCSS / SASS </p>
                    </div>
                  </div>
                  <div style={styles.skillsDiv}>
                    <div style={styles.gridDiv}>
                      <p>Softwares:</p>
                    </div>
                    <div  style={styles.gridDiv}>
                      <p>RESTful APIs</p>
                      <p>Adobe CC</p>
                      <p>Firebase</p>
                      <p>Xcode</p>
                    </div>
                    <div  style={styles.gridDiv}>
                      <p>Trello</p>
                      <p>SnapKit</p>
                      <p>GitHub</p>
                      <p>Postgres</p>
                    </div>
                  </div>
                </div>
              </div>
          </Parallax.Layer>

          <Parallax.Layer
              offset={3}
              speed={0.5}
              style={styles.parallaxLayer}
              onClick={() => this.refs.parallax.scrollTo(0)}>
              <div style={{...styles.innerDiv, backgroundImage: `url(${BG})`, backgroundPosition: 'fixed', backgroundSize: '100% 100%'}}>
                <div style={styles.sectionDiv}>
                  <h1>Resdan Logan</h1>
                  <img src={Pic} style={styles.picImg} className="pic1" alt="My-Picture"/>
                </div>
                <div style={styles.sectionDiv}>
                  <h2>About Me:</h2>
                </div>
                <div style={styles.sectionDiv}>
                  <h2>Skills:</h2>
                  <div style={styles.skillsDiv}>
                    <div style={styles.gridDiv}>
                      <p>Technologies:</p>
                    </div>
                    <div  style={styles.gridDiv}>
                      <p>React</p>
                      <p>Redux</p>
                      <p>React Native</p>
                      <p>React Native</p>
                    </div>
                    <div  style={styles.gridDiv}>
                      <p>Ruby</p>
                      <p>AJAX</p>
                      <p>JQuery</p>
                      <p>SCSS / SASS </p>
                    </div>
                  </div>
                  <div style={styles.skillsDiv}>
                    <div style={styles.gridDiv}>
                      <p>Softwares:</p>
                    </div>
                    <div  style={styles.gridDiv}>
                      <p>RESTful APIs</p>
                      <p>Adobe CC</p>
                      <p>Firebase</p>
                      <p>Xcode</p>
                    </div>
                    <div  style={styles.gridDiv}>
                      <p>Trello</p>
                      <p>SnapKit</p>
                      <p>GitHub</p>
                      <p>Postgres</p>
                    </div>
                  </div>
                </div>
              </div>
          </Parallax.Layer>

      </Parallax>
    );
  }
}

export default App;
