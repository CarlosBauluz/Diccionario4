import { Palabra } from "./type.ts";

export const APIDiccionario = async (p: string):Promise<Palabra[]> => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${p}`;
  const data = await fetch(url);
  const palabra: Palabra[] = await data.json();
  //console.log(palabra);
  return palabra;
};
