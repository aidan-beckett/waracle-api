import http from "http";
import { isString } from "util";

export var HttpError = (statusCode: number, messages: string[] | string) => {
  if(isString(messages)) return {
    status: statusCode,
    messages: [messages]
  }
  return {
    status: statusCode,
    messages: messages
  }
}