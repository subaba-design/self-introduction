import React           from "react";
import { makeStyles }  from '@material-ui/core/styles';
import Button          from '@material-ui/core/Button';
import BackgroundImage from "../../images/calm-sea-wallpaper-picjumbo-com.jpg";
import                      "./Contact.css";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            color: 'rgb(231, 75, 18)',
            borderColor: 'rgb(231, 75, 18)'
        }
    }
}));

const Contact = () => {
    const classes = useStyles();

    return (
        <div>
            <img src={ BackgroundImage } className="contact-background"/>
            <h1 className="contact-title">Contact</h1>
            <div className="contact-across-line"></div>
            <div className="contact-content">
                <div className="contact-adress">
                    <p>f.m.11404@gmail.com</p>
                </div>
                <h2 className="contact-sub-title">and more info...</h2>
                <ul className="contact-link-list">
                    <li className={ classes.root }>
                        <Button>
                            Twitter
                        </Button>
                    </li>
                    <li className={ classes.root }>
                        <Button>
                            Blog
                        </Button>
                    </li>
                    <li className={ classes.root }>
                        <Button>
                            Qiita
                        </Button>
                    </li>
                    <li className={ classes.root }>
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