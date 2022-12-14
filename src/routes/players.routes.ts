import { Router } from "express";
import * as playerServices from "../services/service";
import toNewPlayer from "../utils/utils";

const router = Router();

router.get("/", (_req, res) => {
  const allPlayers = playerServices.getPlayers();
  res.send(allPlayers);
});

router.get("/notTeam", (_req, res) => {});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

export default router;
