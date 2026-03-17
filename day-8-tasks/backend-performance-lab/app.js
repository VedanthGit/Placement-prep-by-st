import express, { json } from "express";
const app = express();

app.use(json());

app.use("/api", require("./routes/productRoutes"));
app.use("/api", require("./routes/userRoutes"));
app.use("/api", require("./routes/postRoutes"));

export default app;
