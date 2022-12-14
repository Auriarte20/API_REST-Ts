import { Router } from "express";
import * as playerServices from "../services/service";

const router = Router();

router.get("/", (_req, res) => {
  const allPlayers = playerServices.getPlayers();
  res.send(allPlayers);
});

router.get("/notTeam", (_req, res) => {
  const playersNotTeams = playerServices.getPlayersWithoutTeam();
    res.status(200).json({
      msg: "Información sin su equipo deportivo",
      playersNotTeams,
    });
});

router.get("/:id", (req, res) => {
  const player = playerServices.getPlayerId(Number(req.params.id));
  return player
    ? res.status(200).json({ msg: "Jugador encontrado", player })
    : res.status(404).send({ msg: "Jugador inexistente" });
});

router.post("/", (req, res) => {});

export default router;
