const expect = require('expect')

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non string value', () => {
    const result = isRealString(98);
    expect(result).toBe(false);
  });
  it('should reject string with only spaces', () => {
    const result = isRealString('     ');
    expect(result).toBe(false);
  });
  it('should allow strings with non-space characters', () => {
    const result = isRealString('  hello     ');
    expect(result).toBe(true);
  });
  it('should allow strings with spaces between words', () => {
    const result = isRealString('hello world');
    expect(result).toBe(true);
  });
});