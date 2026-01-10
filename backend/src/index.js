import express from "express";
import path from "path";
import cors from "cors";
import { serve } from "inngest/express";
import { functions } from "./lib/inngest.js";

import { ENV } from "./lib/env.js";
import { connectDatabase } from "./lib/db.js";
import { inngest } from "./lib/inngest.js";

const app = express();

const PORT = ENV.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.use("/api/inngest", serve({ client: inngest, functions }));

const __dirname = path.resolve();

//Make ready for production

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = () => {
  try {
    connectDatabase();
    app.listen(PORT, () => console.log(`app running on ${PORT}`));
  } catch (error) {
    console.error("Error starting the server", error.message);
  }
};

startServer();
