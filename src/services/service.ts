import {
  PlayerUnity,
  NoVisibilityPlayerCountry,
  NewPlayerData,
} from "../types";
import playersJson from "./Players.json";

// PlayerUnity[] o Array<PlayerUnity> manera de instaciar la interface (ej: modelo)
const players: PlayerUnity[] = playersJson as PlayerUnity[];

export const getPlayers = (): PlayerUnity[] => players;

export const getPlayersWithoutTeam = (): NoVisibilityPlayerCountry[] => {
  return players.map(
    ({ id, fullName, age, name, dorsal, country, position }) => {
      return {
        id,
        fullName,
        age,
        name,
        dorsal,
        country,
        position,
      };
    }
  );
};

export const getPlayerId = (
  id: number
): NoVisibilityPlayerCountry | undefined => {
  const player = players.find((p) => p.id === id);
  if (player) {
    const { country, ...restOfPlayer } = player;
    return restOfPlayer;
  }
};

export const addPlayer = (newPlayerData: NewPlayerData): PlayerUnity => {
  const newPlayer = {
    id: players.length + 1, // o Math.max(...players.map((p) => p.id)) + 1,
    ...newPlayerData,
  };

  players.push(newPlayer);
  return newPlayer;
};
