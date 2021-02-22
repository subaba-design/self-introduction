import React from "react";
import "./Contact.css";
import Background from "../../images/calm-sea-wallpaper-picjumbo-com.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        color: 'rgb(231, 75, 18)',
        borderColor: 'rgb(231, 75, 18)'
      },
    },
    second: {
        '& > *': {
          margin: theme.spacing(1),
          color: 'rgb(231, 75, 18)',
          borderColor: 'rgb(231, 75, 18)'
        },
      },
  }));

const Contact = () => {
    const classes = useStyles();

    return (
        <div className="Contact">
            <img src={ Background } className="contact-background"/>
            <h1 className="contact-title">Contact</h1>
            <div className="contact-across-line"></div>
            <div className="contact-background-element">
                <div className="contact-adress">
                    <p>f.m.11404@gmail.com</p>
                    <div></div>
                </div>
                <h2 className="contact-sub-title">and more info...</h2>
                <ul className="contact-link-list">
                <li className={classes.second}>
                    <Button>
                        Twitter
                    </Button>
                </li>
                <li className={classes.second}>
                    <Button>
                        Blog
                    </Button>
                </li>
                <li className={classes.second}>
                    <Button>
                        Qiita
                    </Button>
                </li>
                <li className={classes.second}>
                    <Button>
                        GitHub
                    </Button>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default Contact;