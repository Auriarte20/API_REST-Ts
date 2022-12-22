import { NewPlayerData, Position } from "../types";

const isString = (string: string): boolean => {
  return typeof string === "string";
};

const isNumber = (number: number): boolean => {
  return typeof number === "number";
};

const isPosition = (param: any): boolean => {
  return Object.values(Position).includes(param);
};

// Validar datos que vienen por body
const checkFullName = (reqFullName: any): string => {
  if (!isString(reqFullName)) {
    throw new Error("FullName debe ser string");
  }
  return reqFullName;
};

const checkAge = (reqAge: any): number => {
  if (!isNumber(reqAge)) {
    throw new Error("Age debe ser number");
  }
  return reqAge;
};

const checkName = (reqName: any): string => {
  if (!isString(reqName)) {
    throw new Error("Name debe ser string");
  }
  return reqName;
};

const checkDorsal = (reqDorsal: any): number => {
  if (!isNumber(reqDorsal)) {
    throw new Error("Dorsal debe ser number");
  }
  return reqDorsal;
};

const checkPosition = (reqPosition: any): Position => {
  if (!isString(reqPosition) || !isPosition(reqPosition)) {
    throw new Error("Position debe ser string");
  }
  return reqPosition;
};

const checkCountry = (reqCountry: any): string => {
  if (!isString(reqCountry)) {
    throw new Error("Country debe ser string");
  }
  return reqCountry;
};

const toNewPlayer = (object: any): NewPlayerData => {
  const newPlayer: NewPlayerData = {
    fullName: checkFullName(object.fullName),
    age: checkAge(object.age),
    name: checkName(object.name),
    dorsal: checkDorsal(object.dorsal),
    country: checkCountry(object.country),
    position: checkPosition(object.position),
  };

  return newPlayer;
};

export default toNewPlayer;
