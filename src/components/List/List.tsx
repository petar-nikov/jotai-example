import { PokemonTable } from "components/PokemonTable"
import React from "react"

export const List = () => {

  return (
    <React.Suspense fallback={(<div>Loading ...</div>)} >
      <PokemonTable />
    </React.Suspense>)
}
