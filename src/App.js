import { useState } from "react";
import Homepage from "./components/Homepage";
import RandomPage from "./components/RandomPage";
import { TEST_GAMES } from "./TEST_GAMES";
import { Link, Route, Routes } from "react-router-dom";
import GamePage from "./components/GamePage";
import { Container, Nav, Navbar } from "react-bootstrap";


function App() {
  const [gamesList] = useState(TEST_GAMES)

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">My Favorite Games</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/random">Random</Nav.Link>
          </Nav>
        </Container>
        <Container className="me-4"></Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Homepage gamesList={gamesList} />} />
        <Route path="/random" element={<RandomPage gamesList={gamesList} />} />
        <Route path="/games/:gameId" element={<GamePage gamesList={gamesList} />} />
      </Routes>
    </div>
  );
}

export default App;