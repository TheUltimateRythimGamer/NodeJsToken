import express, {Application} from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth";

const app : Application = express();

/**
 * Settings
 */
app.set('port', 4000);

/**
 * Middlewares
 */
app.use(morgan('dev'));

/**
 * Routers 
 */
app.use('/api/auth',authRoutes);

export default app;

