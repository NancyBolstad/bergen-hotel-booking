function charactersLengthErrorMessage(filedName: string, min: number, max: number): string {
  return `${filedName} needs to be between ${min} and ${max} characters long.`;
}

export default charactersLengthErrorMessage;
