import express from "express";
import paywallRoutes from "./routes/paywallRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
const port = 5000;

app.use(paywallRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running in http://localhost:${port}`);
});
