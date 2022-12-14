import { PlayerUnity, NoVisibilityPlayerTeam, NewPlayerData } from "../types";
import playersJson from "./Players.json";

// PlayerUnity[] o Array<PlayerUnity> manera de instaciar la interface (ej: modelo)
const players: PlayerUnity[] = playersJson as PlayerUnity[];

export const getPlayers = (): PlayerUnity[] => players;
