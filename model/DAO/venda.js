/*****************************************************************************************************************
 * Objetivo: Arquivo responsável por criar a interação com o banco de dados MySQL para fazer o CRUD de vendas.
 * Autor: Mariana Alves.
 * Data: 04/06/2024.
 * Versão: 1.0
 ****************************************************************************************************************/

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const selectAllVendas = async function(){
  try {
    let sql = 'SELECT * FROM tbl_vendas ORDER BY id DESC'
      let rsVendas = await prisma.$queryRawUnsafe(sql)

      if (rsVendas.length > 0)
            return rsVendas
        else
            return false
    } catch (error) {
        return false
    }
}

const selectByIdVendas = async function(id) {
    try {
        let sql = 'SELECT * FROM tbl_vendas WHERE id =${id}'
          let rsVendas = await prisma.$queryRawUnsafe(sql)
        return rsVendas

    } catch (error) {
        return false
    }
}

// delete/put: método put apenas trocando o status, para "esconder" um admin filtrando pelo ID
const updateDeleteVendas = async(id) => {
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
const updateRecoverVendas = async(id) => {
    try {
        let sql = `update tbl_vendas set status = true where id = ${id}`

        // executa o scriptSQL no BD e recebe o retorno dos dados na variável
        let rsVendas = await prisma.$executeRawUnsafe(sql)
        
        return rsVendas

    } catch (error) {
        return false
    }
}

const insertVendas = async function(dadosEndereco) {}
const updateVendas = async function(){}

module.exports = {
    insertVendas,
    updateVendas,
    updateDeleteVendas,
    updateRecoverVendas,
    selectAllVendas,
    selectByIdVendas
}