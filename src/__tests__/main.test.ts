import { getGreeting } from '../main';

describe('main', () => {
  describe('getGreeting', () => {
    it('should return with name', () => {
      expect(getGreeting('World')).toEqual('Hello World!!');
    });
  });
});
