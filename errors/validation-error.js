module.exports.ValidationError = class ValidationError {

    constructor(message, mode){
       this.message = message
       this.mode = mode
    }
}