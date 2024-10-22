// import React, { useState, useEffect } from "react";
// import "./PlayerList.css";

// const PlayerList = ({ players, onPlayerSelect }) => {
//   const [selectedPlayers, setSelectedPlayers] = useState([]);

//   const handlePlayerChange = (player) => {
//     if (selectedPlayers.length < 11 || selectedPlayers.includes(player)) {
//       const updatedSelection = selectedPlayers.includes(player)
//         ? selectedPlayers.filter((p) => p !== player)
//         : [...selectedPlayers, player];

//       setSelectedPlayers(updatedSelection);
//       onPlayerSelect(updatedSelection);
//     } else {
//       alert("You can only select 11 players!");
//     }
//   };

//   return (
//     <div className="player-list">
//       <h2>Select Your Players (Max: 11)</h2>
//       <ul>
//         {players.map((player) => (
//           <li key={player.id}>
//             <input
//               type="checkbox"
//               onChange={() => handlePlayerChange(player)}
//               checked={selectedPlayers.includes(player)}
//             />
//             {player.name} - {player.role}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PlayerList;

import React, { useState, useEffect } from "react";
import "./PlayerList.css";

const PlayerList = ({ players, onPlayerSelect }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handlePlayerChange = (player) => {
    if (selectedPlayers.includes(player)) {
      const updatedSelection = selectedPlayers.filter((p) => p !== player);
      setSelectedPlayers(updatedSelection);
      onPlayerSelect(updatedSelection);
    } else if (selectedPlayers.length < 11) {
      setSelectedPlayers([...selectedPlayers, player]);
      onPlayerSelect([...selectedPlayers, player]);
    } else {
      alert("You can only select 11 players!");
    }
  };

  return (
    <div className="player-list">
      <h2>Select Players (Max: 11)</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <div className="player-info">
              <input
                type="checkbox"
                onChange={() => handlePlayerChange(player)}
                checked={selectedPlayers.includes(player)}
              />
              <span>{player.name}</span>
              <span>Role: {player.role}</span>
              <span>Points: {player.points}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
