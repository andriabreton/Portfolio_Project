import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import RandomPage from './components/RandomPage';
import { TEST_GAMES } from './TEST_GAMES';
import GamePage from './components/GamePage';

function App() {
  const [gamesList] = useState(TEST_GAMES);

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">My Favorite Games</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/random">Random</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <h1>My Favorite Games</h1>
        <Routes>
          <Route path="/" element={<HomePage gamesList={gamesList} />} />
          <Route path="/random" element={<RandomPage gamesList={gamesList} />} />
          <Route path="/games/:gameId" element={<GamePage gamesList={gamesList} />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;