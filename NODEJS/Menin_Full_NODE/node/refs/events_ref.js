const eventEmitter = require('events');

class Logger extends eventEmitter {

    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const logger = new Logger();


logger.on('message', data => {
    console.log(data)

})
logger.log('hello world')
