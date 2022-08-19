import {atom, Provider, useAtom} from 'jotai';

const pokemmonAtom = atom<any[]>([])
const filterAtom = atom<string>('')

function FilterInput() {
  const [filter, updateFilter] = useAtom(filterAtom);
  const inputClasses = "text-sm sm:text-base relative w-full border rounded-lg placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
  return <input className={inputClasses} type="text" value={filter} onChange={(e) => updateFilter(e.target.value)} />
}

function App() {
  const [filter] = useAtom(filterAtom);
  return <main className="w-96 mx-auto mt-10"><FilterInput /> {filter} </main>
}

export default App
