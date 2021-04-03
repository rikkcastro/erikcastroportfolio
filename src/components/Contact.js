import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles"
import{ TextField, Typography, Button, Grid, Box} from '@material-ui/core'
import SendIcon from "@material-ui/icons/Send"
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';

const InputField = withStyles({
    
    root: {
        "& label.Mui-focused": {
            color: "white"
        },
        "& label": {
            color: "white"
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset": {
                borderColor: "white"
            },
            "&:hover fieldset": {
                borderColor: "white"
            },
            "&.Mui-focused fieldset": {
                borderColor: "white"
            }
        }
    }
})(TextField)

const useStyles = makeStyles(theme => ({
 form:{
     width: "19rem",
     top: "50%",
     left: "50%",
     transform: "translate(-50%, -50%)",
     position: "absolute",
 },
 button: {
     marginTop: "1rem",
     color: "white",
     borderColor: "white"
 },
 inputIcon: {
     color: "white",
 },
 title: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase"
}
}))

const Contact = () => {

    const classes = useStyles()

    return (
        <React.Fragment>
            <Box component="div" style={{background: "rgb(25,25,25)", height: "100vh"}}>
                <Grid container justify="center">
                        <Box component="form" className={classes.form}>
                            <Rotate top left>
                                <Typography variant="h5" className={classes.title}>
                                    Hire or contact me...
                                </Typography>
                            </Rotate>
                                <Flip left>
                                    <InputField 
                                    fullWidth={true} 
                                    label="Name" 
                                    variant="outlined" 
                                    inputProps={{style:{color: "white"}}} 
                                    margin="dense" 
                                    size="medium"/>
                                </Flip>
                                <Flip left>
                                    <InputField 
                                    fullWidth={true} 
                                    label="Email" 
                                    variant="outlined" 
                                    inputProps={{style:{color: "white"}}} 
                                    margin="dense" 
                                    size="medium"
                                    />
                                </Flip>
                                <Flip left>
                                    <InputField 
                                    fullWidth={true} 
                                    label="Company" 
                                    variant="outlined" 
                                    inputProps={{style:{color: "white"}}} 
                                    margin="dense" size="medium"/>
                                </Flip>
                                <Fade left>
                                    <Button variant="outlined" fullWidth={true} endIcon={<SendIcon/>} className={classes.button}>
                                        Contact me
                                    </Button>
                                </Fade>
                                    
                        </Box>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default Contact
