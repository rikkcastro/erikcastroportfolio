import React from 'react'
import { Box, Typography } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import img1 from '../images/projects/1.jpg'
import img2 from '../images/projects/2.jpg'
import img3 from '../images/projects/3.jpg'
import "./../Styles/Cards.css"
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Typed from 'react-typed';

const useStyles = makeStyles( theme => ({
    containerTitle:{
        paddingLeft: "6.3rem",
        paddingTop: "5rem",
        textTransform: "uppercase",
        fontWeight: 600,
        color: "white",
        [theme.breakpoints.up("md")]: {
            left: "3rem",
            align:"left"
            }
        }
}));

const Portfolio = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h4" className={classes.containerTitle}>
                    <Slide top>
                    <Typed 
                        strings={["Portfolio"]} 
                        typeSpeed={90} />
                    </Slide>
                </Typography>
            <Box components="header">
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className='col-md-4'>
                            <Zoom left>
                                <div className="card text-center shadow" style={{ background:"rgb(21,21,21)"}}>
                                    <div className="overflow">
                                        <img src={img1} alt="image1" className="card-img-top imagesize"/>
                                    </div>
                                    <div className="card-body text-white">   
                                            <h4 className="">TractIT-RealQuick: Budget tracking </h4>
                                            <p className="card-text text-white">
                                            Powered By: •NextJS •NodeJS •ExpressJS •MongoDB 
                                            </p>
                                            <a href="http://trackit-realquick-git-master.castroerikk.vercel.app/" add target="_blank" rel="noreferrer" className="btn btn-outline-light">Visit Website</a>
                                    </div>
                                </div>   
                            </Zoom>
                        </div>
                        <div className='col-md-4'>
                            <Zoom>
                                <div className="card text-center shadow" style={{ background:"rgb(21,21,21)"}}>
                                    <div className="overflow">
                                        <img src={img2} alt="image2" className="card-img-top imagesize"/>
                                    </div>
                                    <div className="card-body text-white">   
                                            <h4 className="">RikkCastro: Booking Services</h4>
                                            <p className="card-text text-white">
                                                Powered By: •HTML/CSS •Bootstrap •MongoDB •NodeJS
                                            </p>
                                            <a href="https://bookingservice.vercel.app/" add target="_blank" rel="noreferrer" className="btn btn-outline-light">Visit Website</a>
                                    </div>
                                </div>    
                            </Zoom> 
                        </div>
                        <div className='col-md-4'>
                            <Zoom right>
                                <div className="card text-center shadow" style={{ background:"rgb(21,21,21)"}}>
                                    <div className="overflow">
                                        <img src={img3} alt="image3" className="card-img-top imagesize"/>
                                    </div>
                                    <div className="card-body text-white">   
                                            <h4 className="">Restaurant App</h4>
                                            <p className="card-text text-white">
                                                Powered By: •ReactJS •Material-UI •ASP.NET CORE API •C# •MSSQLSERVER
                                            </p>
                                            <a href type="button" className="btn btn-outline-light" disabled>To be hosted</a>
                                    </div>
                                </div>   
                            </Zoom>
                             
                        </div>
                    </div>
                </div>
            </Box>
            
        </React.Fragment>
    )
}

export default Portfolio
