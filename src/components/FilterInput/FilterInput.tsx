import { useAtom } from 'jotai';
import { filterAtom } from 'store';
import { styleMapToString } from 'utils';

export const FilterInput = () => {
  const [filter, updateFilter] = useAtom(filterAtom);
  const stylesMap = new Map ([
    ['base', 'text-sm relative w-full border rounded-lg'],
    ['placeholder', 'placeholder-gray-400'],
    ['focus', 'focus:border-indigo-400 focus:outline-none focus:border-indigo-400'],
    ['padding', 'py-2 pr-2 pl-12'],
  ]);

  return <input
    className={styleMapToString(stylesMap)}
    type="text" value={filter}
    onChange={(e) => updateFilter(e.target.value)} />
}
