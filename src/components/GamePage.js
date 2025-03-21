import { useParams } from 'react-router-dom';

export default function GamePage({ gamesList }) {
  let { gameId } = useParams();
  gameId = parseInt(gameId) // Convert the gameId from string to number

  const game = gamesList.find(g => g.id === gameId)

  if (!game) {
    return <h2>Game not found</h2>
  }

  return (
    <div className="bg-light p-4">
      <h3>{game.name}</h3>
      <p>{game.category}</p>
      <p>{game.rating}</p>
    </div>
  )
}