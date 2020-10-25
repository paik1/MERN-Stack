import bunyan from 'bunyan'
const log = bunyan.createLogger({ name: 'myapp' })

module.exports = log
