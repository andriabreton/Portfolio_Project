import { useParams } from 'react-router-dom';

export default function GamePage({ gamesList }) {
  let { gameId } = useParams()
  gameId = parseInt(gameId)

  const game = gamesList.find(g => g.id === parseInt(gameId, 10));

  if(!game) {
    return <h2>Game Not Found</h2>
  }

  return (
    <div>
      <h3>{ game.name }</h3>
      <p>{ game.category }</p>
      <p>{ game.rating }</p>
    </div>
  );
}
