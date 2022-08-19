import { atom } from 'jotai';

export const pokemmonAtom = atom<any[]>([])
export const filterAtom = atom<string>('')
export const filteredPokemonAtom = atom( get => 
get(pokemmonAtom)
  .filter(p => p.name.english.toLowerCase().includes(get(filterAtom).toLowerCase()))
)
