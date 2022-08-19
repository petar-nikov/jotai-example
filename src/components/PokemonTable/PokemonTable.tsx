import { useAtom } from 'jotai'
import { filteredPokemonAtom } from "store"

export const PokemonTable = () => {
  const [filtered] = useAtom(filteredPokemonAtom)
  return (
    <table className="w-full">
      <tbody className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <tr className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <th scope="col" className="px-3 py-4">Name</th>
          <th scope="col" className="px-3 py-4">Type</th>
        </tr>
        {filtered
          .map((p)=> (
          <tr key={p.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-3 py-4">{p.name.english}</td>
            <td className="px-3 py-4">{p.type.join(' ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
