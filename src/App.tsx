import { Provider } from 'jotai'
import { FilterInput } from 'components'
import { List } from 'components/List/List';

function App() {
  return <main className="w-96 mx-auto mt-10"><FilterInput /> <List /> </main>
}

export default () => <Provider> <App /> </Provider>
