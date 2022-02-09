import { Request, Response } from "express";
import { CakesStore } from "../models/cakes";
import { CakeValidator } from "./validators/cakes";

export module CakesController {

  export const getCakesEndpoint = async (req: Request, res: Response, next: (err: any) => void) => {
    let cakes = await CakesStore.getCakes();
    res.status(200).json(cakes);
  }

  export const createCakeEndpoint = async (req: Request, res: Response, next: (err: any) => void) => {
    let body = {
      name: req.body.name,
      comment: req.body.comment,
      imageUrl: req.body.imageUrl,
      yumFactor: req.body.yumFactor
    };
    await CakeValidator.validateCreateCakeBody(body);
    let cake = await CakesStore.createCake(body);
    res.status(200).json(cake);
  }

  export const getCakeEndpoint = async (req: Request, res: Response, next: (err: any) => void) => {
    let cake = await CakesStore.getCake(req.params.cakeId);
    res.status(200).json(cake);
  }

  export const updateCakeEndpoint = async (req: Request, res: Response, next: (err: any) => void) => {
    let body = {
      name: req.body.name,
      comment: req.body.comment,
      imageUrl: req.body.imageUrl,
      yumFactor: req.body.yumFactor
    };
    await CakeValidator.validateUpdateCakeBody(body);
    let cake = await CakesStore.updateCake(req.params.cakeId, req.body);
    res.status(200).json(cake);
  }

  export const deleteCakeEndpoint = async (req: Request, res: Response, next: (err: any) => void) => {
    await CakesStore.deleteCake(req.params.cakeId);
    res.status(200).json();
  }
}