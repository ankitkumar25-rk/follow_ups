import express from "express";
import cors from "cors";
import Router from "./routes/doctor.routes.js";
import { notFound, errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/v1/doctors", Router);

app.get("/", (req, res) => {
  res.json({
    message: "Sage Prescription Builder API",
    version: "1.0.0",
    endpoints: {
      doctors: "/api/v1/doctors",
      health: "/health",
    },
  });
});

app.use(notFound);
app.use(errorHandler);

export default app;
