export default function transformLangText(string: string, maxLength: number): string {
  if (string.length > maxLength) {
    return string.slice(0, maxLength).trim() + '…';
  }

  return string;
}
