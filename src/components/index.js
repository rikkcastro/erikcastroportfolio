import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute"
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
                     },
                     opacity: {
                         value: 1,
                         random: true,
                         anim: {
                             enable: true,
                             speed: 1,
                             opacity_min: 0.1,
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
