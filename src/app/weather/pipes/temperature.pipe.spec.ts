import { weatherTextPipe } from './weather-text.pipe';

describe('weatherTextPipe', () => {
  it('create an instance', () => {
    const pipe = new weatherTextPipe();
    expect(pipe).toBeTruthy();
  });
});
