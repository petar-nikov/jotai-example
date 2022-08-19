import { useAtom } from 'jotai'
import { filterAtom, pokemmonAtom } from "store"

export const PokemonTable = () => {
  const [pokemon] = useAtom(pokemmonAtom)
  const [filter] = useAtom(filterAtom)
  return (
    <table className="w-full">
      <tbody className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <tr className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <th scope="col" className="px-3 py-4">Name</th>
          <th scope="col" className="px-3 py-4">Type</th>
        </tr>
        {pokemon.filter(p => p.name.english.toLowerCase().includes(filter.toLowerCase()))
          .map((p)=> (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-3 py-4">{p.name.english}</td>
            <td className="px-3 py-4">{p.type.join(' ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
