import React           from 'react';
import { makeStyles }  from '@material-ui/core/styles';
import Button          from '@material-ui/core/Button';
import Header          from '../Header/Header';
import BackgroundImage from '../../images/pexels-pixabay-47349.jpeg';
import Image           from '../../images/S__30769154.jpeg';
import                      './About.css';
import                      './About.res.css';

const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      color      : 'deeppink',
      borderColor: 'deeppink',
      marginTop  : -375
    }
  }
}));

const About = (props) => {
    const classes = useStyles();

    return (
        <div className="About">
          <Header COLOR='deeppink' />  
          <img src={ BackgroundImage } className="about-background"/>
          <h1 className="about-title">About</h1>
          <div className="about-content">
              <div className="about-element">
                  <h2>深居 昌哉</h2>
                  <h3>Masaya Fukai</h3>
                  <p>
                      大阪府生まれ。9歳から４年間は沖縄で育つ。
                      大阪の高等学校卒業後、浪人受験をするも失敗。
                      実家から自立するために上京。
                      2020年12月にプログラミングの世界を知る。
                  </p>
                  <img src={ Image } className="about-image"/>
                  <div className="about-link-to-person">
                    <span className="about-link-to-person-sub-title">next...</span>
                    <p className={ classes.root }>
                      <Button variant="outlined" onClick={() => {
                        props.history.push('passion')
                      }}>Passion</Button>
                    </p>
                  </div>
              </div>
          </div>
        </div>
    );
}

export default About;