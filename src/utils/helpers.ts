export function styleMapToString(stylesMap: Map<string, string>): string {
  return Array.from(stylesMap).join(' ')
}
