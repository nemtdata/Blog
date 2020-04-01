import { LimitPipe } from './Limit.pipe';

describe('Limit', () => {
  it('create an instance', () => {
    const pipe = new LimitPipe ();
    expect(pipe).toBeTruthy();
  });
});
