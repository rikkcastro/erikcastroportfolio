import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core/'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const useStyles = makeStyles( theme => ({
    mainContainer:{
        background: "rgb(25,25,25)",
        color:"white",
        fontFamily: "Helvetica"
    },
    containerTitle:{
        padding:"3rem 0",
        textTransform: "uppercase",
        fontWeight: 600,
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid white",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid black",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "white white transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "black"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent white white"
            }
        }
    },
    timeLineYear: {
        fontWeight: 500,
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "rgb(31,31,31)",
        color: "white",
        lineHeight:1,
        padding: "0.5rem 0 1rem",
        "&:before":{
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)":{
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    subHeading: {
        color:"white",
        padding: "0",
        textTransform:"Uppercase"
    }
}))

const Resume = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Box components="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.containerTitle}>
                    <Slide top>
                        About
                    </Slide>
                </Typography>
                <Box component ="div" className={classes.timeLine}>
                    
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        <Zoom>
                            2015
                        </Zoom> 
                    </Typography>
                    
                    <Box component="div" className={classes.timeLineItem}>
                        <Fade left>
                            <Typography variant="h5" align="left" className={classes.subHeading}>
                                Adamson University: Gettin Started
                            </Typography>
                            <Typography variant="body1" align="left">
                                College Degree
                            </Typography>
                            <Typography variant="caption" align="justify">
                                Took up the program Bachelor of Schience Information Technology.
                                Got introduced to fundamentals of programming. Several programming language has been discussed in different courses
                                such as C++, C#, Java, php, HTML CSS and experienced using it in lots of class projects in major courses. 
                                IDEs, enterprise database systems and few other development tools also been discussed. BASICS of Programming OBTAINED
                            </Typography>
                        </Fade>
                    </Box>
                
                
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    <Zoom>
                        2018
                    </Zoom>
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                    <Fade right>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            Adamson University: Main Capstone
                        </Typography>
                        <Typography variant="body1" align="left">
                            Initial experience developing an App
                        </Typography>
                        <Typography variant="caption" align="center">
                            First large scale project development experience, from research to analyzation of data to development to testing the system and into implementing it. 
                            Experienced lots of coding, debugging and configuration, figured out how frontend, backend, data storage operate in a single project, few frameworks
                            also used. Failed few capstone defense but eventually completed it making it 100% working and attain the objectives. C# WINDOWS FORM DEVELOPMENT SKILL OBTAINED
                        </Typography>
                    </Fade>
                    </Box>
                
                    
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    <Zoom>
                        2020
                    </Zoom> 
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                    <Fade left>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            Zuitt.co
                        </Typography>
                        <Typography variant="body1" align="left">
                            Next phase to pursue a career in App Development
                        </Typography>
                        <Typography variant="caption" align="center">
                            Fast-paced training that took only one month and a half.
                            3 capstone project were completed in the duration of the training, 
                            acquired lots of skill that a web developer need.
                            More undertanding in building block of codes, separation of concern 
                            and maintaning the best practices when it comes to development. MERN STACK WEB DEVELOPMENT SKILL OBTAINED
                        </Typography>
                    </Fade>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    <Zoom>
                        2021
                    </Zoom>
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Fade right>
                            <Typography variant="h5" align="left" className={classes.subHeading}>
                                Self-Training 
                            </Typography>
                            <Typography variant="body1" align="left">
                                Continuous learning without any associates but the Resources on the Internet
                            </Typography>
                            <Typography variant="caption" align="center">
                                After a month of job hunting still got no good job offer, decided to work on few projects using different tools such as ASP.NET MVC and ASP.NET Core API 
                                to acquire new skill. Completed 1 project so far.
                            </Typography>
                        </Fade>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    <Zoom>
                        Present
                    </Zoom>    
                    </Typography>
                    </Box>
            </Box>
        </React.Fragment>
    )
}

export default Resume
