import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
    root:{
            "& .MuiBottomNavigationAction-root": {
                midWidth: 0,
                maxWidth: 250
            },
            "& .MuiSvgIcon-root": {
                fill: "white",
                "&:hover":{
                fontSize:"2rem"
                }
            }
    },
})

const Footer = () => {

    const classes = useStyles()

    return (
        <React.Fragment>
            <BottomNavigation width="auto" style={{background: "rgb(29,29,29)"}}>
                <BottomNavigationAction
                    className={classes.root}
                    style={{padding: 0}}
                    icon={<FacebookIcon/>}
                />
                <BottomNavigationAction
                    className={classes.root}
                    style={{padding: 0}}
                    icon={<InstagramIcon/>}
                />
                <BottomNavigationAction
                    className={classes.root}
                    style={{padding: 0}}
                    icon={<LinkedInIcon/>}
                />
            </BottomNavigation>
        </React.Fragment>
    )
}

export default Footer
