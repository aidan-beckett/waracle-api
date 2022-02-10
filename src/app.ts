import Express from "express";
import BodyParser from "body-parser";
import CakesRouter from "./routes/cakes";
require("express-async-errors");

const app = Express();
const port = 8000;

app.use(BodyParser.json());

app.use((req: Express.Request, res: Express.Response, next) => {
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

app.use("/cakes", CakesRouter);

app.use((err: any,
  req: Express.Request,
  res: Express.Response,
  next: (err: any) => void) => 
  {
    console.log(err);
    res.status(err.status || 500).json({status: err.status, messages: err.messages});
    next(err);
  }
);

export default app;