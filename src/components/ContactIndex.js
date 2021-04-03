import React from 'react'
import Contact from './Contact'
import Navbar from './Navbar'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: "0.3"
    }
})

const ContactIndex = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Navbar/>
            <Particles
            canvasClassName={classes.particlesCanva}
             params={{
                 particles: {
                     number: {
                         value: 20,
                         density: {
                             enable: true,
                             value_are: 900
                         },
                         line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
                     },
                     shape:{
                         type: "polygon",
                         stroke:{
                             width:1,
                             color: "White"
                         }
                     },
                     size:{
                         value: 5,
                         random: true,
                         anim:{
                             enable: true,
                             speed: 6,
                             size_min: 0.1,
                             sync: true
                         }
                     }
                 }
             }}
            />
            <Contact/>
        </React.Fragment>
    )
}

export default ContactIndex
