// enum es una clase especial para declarar constantes (variables inalcanzables)
export enum Position {
  Portero = "Arquero",
  Defensa = "Defensa",
  Centrocampista = "Centrocampista",
  Delantero = "Delantero",
}

// interface, lo entedí como crear unas instancia de objeto con los datos que quiero que guarde (tipo sequelize y sus comlumnas)
export interface PlayerUnity {
  id: number;
  fullName: string;
  age: number;
  name: string;
  dorsal: number;
  position: Position;
  country: string;
}

// Crear 'interfaz' sin alguna propiedad con "Omit<Type, Keys>":
export type NoVisibilityPlayerCountry = Omit<PlayerUnity, "country">;

export type NewPlayerData = Omit<PlayerUnity, "id">;

// o traer las propiedades que queramos con "Pick":
// export type NoVisibilityRetired = Pick<
//   PlayerUnity,
//   "id" | "name" | "dorso" | "number" | "country" | "position"
// >;
