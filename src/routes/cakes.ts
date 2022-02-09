import { Router } from "express";
require("express-async-errors");
import { CakesController }  from "../controllers/cakes";

const CakesRouter = Router();

CakesRouter.get(`/`, CakesController.getCakesEndpoint);

CakesRouter.post(`/`, CakesController.createCakeEndpoint);

CakesRouter.get(`/:cakeId`, CakesController.getCakeEndpoint);

CakesRouter.patch(`/:cakeId`, CakesController.updateCakeEndpoint);

CakesRouter.delete(`/:cakeId`, CakesController.deleteCakeEndpoint);
export default CakesRouter;