import React          from 'react';
import clsx           from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer         from '@material-ui/core/Drawer';
import Button         from '@material-ui/core/Button';
import List           from '@material-ui/core/List';
import Divider        from '@material-ui/core/Divider';
import ListItem       from '@material-ui/core/ListItem';
import ListItemText   from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
    list: {
        width: 250,
    }
});

const Header = () => {
    const LEFT = 'left';
    const TEXT_1 = 'てきすと';
    const TEXT_2 = 'テキスト';

    const classes = useStyles();
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
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button key={TEXT_1}>
                    <ListItemText primary={TEXT_1} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key={TEXT_2}>
                    <ListItemText primary={TEXT_2} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>{LEFT}</Button>
            <Drawer open={state[LEFT]} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </div>
    );
};

export default Header;
