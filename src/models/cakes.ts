import Storage from "node-persist";
import { HttpError } from "../errors/httpError";
import {CakeResponse, CreateCakeRequest, UpdateCakeRequest} from "shared/types/cakes";

export module CakesStore {

  const __initStorage = async () => {
    await Storage.init({
      dir: "./datastore/cakes"
    });
  }

  const __findCake = async (id: string): Promise<CakeResponse | null> => {
    let existingCake = await Storage.get(id);
    if(existingCake){
      return existingCake;
    }
    else throw HttpError(404, `Cannot find Cake with Id of ${id}`);
  } 

  export const getCakes = async () => {
    await __initStorage();
    let cakes = await Storage.values();
    return cakes;
  }

  export const createCake = async (data: CreateCakeRequest) => {
    await __initStorage();
    let keys = await Storage.keys();
    let cakeKey = keys.length > 0 ? parseInt(keys[keys.length-1]) + 1 : 1;
    console.log(cakeKey);
    let storageResult = await Storage.set(`${cakeKey}`, {id: cakeKey, ...data});
    return storageResult.content.value;
  }

  export const getCake = async (id: string) => {
    await __initStorage();
    let cake = await __findCake(id);
    return cake;
  }

  export const updateCake = async (id: string, data: UpdateCakeRequest) => {
    await __initStorage();
    let existingCake = await __findCake(id);
    if(existingCake){
      let storageResult = await Storage.update(id, {...existingCake, ...data});
      return storageResult.content.value;
    }
  }

  export const deleteCake = async (id: string) => {
    await __initStorage();
    let existingCake = await __findCake(id);
    if(existingCake){
      let storageResult = await Storage.removeItem(id);
      if(!storageResult) throw HttpError(500, "Unable to delete Cake"); 
    }
  }
}