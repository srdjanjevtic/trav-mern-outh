import dontenv from "dotenv";
import express from "express";
dontenv.config();

const app = express();
const PORT = process.env.PORT || 3330;

app.get("/", (req, res) => res.send("Start"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
