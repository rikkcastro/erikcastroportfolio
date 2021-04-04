import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

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
                        href="https://www.facebook.com/erik.castro.3551/"
                        add target="_blank" rel="noreferrer"
                    />
                    <BottomNavigationAction
                        className={classes.root}
                        style={{padding: 0}}
                        icon={<InstagramIcon/>}
                        href="https://www.instagram.com/rikkcastro/"
                        add target="_blank" rel="noreferrer"
                    />
                    <BottomNavigationAction
                        className={classes.root}
                        style={{padding: 0}}
                        icon={<LinkedInIcon/>}
                        href="https://www.linkedin.com/in/erik-julius-castro-692b8b18b/"
                        add target="_blank" rel="noreferrer"
                    />
            </BottomNavigation>
        </React.Fragment>
    )
}

export default Footer
