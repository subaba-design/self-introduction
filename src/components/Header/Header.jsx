import React          from 'react';
import Drawer         from '@material-ui/core/Drawer';
import List           from '@material-ui/core/List';
import Divider        from '@material-ui/core/Divider';
import ListItem       from '@material-ui/core/ListItem';
import ListItemText   from '@material-ui/core/ListItemText';
import GrainIcon      from '@material-ui/icons/Grain';
import                     './Header.css';
import                     './Header.res.css';

import { Link } from "react-router-dom";

const Header = (props) => {
    const LEFT = 'left';

    const MENU_Home     = 'Home';
    const MENU_About    = 'About';
    const MENU_Passion  = 'Passion';
    const MENU_Strength = 'Strength';
    const MENU_Contact  = 'Contact';
    const LINK_Twitter  = 'Twitter';
    const LINK_Blog     = 'Blog';
    const LINK_Qiita    = 'Qiita';
    const LINK_GitHub   = 'GitHub';
    
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (open) => (event) => {
        // なぜかこれが無いとエラーが出る
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [LEFT]: open });
    };

    const list = () => (
        <div
            className="header-list" 
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span className="header-list-item">
                        <ListItem button key={MENU_Home}>
                            <ListItemText primary={MENU_Home} />
                        </ListItem>
                    </span>
                </Link>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                    <span className="header-list-item">
                        <ListItem button key={MENU_About}>
                            <ListItemText primary={MENU_About} />
                        </ListItem>
                    </span>
                </Link>
                <Link to='/passion' style={{ textDecoration: 'none' }}>
                    <span className="header-list-item">
                        <ListItem button key={MENU_Passion}>
                            <ListItemText primary={MENU_Passion} />
                        </ListItem>
                    </span>
                </Link>
                <Link to='/strength' style={{ textDecoration: 'none' }}>
                    <span className="header-list-item"> 
                        <ListItem button key={MENU_Strength}>
                            <ListItemText primary={MENU_Strength} />
                        </ListItem>
                    </span>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <span className="header-list-item"> 
                        <ListItem button key={MENU_Contact}>
                            <ListItemText primary={MENU_Contact} />
                        </ListItem>
                    </span>
                </Link>
            </List>
            <Divider />
            <List>
                <a href="https://twitter.com/yopipo415" className="header-list-item">
                    <ListItem button key={LINK_Twitter}>
                        <ListItemText primary={LINK_Twitter} />
                    </ListItem>
                </a>
                <a href="https://let-there-be-magic.com/" className="header-list-item">
                    <ListItem button key={LINK_Blog}>
                        <ListItemText primary={LINK_Blog} />
                    </ListItem>
                </a>
                <a href="https://qiita.com/Yopipo415" className="header-list-item">
                    <ListItem button key={LINK_Qiita}>
                        <ListItemText primary={LINK_Qiita} />
                    </ListItem>
                </a>
                <a href="https://github.com/Yopipo415" className="header-list-item">
                    <ListItem button key={LINK_GitHub}>
                        <ListItemText primary={LINK_GitHub} />
                    </ListItem>
                </a>
            </List>
        </div>
    );

    return (
        <div>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h1 className="header-logo" style={{ color: props.COLOR }}>Against All Odds</h1>
            </Link>
            <p className="header-menu-button" style={{ color: props.COLOR }}>
                <GrainIcon style={{ fontSize: 30 }} onClick={toggleDrawer(true)}/>
            </p>
            <Drawer open={state[LEFT]} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </div>
    );
};

export default Header;
