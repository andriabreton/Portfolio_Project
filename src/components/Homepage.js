import React, { useState } from 'react';
import GameCard from './GameCard';

export default function HomePage({ gamesList }) {
  const [categoryFilter, setCategoryFilter] = useState("Solo Player");

  let filteredGames;
  if (categoryFilter === "All") {
    filteredGames = gamesList;
  } else {
    filteredGames = gamesList.filter(game => game.category === categoryFilter);
  }

  return (
    <div>
      <div>
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter("All")}>All</button>
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter("Solo Player")}>Solo Player</button>
        <button className="btn btn-primary" onClick={() => setCategoryFilter("2+ Players")}>2+ Players</button>
      </div>
      {filteredGames.map(g => <GameCard key={g.id} game={g} />)}
    </div>
  );
}
