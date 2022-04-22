import React           from 'react';
import { makeStyles }  from '@material-ui/core/styles';
import Button          from '@material-ui/core/Button';
import Header          from '../Header/Header';
import BackgroundImage from '../../images/calm-sea-wallpaper-picjumbo-com.jpeg';
import                      './Contact.css';
import                      './Contact.res.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin     : theme.spacing(1),
            color      : 'rgb(231, 75, 18)',
            borderColor: 'rgb(231, 75, 18)'
        }
    }
}));

const Contact = () => {
    const classes = useStyles();

    return (
        <div>
            <Header COLOR='rgb(231, 75, 18)' />  
            <div className="contact-top-content"></div>
            <img src={ BackgroundImage } className="contact-background"/>
            <h1 className="contact-title">Contact</h1>
            <div className="contact-across-line"></div>
            <div className="contact-content">
                <div className="contact-adress">
                    <p>subaba199@gmail.com</p>
                </div>
                <h2 className="contact-sub-title">and more info...</h2>
                <ul className="contact-link-list">
                    <a href="https://twitter.com/subaba_design">
                        <li className={ classes.root }>
                            <Button>
                                Twitter
                            </Button>
                        </li>
                    </a>
                    <a href="https://subaba-design.com">
                        <li className={ classes.root }>
                            <Button>
                                Blog
                            </Button>
                        </li>
                    </a>
                    <a href="https://github.com/subaba-design">
                        <li className={ classes.root }>
                            <Button>
                                GitHub
                            </Button>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Contact;