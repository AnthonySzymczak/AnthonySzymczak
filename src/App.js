import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {

  const [categories] = useState([
    { name: 'cryptotycoon', description: 'A fun game on mining Doge-Coin',},
    { name: 'gallery', description: 'A Gallery of A Gallery' },
    { name: 'horiseon', description: 'A list of known technologies, strengths, weaknesses, and more!' },
    { name: 'runbuddy', description: 'Information on the runbuddy website' },
    { name: 'startifacts', description: 'A website for purchasing nerdy memoribila' },

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
      categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>

      {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
 
    </div>
  );
}

export default App;
