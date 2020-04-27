function validateUserInput(inputValue: string): boolean {
  const whiteSpaceRegex = /^\s*$/;
  if (!whiteSpaceRegex.test(inputValue)) return true;
  return false;
}

export default validateUserInput;
