import express from "express";

import { ENV } from "./lib/env.js";

const app = express();

const PORT = ENV.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});
