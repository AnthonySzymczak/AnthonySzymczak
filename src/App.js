import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';

import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
 
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={About}/>
            <Route path='/contact' exact component={ContactForm}/>
            {/* <Route path='/portfolio' exact component={Portfolio}/>
            <Route path='/resume' exact component={Resume}/> */}
          </Switch>

        </Router>
        <Footer />

      </>

  );
  }


export default App;
