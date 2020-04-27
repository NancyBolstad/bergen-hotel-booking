import validateUserInput from '../validateUserInput';

const invalidInput: string = '   ';
const validInput: string = ' hello world';

describe('validateUserInput', () => {
  it('should return false in jest when input is empty', () => {
    expect(validateUserInput(invalidInput)).toEqual(false);
  });
  it('should return true in jest when input is not empty', () => {
    expect(validateUserInput(validInput)).toEqual(true);
  });
});
