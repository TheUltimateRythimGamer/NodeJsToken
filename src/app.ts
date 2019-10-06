import express, {Application} from "express";
import authRoutes from "./routes/auth";

const app : Application = express();

/**
 * Settings
 */
app.set('port', 4000);

/**
 * Routers 
 */
app.use(authRoutes);

export default app;

