import { PokemonTable } from "components/PokemonTable"
import { useAtom } from "jotai"
import React from "react"
import { pokemmonAtom } from "store"
import { URL } from "utils"

export const List = () => {
  const [,pokemonSet] = useAtom(pokemmonAtom);

  React.useEffect(()=>{
    fetch(URL)
    .then(resp => resp.json())
    .then(pokemonSet)

  },[])
  return (<div><PokemonTable /></div>)
}
