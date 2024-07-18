export const cls = (input: string) =>
  input
    .replace(/\s+/gm, ' ')
    .split(' ')
    .filter((cond: unknown) => typeof cond === 'string')
    .join(' ')
    .trim()
