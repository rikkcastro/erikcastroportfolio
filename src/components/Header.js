import React from 'react'
import { makeStyles } from "@material-ui/core/styles" 
import Typed from 'react-typed';
import { Typography, Avatar, Grid, Box } from "@material-ui/core"
import avatar from "./../images/avatar1.jpg"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles(theme => ({
    avatar:{
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    }, 
    title:{
        color: "white",
        fontWeight: 600
    },
    subtitle:{
        color: "white",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex:1
    }
}))

const Header = () => {

const classes = useStyles()

    return (
        <React.Fragment>
            <Box className={classes.typedContainer}>
                <Zoom>
                    <Grid container justify="center">
                        <Avatar className={classes.avatar} src={avatar} alt="Erik Castro"/>
                    </Grid>
                </Zoom>
                <Fade>
                    <Typography className={classes.title} variant="h4">
                        <Typed 
                        strings={["Erik Castro"]} 
                        typeSpeed={90} />
                    </Typography>
                </Fade>
                <br/>
                    <Typography className={classes.subtitle} variant="h5">
                        <Typed
                        strings={["Web Design", "API Developer", "Full Stack Developer"]} 
                        typeSpeed={40}
                        backSpeed={60}
                        loop />
                    </Typography>
                
                
                
            </Box>
        </React.Fragment>
    )
}

export default Header
