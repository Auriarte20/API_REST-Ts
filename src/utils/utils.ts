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

const checkName = (reqName: any): string => {
  if (!isString(reqName)) {
    throw new Error("Name debe ser string");
  }
  return reqName;
};

const checkDorso = (reqDorso: any): string => {
  if (!isString(reqDorso)) {
    throw new Error("Dorso debe ser string");
  }
  return reqDorso;
};

const checkNumber = (reqNumber: any): number => {
  if (!isNumber(reqNumber)) {
    throw new Error("Numero debe ser number");
  }
  return reqNumber;
};

const checkCountry = (reqCountry: any): string => {
  if (!isString(reqCountry)) {
    throw new Error("Country debe ser string");
  }
  return reqCountry;
};

const checkPosition = (reqPosition: any): Position => {
  if (!isString(reqPosition) || !isPosition(reqPosition)) {
    throw new Error("Position debe ser string");
  }
  return reqPosition;
};

const checkTeam = (reqTeam: any): string => {
  if (!isString(reqTeam)) {
    throw new Error("Team debe ser string");
  }
  return reqTeam;
};

const toNewPlayer = (object: any): NewPlayerData => {
  const newPlayer: NewPlayerData = {
    name: checkName(object.name),
    dorso: checkDorso(object.dorso),
    number: checkNumber(object.number),
    country: checkCountry(object.country),
    position: checkPosition(object.position),
    team: checkTeam(object.team),
  };

  return newPlayer;
};

export default toNewPlayer;
