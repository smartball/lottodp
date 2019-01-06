import winston from 'winston'
import { config } from 'config'

let logger

if (config.stage === 'develop') {
  logger = console
} else {
  // const papertrailTransport = new winston.transports.Papertrail({
  //   host: config.host,
  //   port: config.port
  // })

  // logger = new winston.Logger({
  //   transports: [papertrailTransport]
  // })
}

export default logger
