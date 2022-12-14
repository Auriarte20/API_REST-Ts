import { PlayerUnity, NoVisibilityPlayerTeam, NewPlayerData } from "../types";
import playersJson from "./Players.json";

// PlayerUnity[] o Array<PlayerUnity> manera de instaciar la interface (ej: modelo)
const players: PlayerUnity[] = playersJson as PlayerUnity[];

export const getPlayers = (): PlayerUnity[] => players;

export const getPlayersWithoutTeam = (): NoVisibilityPlayerTeam[] => {
  return players.map(({ id, name, dorso, number, country, position }) => {
    return {
      id,
      name,
      dorso,
      number,
      country,
      position,
    };
  });
};

export const getPlayerId = () => {};
