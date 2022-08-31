import express from "express";
import { interventions } from "./interventions.js";
import { populations } from "./populations.js";
import { recommendations } from "./recommendations";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const PORT = process.env.PORT || 8000;
const HOST = "0.0.0.0";
app.use(cors());

app.get("/populations", async (req, res) => {
  try {
    res.status(200).send(populations);
  } catch (error) {
    res.status(500).send("Upss error");
  }
});

app.get("/interventions", async (req, res) => {
  try {
    res.status(200).send(interventions);
  } catch (error) {
    res.status(500).send("Upss error");
  }
});

app.get("/interventions", async (req, res) => {
  try {
    res.status(200).send(interventions);
  } catch (error) {
    res.status(500).send("Upss error");
  }
});
app.get("/recommendations", async (req, res) => {
  try {
    res.status(200).send(recommendations);
  } catch (error) {
    res.status(500).send("Upss error");
  }
});

app.get("/table", async (req, res) => {
  try {
    let table = {};

    for (let intervention of interventions) {
      table[intervention.id] = {};
      for (let population of populations) {
        table[intervention.id][population.id] = {
          recomendations: Math.floor(Math.random() * 10),
          strength: {
            conditional: {
              for: Math.floor(Math.random() * 3),
              against: Math.floor(Math.random() * 3),
            },
            strong: {
              for: Math.floor(Math.random() * 3),
              against: Math.floor(Math.random() * 3),
            },
          },
          studies: Math.floor(Math.random() * 20),
          isof: "54eb9fcc2b38677807178978",
        };
      }
    }
    res.status(200).send(table);
  } catch (error) {
    res.status(500).send("Upss error");
  }
});

app.listen(PORT, HOST, () => console.log(`Server running on port ${PORT}`));
