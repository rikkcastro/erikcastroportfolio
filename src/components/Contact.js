import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles"
import{ TextField, Typography, Button, Grid, Box} from '@material-ui/core'
import SendIcon from "@material-ui/icons/Send"
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

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

    function sendEmail(e) {
        e.preventDefault()


          
        emailjs.sendForm('service_wve4ghb', 'template_aingr0d', e.target, 'user_qOiIUVpPP7J4BFLdfz9EK')
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                title: 'Email Sent to Erik',
                text: 'Thank you for your time to send an emai',
                icon: 'success',
                iconColor: 'white',
                textColor: 'white',
                cancelButtonText: 'Safe',
                cancelButtonColor: 'rgb(21,21,21)',
                background: 'rgb(30,30,30)',
                showCancelButton: true,
                showConfirmButton: false
              })
    
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
        
    }

    return (
        <React.Fragment>
            <Box component="div" style={{background: "rgb(25,25,25)", height: "100vh"}}>
                <Grid container justify="center">
                        <Box component="form" className={classes.form} onSubmit={sendEmail}>
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
                                    size="medium"
                                    name="sendername"/>
                                </Flip>
                                <Flip left>
                                    <InputField 
                                    fullWidth={true} 
                                    label="Email" 
                                    variant="outlined" 
                                    inputProps={{style:{color: "white"}}} 
                                    margin="dense" 
                                    size="medium"
                                    type="email"
                                    name="senderemail"
                                    />
                                </Flip>
                                <Flip left>
                                    <InputField 
                                    fullWidth={true} 
                                    label="Company" 
                                    variant="outlined" 
                                    inputProps={{style:{color: "white"}}} 
                                    margin="dense" size="medium"
                                    name="sendercompany"/>
                                </Flip>
                                <Flip left>
                                    <InputField 
                                    fullWidth={true} 
                                    label="Message" 
                                    multiline
                                    variant="outlined" 
                                    inputProps={{style:{color: "white"}}} 
                                    margin="dense" size="medium"
                                    name="sendermessage"/>
                                </Flip>
                                <Fade left>
                                    <Button variant="outlined" type="submit" fullWidth={true} endIcon={<SendIcon/>} className={classes.button}>
                                        Send Email
                                    </Button>
                                </Fade>
                                    
                        </Box>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default Contact
