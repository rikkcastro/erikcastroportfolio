import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, ListItem, IconButton, Avatar, Divider, Box, List, ListItemIcon, ListItemText } from "@material-ui/core"
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons"
import { makeStyles } from '@material-ui/core/styles' 
import MobileRightMenuSlider from "@material-ui/core/Drawer"
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import avatar from "./../images/avatar1.jpg"
import Fade from 'react-reveal/Fade';
//Style
const useStyles = makeStyles (theme => ({
    menuSliderContainer: {
        width: 250,
        background: "rgb(21, 21, 21)",
        height:"100%",
        
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        marginTop: "2rem",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem:{
        color: "white",

    },
    avatarTitle:{
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        color: "white",
    }
}))


const menuItems = [
    {
        listIcon: <Home/>,
        listText:"Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText:"About",
        listPath: "/about"
    },
    {
        listIcon: <Apps/>,
        listText:"Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText:"Contacts",
        listPath: "/contacts"
    }
]


const Navbar = () => { 
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open })
    } ;
    const classes = useStyles();

    const sideList = slider => (
        <Box 
            className={classes.menuSliderContainer} 
            component="div"
            onClick={toggleSlider(slider, false)}>
                <Fade left>
                    <Avatar className={classes.avatar} src={avatar} alt="Rikk Castro"/>
                </Fade>
                <Divider/>
                    <List>
                        {menuItems.map((lsItem, key)=>(
                             <Fade left>
                                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                                    <ListItemIcon className={classes.listItem}>
                                        {lsItem.listIcon}
                                    </ListItemIcon>
                                    <ListItemText className={classes.listItem} primary={lsItem.listText }/>
                                </ListItem>
                             </Fade>
                            
                        ))}
    
                    </List>
            </Box>
    )

    return (
        <React.Fragment> 
            <Box component="nav">
                <AppBar position="static" style={{ background:"black"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <MenuSharpIcon style={{ color:"white"}}/>
                        </IconButton>    
                        <MobileRightMenuSlider 
                        anchor="left"
                        open={state.right}
                        onClose={toggleSlider("right", false)}>
                            {sideList("right")}
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    )
}

export default Navbar
