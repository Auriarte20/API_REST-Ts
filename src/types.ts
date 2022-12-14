// enum es una clase especial para declarar constantes (variables inalcanzables)
export enum Position {
  Portero = "portero",
  Defensa = "defensa",
  Centrocampista = "centrocampista",
  Delantero = "delantero",
}


// interface, lo entedí como crear unas instancia de objeto con los datos que quiero que guarde (tipo sequelize y sus comlumnas)
export interface PlayerUnity {
  id: number;
  name: string;
  dorso: string;
  number: number;
  country: string;
  position: Position;
  team: string;
}

// Crear 'interfaz' sin alguna propiedad con "Omit<Type, Keys>":
export type NoVisibilityPlayerTeam = Omit<PlayerUnity, "team">;

export type NewPlayerData = Omit<PlayerUnity, "id">;

// o traer las propiedades que queramos con "Pick":
// export type NoVisibilityRetired = Pick<
//   PlayerUnity,
//   "id" | "name" | "dorso" | "number" | "country" | "position"
// >;
