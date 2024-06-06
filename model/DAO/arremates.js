/****************************************************************************************************************
 * Objetivo: Arquivo responsável por criar a interação com o banco de dados MySQL para fazer o CRUD de arremates.
 * Autor: Mariana Alves.
 * Data: 04/06/2024.
 * Versão: 1.0
 ****************************************************************************************************************/

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const selectAllArremates = async function() {
    try {
        let sql = 'SELECT * FROM tbl_arremates ORDER BY id DESC'

        let rsArremates = await prisma.$queryRawUnsafe(sql)
        if (rsArremates.length > 0)
            return rsArremates
        else
            return false
    } catch (error) {
        return false
    }
}

const selectByIdArremates = async function(id) {
    try {
        let sql = 'SELECT * FROM tbl_arremates WHERE id =${id}'
        let rsArremates = await prisma.$queryRawUnsafe(sql)

        return rsArremates
    } catch (error) {
        return false
    }
}

// delete/put: método put apenas trocando o status, para "esconder" um admin filtrando pelo ID
const updateDeleteArremates = async(id) => {
    try {
        let sql = `update tbl_vendas set status = false where id = ${id}`

        // executa o scriptSQL no BD e recebe o retorno dos dados na variável
        let rsVendas = await prisma.$executeRawUnsafe(sql)
        
        return rsVendas

    } catch (error) {
        return false
    }
}

// put: método put apenas trocando o status, para aparecer um admin antes escondido
const updateRecoverArremates = async(id) => {
    try {
        let sql = `update tbl_vendas set status = true where id = ${id}`

        // executa o scriptSQL no BD e recebe o retorno dos dados na variável
        let rsVendas = await prisma.$executeRawUnsafe(sql)
        
        return rsVendas

    } catch (error) {
        return false
    }
}

const insertArremates = async function() {}
const updateArremates= async function() {}

module.exports = {
    insertArremates,
    updateArremates,
    updateDeleteArremates,
    updateRecoverArremates,
    selectAllArremates,
    selectByIdArremates
}