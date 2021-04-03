import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: "0.3"
    }
})

const Home = () => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Navbar/>
            <Particles
            canvasClassName={classes.particlesCanva}
             params={{
                 particles: {
                     number: {
                         value: 90,
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
                         type: "circle",
                         stroke:{
                             width:1,
                             color: "White"
                         }
                     },
                     size:{
                         value: 8,
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
            <Header/>
        </React.Fragment>
    )
}

export default Home
