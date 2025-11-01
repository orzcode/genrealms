import express from "express";
import { handler as astroHandler } from "./dist/server/entry.mjs";
import path from "path";

const app = express();
app.use(express.json());


// backend API routes
app.get("/api/test", (req, res) => res.json({ ok: true }));

// serve static files from Astro build
app.use(express.static("dist/client"));

// all other routes → Astro
app.use(astroHandler);

app.listen(4321, () => console.log("Server running on http://localhost:4321"));
