import express, {Request, Response} from 'express';
import {config} from "./config";
import routes from "./routes";

const app = express();

//middlewares to parse the body of the request
app.use(express.json());

//routes
app.use('/api/v1', routes);

app.listen(config.port, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
})