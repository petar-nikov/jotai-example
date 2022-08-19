import { atom } from 'jotai';

import { URL } from "utils"

export type PokemonData = {
  "id": number;
  "name": {
    "english": string;
    "japanese": string;
    "chinese": string;
    "french": string;
  },
  "type": string[],
  "base": {
    "HP": number,
    "Attack": number,
    "Defense": number,
    "Sp. Attack": number,
    "Sp. Defense": number,
    "Speed": number
  }
};

export const pokemmonAtom = atom<Promise<PokemonData[]>>(async() => fetch(URL).then(resp => resp.json()))
export const filterAtom = atom<string>('')
export const filteredPokemonAtom = atom( get => 
get(pokemmonAtom)
  .filter((p: PokemonData) => p.name.english.toLowerCase().includes(get(filterAtom).toLowerCase()))
)
