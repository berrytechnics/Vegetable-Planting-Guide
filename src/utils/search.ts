/**
 * Performs a simple partial match search on a string
 * @param searchTerm - The term to search for
 * @param text - The text to search in
 * @returns boolean indicating if there's a match
 */
export function fuzzySearch(searchTerm: string, text: string): boolean {
  if (!searchTerm) return true;
  return text.toLowerCase().includes(searchTerm.toLowerCase());
}
