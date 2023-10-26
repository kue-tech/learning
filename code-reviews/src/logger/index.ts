const logger = {
   getCurrentDateTime: () => {
      const now = new Date();
      return now.toISOString().slice(0, 19).replace("T", " ");
   },
   info: (message: string) => {
      const dateTime = logger.getCurrentDateTime();
      console.log(`[${dateTime}][INFO] ${message}`);
   },
   error: (message: string) => {
      const dateTime = logger.getCurrentDateTime();
      console.error(`[${dateTime}][ERROR] ${message}`);
   }
}

export default logger