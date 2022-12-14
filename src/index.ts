import express from "express";
import playersRoutes from "./routes/players.routes";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/prueba", (_req, res) => {
  console.log("Ruta prueba con éxito");
  res.send("Success");
});

app.use("/api/players", playersRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto:${PORT}`);
});
