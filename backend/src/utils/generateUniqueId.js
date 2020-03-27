const crypto = require('crypto')

module.exports = function gerenateUniqueId(){
    return crypto.randomBytes(4).toString('HEX') /*Vai gerar 4 letras randomicamente*/
}