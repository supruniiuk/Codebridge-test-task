import { LimitSymbolsPipe } from '../limit-symbols.pipe';

describe('DateSuffixPipe', () => {
  const pipe = new LimitSymbolsPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('limits string', () => {
    const str= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus qui nam quam eveniet, accusamus aspernatur possimus blanditiis voluptatem. Quas, sit.';
    expect(pipe.transform(str, 20)).toBe(str.slice(0, 20) + "...");
  });
});

