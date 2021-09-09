import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/About';
import ContactForm from './components/Contact';

import Footer from './components/Footer';
import './App.css';

function App() {
  return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={About}/>

          </Switch>
        </Router>
        <Footer />

      </>

  );
  }


export default App;
