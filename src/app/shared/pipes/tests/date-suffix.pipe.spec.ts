import { DateSuffixPipe } from '../date-suffix.pipe';

describe('DateSuffixPipe', () => {
  const pipe = new DateSuffixPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('tranforms date "th"', () => {
    expect(pipe.transform('2022-05-24T13:23:19.000Z')).toBe('May 24th, 2022');
  });

  it('tranforms date "st"', () => {
    expect(pipe.transform('2022-05-01T13:23:19.000Z')).toBe('May 1st, 2022');
  });

  it('tranforms date "nd"', () => {
    expect(pipe.transform('2022-05-02T13:23:19.000Z')).toBe('May 2nd, 2022');
  });

  it('tranforms date "rd"', () => {
    expect(pipe.transform('2022-05-03T13:23:19.000Z')).toBe('May 3rd, 2022');
  });
});
