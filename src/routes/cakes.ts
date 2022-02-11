import { Router } from "express";
require("express-async-errors");
import { CakesController }  from "../controllers/cakes";

const CakesRouter = Router();

CakesRouter.get(`/cakes`, CakesController.getCakesEndpoint);

CakesRouter.post(`/cakes`, CakesController.createCakeEndpoint);

CakesRouter.get(`/cakes/:cakeId`, CakesController.getCakeEndpoint);

CakesRouter.patch(`/cakes/:cakeId`, CakesController.updateCakeEndpoint);

CakesRouter.delete(`/cakes/:cakeId`, CakesController.deleteCakeEndpoint);
export default CakesRouter;