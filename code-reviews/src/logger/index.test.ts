import logger from '../logger'

describe('Logger Tests', () => {
   it('should return current date and time in ISO format', () => {
      const dateTime = logger.getCurrentDateTime();
      const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
      expect(dateTime).toMatch(regex);
   });

   it('should log an info message', () => {
      const spyConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
      logger.info('This is an info message');
      const dateTime = logger.getCurrentDateTime();
      expect(spyConsoleLog).toHaveBeenCalledWith(`[${dateTime}][INFO] This is an info message`);
      spyConsoleLog.mockRestore();
   });

   it('should log an error message', () => {
      const spyConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
      logger.error('This is an error message');
      const dateTime = logger.getCurrentDateTime();
      expect(spyConsoleError).toHaveBeenCalledWith(`[${dateTime}][ERROR] This is an error message`);
      spyConsoleError.mockRestore();
   });
});
