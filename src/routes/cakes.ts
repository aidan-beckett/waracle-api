import { Router } from "express";
require("express-async-errors");
import { CakesController }  from "../controllers/cakes";

const CakesRouter = Router();

CakesRouter.get(`/api/cakes`, CakesController.getCakesEndpoint);

CakesRouter.post(`/api/cakes`, CakesController.createCakeEndpoint);

CakesRouter.get(`/api/cakes/:cakeId`, CakesController.getCakeEndpoint);

CakesRouter.patch(`/api/cakes/:cakeId`, CakesController.updateCakeEndpoint);

CakesRouter.delete(`/api/cakes/:cakeId`, CakesController.deleteCakeEndpoint);
export default CakesRouter;