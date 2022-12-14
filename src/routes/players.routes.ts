import { Router } from "express";
import * as playerServices from "../services/service";
import toNewPlayer from "../utils/utils";

const router = Router();

router.get("/", (_req, res) => {
  try {
    const allPlayers = playerServices.getPlayers();
    res.status(200).json({
      msg: "Todos los jugadores",
      allPlayers,
    });
  } catch (error: any) {
    res.status(500).send({ msg: error.message });
  }
});

router.get("/notTeam", (_req, res) => {
  try {
    const playersNotTeams = playerServices.getPlayersWithoutTeam();
    res.status(200).json({
      msg: "Información sin su equipo deportivo",
      playersNotTeams,
    });
  } catch (error: any) {
    res.status(500).send({ msg: error.message });
  }
});

router.get("/:id", (req, res) => {
  try {
    const player = playerServices.getPlayerId(Number(req.params.id));
    return player
      ? res.status(200).json({ msg: "Jugador encontrado", player })
      : res.status(404).send({ msg: "Jugador inexistente" });
  } catch (error: any) {
    res.status(400).send({ msg: error.message });
  }
});

router.post("/", (req, res) => {
  try {
    const newPlayer = toNewPlayer(req.body);
    const createdPlayer = playerServices.addPlayer(newPlayer);
    res.status(201).json({
      msg: `¡El jugador ${newPlayer.dorso} se ha subido con éxito!`,
      createdPlayer,
    });
  } catch (error: any) {
    res.status(400).send({ msg: error.message });
  }
});

export default router;
