import { useParams } from "react-router-dom";

export default function GamePage({ gamesList }) {
  const { gameId } = useParams();
  const game = gamesList.find((g) => g.id === parseInt(gameId));

  if (!game) {
    return <h2>Game not found</h2>;
  }

  return (
    <div className="bg-light p-4">
      <h3>{game.name}</h3>
      <p><strong>Category:</strong> {game.category}</p>
      <p><strong>Description:</strong> {game.description}</p>
    </div>
  );
}