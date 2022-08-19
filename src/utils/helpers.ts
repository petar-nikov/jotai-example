export const URL = 'https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json'

export function styleMapToString(stylesMap: Map<string, string>): string {
  return Array.from(stylesMap).join(' ')
}
