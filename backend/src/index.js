import express from "express";
import path from "path";

import { ENV } from "./lib/env.js";

const app = express();

const PORT = ENV.PORT || 5000;

const __dirname = path.resolve();

//Make ready for production

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{any}", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});
