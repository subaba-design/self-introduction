import React        from 'react';
import { Link }     from 'react-router-dom';
import Drawer       from '@material-ui/core/Drawer';
import List         from '@material-ui/core/List';
import Divider      from '@material-ui/core/Divider';
import ListItem     from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import GrainIcon    from '@material-ui/icons/Grain';
import                   './Header.css';
import                   './Header.res.css';

const Header = (props) => {
    const LEFT = 'left';
    
    const [state, setState] = React.useState({
        left         : false,
        MENU_Home    : 'Home',
        MENU_About   : 'About',
        MENU_Passion : 'Passion',
        MENU_Strength: 'Strength',
        MENU_Contact : 'Contact',
        LINK_Twitter : 'Twitter',
        LINK_Blog    : 'Blog',
        LINK_Qiita   : 'Qiita',
        LINK_GitHub  : 'GitHub'
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
                        <ListItem button key={ state.MENU_Home }>
                            <ListItemText primary={ state.MENU_Home } />
                        </ListItem>
                    </span>
                </Link>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                    <span className="header-list-item">
                        <ListItem button key={ state.MENU_About} >
                            <ListItemText primary={ state.MENU_About } />
                        </ListItem>
                    </span>
                </Link>
                <Link to='/passion' style={{ textDecoration: 'none' }}>
                    <span className="header-list-item">
                        <ListItem button key={ state.MENU_Passion }>
                            <ListItemText primary={ state.MENU_Passion } />
                        </ListItem>
                    </span>
                </Link>
                <Link to='/strength' style={{ textDecoration: 'none' }}>
                    <span className="header-list-item"> 
                        <ListItem button key={ state.MENU_Strength }>
                            <ListItemText primary={ state.MENU_Strength } />
                        </ListItem>
                    </span>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <span className="header-list-item"> 
                        <ListItem button key={ state.MENU_Contact }>
                            <ListItemText primary={ state.MENU_Contact } />
                        </ListItem>
                    </span>
                </Link>
            </List>
            <Divider />
            <List>
                <a href="https://twitter.com/yopipo415" className="header-list-item">
                    <ListItem button key={ state.LINK_Twitter }>
                        <ListItemText primary={ state.LINK_Twitter } />
                    </ListItem>
                </a>
                <a href="https://let-there-be-magic.com/" className="header-list-item">
                    <ListItem button key={ state.LINK_Blog }>
                        <ListItemText primary={ state.LINK_Blog } />
                    </ListItem>
                </a>
                <a href="https://qiita.com/Yopipo415" className="header-list-item">
                    <ListItem button key={ state.LINK_Qiita }>
                        <ListItemText primary={ state.LINK_Qiita } />
                    </ListItem>
                </a>
                <a href="https://github.com/fslm5415" className="header-list-item">
                    <ListItem button key={ state.LINK_GitHub }>
                        <ListItemText primary={ state.LINK_GitHub } />
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
