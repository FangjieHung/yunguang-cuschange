import { MaskIdPipe } from './mask-id.pipe';

describe('MaskIdPipe', () => {
  let pipe: MaskIdPipe;

  beforeEach(() => {
    pipe = new MaskIdPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should mask all but last 4 characters', () => {
    const result = pipe.transform('1234567890123456');
    expect(result).toEqual('************3456');
  });

  it('should handle custom showLast length', () => {
    const result = pipe.transform('1234567890123456', 6);
    expect(result).toEqual('**********123456');
  });

  it('should return empty string for null', () => {
    const result = pipe.transform(null);
    expect(result).toEqual('');
  });

  it('should return empty string for undefined', () => {
    const result = pipe.transform(undefined);
    expect(result).toEqual('');
  });

  it('should return original value if length <= showLast', () => {
    const result = pipe.transform('ABC', 4);
    expect(result).toEqual('ABC');
  });

  it('should return original value if length equals showLast', () => {
    const result = pipe.transform('ABCD', 4);
    expect(result).toEqual('ABCD');
  });

  it('should handle empty string', () => {
    const result = pipe.transform('');
    expect(result).toEqual('');
  });

  it('should mask single character with showLast 0', () => {
    const result = pipe.transform('A', 0);
    expect(result).toEqual('*A');
  });
});
