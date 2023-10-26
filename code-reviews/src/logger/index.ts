// Logger goes here
// You can modify this as you see fit

const callback = (type) => {

   return (message, location)=>{

      const path = "src/" + location.split("/src/").pop();
      const body = [new Date(), ' | ', message, ' | ', `Path: ${path}`]

      if (type==='info'){
         console.info('Info | ', ...body)
      }
      if (type==='log'){
         console.log('Log | ', ...body)
      }
      if (type==='warn'){
         console.warn('Warning | ', ...body)
      }
      if (type==='err'){
         console.error('Error | ', ...body)
      }
   }
}

const logger = {
   log: callback('log'),
   info: callback('info'),
   warn:callback('warn'),
   err: callback('err')
}

export default logger