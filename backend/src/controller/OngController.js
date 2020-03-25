const crypto = require('crypto')

const connection = require('../database/connection') //Para conexão com o banco

module.exports = {
    
    async index(request, response){
        const ongs = await connection('ongs').select('*')
    
        return response.json(ongs)
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body

        const id = crypto.randomBytes(4).toString('HEX') /*Vai gerar 4 letras randomicamente*/

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id })
    }
}

