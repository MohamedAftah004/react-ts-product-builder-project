export function txtSlicer(txt: string, max: number = 28) {
  if (txt.length >= max) return `${txt.slice(0, max)} ...`;
  return txt;
}
