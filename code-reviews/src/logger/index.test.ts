import logger from './index'
describe('logger', () => {
   it('should log the provided text with timestamp', () => {
      const spy = jest.spyOn(console, 'log');
      const text = 'Hello, world!';
      const mockDate = new Date(2023, 9, 18, 12, 0, 0);
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
      expect(spy).toHaveBeenCalledWith(`${mockDate} - ${text}`);
      spy.mockRestore();
   });
});
