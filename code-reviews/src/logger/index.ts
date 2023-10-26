// Logger goes here
// You can modify this as you see fit

export default function logger (eventInfo: string)  {
   const timestamp = new Date().toISOString()
   const logMessage = `[${timestamp}] Event: ${eventInfo}`
   console.log(logMessage)
}