import React from 'react'
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css';
import Home from './components';
import Resume from './components/ResumeIndex';
import Portfolio from './components/PortfolioIndex'
import Contact from './components/ContactIndex';


function App() {
  return (
   <React.Fragment>
      <CssBaseline/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={Resume}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/contacts" component={Contact}/>
      
   </React.Fragment>
  );
}

export default App;
