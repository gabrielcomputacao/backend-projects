import { NotFound } from "../errors/notFoundError.js";

export function notFoundHandling(req,res,next){ 
   const errorNotFound = new NotFound();
   next(errorNotFound);
}