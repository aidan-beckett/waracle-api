import { CreateCakeRequest, UpdateCakeRequest} from "shared/types/cakes";
import { isString, isNumber } from "util";
import { HttpError } from "../../errors/httpError";

export module CakeValidator {

  export const validateCreateCakeBody = async (body: CreateCakeRequest): Promise<void> => {
    const errorMessages:string[] = [];

    if(!body.name) errorMessages.push("A Cake must have a Name");
    else if(!isString(body.name)) errorMessages.push("Name must be a string");
    else if(body.name.length > 30) errorMessages.push("Name must be 30 characters or less");

    if(!body.comment) errorMessages.push("A Cake must have a Comment");
    else if(!isString(body.comment)) errorMessages.push("Comment must be a string");
    else if(body.comment.length > 200) errorMessages.push("Comment must be 200 characters or less");

    if(!body.imageUrl) errorMessages.push("A Cake must have an Image Url");
    else if(!isString(body.imageUrl)) errorMessages.push("Image Url must be a string");

    if(!body.yumFactor) errorMessages.push("A Cake must have a Yum Factor");
    else if(!isNumber(body.yumFactor)) errorMessages.push("Yum Factor must be a number");
    else if(body.yumFactor < 1 || body.yumFactor > 5) errorMessages.push("Yum Factor must be between 1 and 5");
    
    if(errorMessages.length > 0) throw HttpError(400, errorMessages);
  }

  export const validateUpdateCakeBody = async (body: UpdateCakeRequest): Promise<void> => {
    const errorMessages:string[] = [];

    if(body.name && !isString(body.name)) errorMessages.push("Name must be a string");
    else if(body.name && body.name.length > 30) errorMessages.push("Name must be 30 characters or less");

    if(body.comment && !isString(body.comment)) errorMessages.push("Comment must be a string");
    else if(body.comment && body.comment.length > 200) errorMessages.push("Comment must be 200 characters or less");

    if(body.imageUrl && !isString(body.imageUrl)) errorMessages.push("Image Url must be a string");

    if(body.yumFactor && !isNumber(body.yumFactor)) errorMessages.push("Yum Factor must be a number");
    else if(body.yumFactor && (body.yumFactor < 1 || body.yumFactor > 5)) errorMessages.push("Yum Factor must be between 1 and 5");

    if(errorMessages.length > 0) throw HttpError(400, errorMessages);
  }
}