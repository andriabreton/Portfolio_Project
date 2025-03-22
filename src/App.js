import { useState } from "react";
import Homepage from "./components/Homepage";
import RandomPage from "./components/RandomPage";
import GamePage from "./components/GamePage";
import { TEST_GAMES } from "./TEST_GAMES";
import { Link, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  const [gamesList] = useState(TEST_GAMES);

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Favorite Card Games</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/random">Random</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Homepage gamesList={gamesList} />} />
        <Route path="/random" element={<RandomPage gamesList={gamesList} />} />
        <Route path="/games/:gameId" element={<GamePage gamesList={gamesList} />} />
      </Routes>
    </div>
  );
}

export default App;