import React from "react";
import "./About.css";
import Background from "../../images/pexels-pixabay-47349.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Image from "../../images/S__30769154.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        color: 'deeppink',
        borderColor: 'deeppink',
        marginTop: -375
      },
    },
    second: {
        '& > *': {
          margin: theme.spacing(1),
          color: 'deeppink',
          borderColor: 'deeppink'
        },
      },
  }));

const About = () => {
    const classes = useStyles();

    return (
        <div className="About">
            <img src={ Background } className="about-background"/>
            <h1 className="about-title">About</h1>
            <div className="about-background-element">
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
                    <div className="about-link-to-person"><span className="about-link-to-person-sub-title">more...</span>
                    <p className={classes.root}><Button variant="outlined">Person</Button></p></div>
                </div>
            </div>
        </div>
    );
}

export default About;