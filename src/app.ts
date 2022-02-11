import express from "express";
import bodyParser from "body-parser";
import CakesRouter from "./routes/cakes";
require("express-async-errors");

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use((req: express.Request, res: express.Response, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PATCH, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.listen(port, () => {
  console.log(`App Started on ${port}`);
});

app.use("/", 
  (req: express.Request,
  res: express.Response) => {
    res.status(200);
})
app.use("/api", CakesRouter);

app.use((err: any,
  req: express.Request,
  res: express.Response,
  next: (err: any) => void) => 
  {
    console.log(err);
    res.status(err.status || 500).json({status: err.status, messages: err.messages});
    next(err);
  }
);

export default app;