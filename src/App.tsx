import {Provider, useAtom} from 'jotai'
import {filterAtom} from 'store'
import { FilterInput } from 'components'

function App() {
  const [filter] = useAtom(filterAtom);
  return <main className="w-96 mx-auto mt-10"><FilterInput /> {filter} </main>
}

export default () => <Provider> <App /> </Provider>
