function sortSentence(s: string): string {
  return s.split(' ').sort((a, b) => Number(a.at(-1)) - Number(b.at(-1))).map(word => word.substring(0, word.length - 1)).join(' ');
};