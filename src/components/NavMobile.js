import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactsIcon from '@material-ui/icons/Contacts';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  listItemText: {
    textDecoration: 'none'
  }
});

export default function NavMobile({ user }) {
  const classes = useStyles();
  const [state, setState] = React.useState({ right: false });
  const [ { innerModal }, dispatch] = useStateValue()

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const closeModal = () => {
    if(innerModal) {
      dispatch({
        type: actionTypes.SET_INNER_MODAL,
        innerModal: false
      })
    }
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem  onClick={closeModal}>
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText>Hello, {user ? user?.email : 'Guest'}</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button onClick={closeModal}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText>HOME</ListItemText>
            </ListItem>
          </Link> 
          <Link to="/about-us" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button onClick={closeModal}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText>ABOUT US</ListItemText>
            </ListItem>
          </Link> 
          <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button onClick={closeModal}>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText>LOGIN</ListItemText>
            </ListItem>
          </Link> 
          <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button onClick={closeModal}>
            <ListItemIcon><ContactsIcon /></ListItemIcon>
              <ListItemText>CONTACT</ListItemText>
            </ListItem>
          </Link> 
       
      </List>
    </div>
  );

  return (
    <div>
        <IconButton onClick={toggleDrawer('right', true)}>
            <MenuIcon fontSize="large" style={{color: 'white'}} />
        </IconButton>
        <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
            {list('right')}
        </Drawer>
    </div>
  );
}
