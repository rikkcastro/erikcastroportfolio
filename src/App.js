import React from 'react'
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css';
import Home from './components';
import Resume from './components/Resume';


function App() {
  return (
   <React.Fragment>
      <CssBaseline/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={Resume}/>
      
   </React.Fragment>
  );
}

export default App;
