import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import "@fontsource/montserrat";

const url = (name, wrap) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


function App() {

  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax pages={5}>

        {/* Background stars */}
        <ParallaxLayer
          speed={0}
          factor={5}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: 'white' }} />



        {/* 2048Racer */}
        <ParallaxLayer 
          speed={1}
          style={{ width: '50%', left: '0'}}>
            <div className="text-content">   
                <h1><a href="https://github.com/elliottyoon/2048Racer">2048 Racer</a></h1>
                <h2>React.js • Go • Websockets</h2>
                <h3>Web application that serves as a hub for various spinoffs of the popular game 2048. Allows users to test 2048 AI algorithms or race other users!</h3>
            </div>
        </ParallaxLayer>
        <ParallaxLayer 
          speed={0.2}>
            <div className="image-content">   
                <img src={require('./assets/2048-racer/2048-window-win.png')}
                  style={{width: '45%', marginLeft: '60%', borderRadius: '4px'}}
                />
            </div>
        </ParallaxLayer>
        <ParallaxLayer 
          speed={0.4}>
            <div className="image-content">   
                <img src={require('./assets/2048-racer/2048-mobile-lose.png')}
                  style={{width: '20%', marginLeft: '90%'
                }}
                />
            </div>
        </ParallaxLayer>
        <ParallaxLayer 
          speed={0.8}>
            <div className="image-content">   
                <img src={require('./assets/2048-racer/2048-mobile-win.png')}
                  style={{width: '30%', marginLeft: '70%', marginTop: '20%'}}
                />
            </div>
        </ParallaxLayer>
        

        {/* Pineapple Pics */}
        <ParallaxLayer 
          offset={1}
          style={{ width: '50%', left: '0'}}>
          <div className="text-content">   
                <h1><a href="https://github.com/elliottyoon/Pineapple-Pics">Pineapple Pics</a></h1>
                <h2>React.js • Flask • PostgreSQL</h2>
                <h3>Full-stack accessible Instagram clone built on a MVC design pattern with JWT user authentication, REST API endpoints, and Heroku cloud services.</h3>
          </div>
        </ParallaxLayer>
        <ParallaxLayer 
          speed={0.2}
          offset={1}>
            <div className="image-content">   
                <img src={require('./assets/pineapple-pics/pineapple-pics-window.png')}
                  style={{width: '50%', marginLeft: '80%', borderRadius: '4px'}}
                />
            </div>
        </ParallaxLayer>
        <ParallaxLayer 
          speed={0.8}
          offset={1}>
            <div className="image-content">   
                <img src={require('./assets/pineapple-pics/pineapple-pics-tablet.png')}
                  style={{width: '20%', marginLeft: '62%'}}
                />
            </div>
        </ParallaxLayer>
        <ParallaxLayer 
          speed={0.4}
          offset={1}>
            <div className="image-content">   
                <img src={require('./assets/pineapple-pics/pineapple-pics-mobile-login.png')}
                  style={{width: '15%', marginLeft: '90%', marginTop: '10%'
                }}
                />
            </div>
        </ParallaxLayer>
        
        
        {/* Clouds!! */}

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        {/* DS4A */}
        <ParallaxLayer
          offset={2}
          style={{ width: '50%', left: '0'}}>
          <div className="text-content"
            style={{ color: 'black' }}>   
                <h1><a href="https://github.com/elliottyoon/DS4A" style={{ color: 'black'}}>DS4A</a></h1>
                <h2>Python • SQL • Tableau</h2>
                <h3>Statistical analysis (correlation analysis, chi-squared tests, and regression models) on extracted timeseries aggregate data to analyze relationship between Amazon deforestation and socioeconomic health of Brazilian states</h3>
          </div>
        </ParallaxLayer>
        <ParallaxLayer 
          speed={0.9}
          offset={2}>
            <div className="image-content">   
                <img src={require('./assets/DS4A/DS4A-regression.png')}
                  style={{width: '50%', marginLeft: '55%'
                }}
                />
            </div>
        </ParallaxLayer>
        <ParallaxLayer 
          speed={1}
          offset={2}>
            <div className="image-content">   
                <img src={require('./assets/DS4A/DS4A-heatmap-large.png')}
                  style={{
                    width: '30%', 
                    marginLeft: '80%',
                    marginTop: '-10%',
                    boxShadow: '0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3)',
                  }}
                />
            </div>
        </ParallaxLayer>
        <ParallaxLayer 
          speed={0.8}
          offset={2}>
            <div className="image-content">   
                <img src={require('./assets/DS4A/DS4A-geoplot.png')}
                  style={{width: '20%', marginLeft: '90%', marginTop: '20%', borderRadius: '2px'}}
                />
            </div>
        </ParallaxLayer>

        {/* More Clouds! */}
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.3 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>
        
        <ParallaxLayer offset={3} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.6} speed={0.4} style={{ opacity: 0.3 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        {/* NU Ice Hockey */}
        <ParallaxLayer
          offset={3}
          style={{ width: '50%', left: '0'}}>
          <div className="text-content">   
                <h1><a href="https://twitter.com/nuicehockey">Northwestern Ice Hockey</a></h1>
                <h2>Canva • Pixlr </h2>
                <h3>Recruiting flyer distributed to prospective athletes at Northwestern University.</h3>
          </div>
        </ParallaxLayer>
        <ParallaxLayer 
          speed={0.9}
          offset={3}>
            <div className="image-content">   
                <img src={require('./assets/NUicehockey/flyer.png')}
                  style={{width: '50%', marginLeft: '55%'
                }}
                />
            </div>
        </ParallaxLayer>


        <ParallaxLayer offset={4} speed={0.3} style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h3>Made with 💜 by Elliott Yoon</h3>
        </ParallaxLayer>

      </Parallax>
    </div>

  );
}

export default App;
