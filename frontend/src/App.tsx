import React from 'react';
import './App.css';
import Carous from './components/Carous';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Upcoming from './components/Upcoming';
function App() {
  return (
    <div className="App">
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>
            Test
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Carous></Carous>

      <Upcoming></Upcoming>
    </div>
  );
}

export default App;
