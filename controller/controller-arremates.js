/******************************************************************************************************
 * Objetivo: Arquivo responsável pela interacão entre o App e a Model, que teremos 
 todas as tratativas e regras de negócio para o CRUD de arremates.
 * DATA: 04/06/2024.
 * Autor: Mariana Alves.
 * Versão: 1.0
******************************************************************************************************/

const arrematesDAO = require('../model/DAO/arremates.js')
const vendasDAO = require('../model/DAO/venda.js')
const lotesDAO = require('../model/DAO/lotes.js')

const getListarArremates = async function() {
    let arrematesJSON = {}
    let dadosArremates = await
    arrematesDAO.selectAllArremates()

    if (dadosArremates) {
       arrematesJSON.arremates = dadosArremates
       arrematesJSON.quantidade = dadosArremates.length
       arrematesJSON.status_code = 200
        return arrematesJSON
    } else {
        return false
    }
}

const getBuscarArremates = async function(id) {
    let idArremates = id
    let arrematesJSON = {}

    if (idArremates == '' || idArremates == undefined || isNaN(idArremates)) {
        return message.ERROR_INVALID_ID
    } else {
        let dadosArrematesPorId = await
        arrematesDAO.selectByIdArremates(idArremates)
        if (dadosArrematesPorId) {
            if (dadosArrematesPorId.length > 0) {
               arrematesJSON.arremates = dadosArrematesPorId
               arrematesJSON.status_code = 200
                return arrematesJSON  //200
            } else {
                return message.ERROR_NOT_FOUND //400
            }
        } else {
            return message.ERROR_INTERNAL_SERVER_DB //500
        }
    }
}

const setEditarExcluirArremates = async function(id) {
    try {
        let arremates = id
        let valArremates = await getBuscarVendas(vendas)
        let resultDadosArremates

        if (vendas == '' || vendas == undefined || isNaN(vendas)) {
            return message.ERROR_INVALID_ID // 400
        } else if(valArremates.status == false){
            return message.ERROR_NOT_FOUND // 404
        }else {
            //envia os dados para a model inserir no BD
            resultDadosArremates = await arrematesDAO.updateDeleteArremates(vendas)
            //envia os dados para a model inserir no BD
            resultDadosArremates = await arrematesDAO.updateArremates(arremates)

            if (resultDadosArremates)
                return message.SUCCESS_DELETED_ITEM // 200
            else
                return message.ERROR_INTERNAL_SERVER_DBA // 500
        
    }
} catch (error) {
        message.ERROR_INTERNAL_SERVER // 500
    }
}

const setEditarRenovarArremates = async (id) => {
    try {
        let arremates = id
        let resultDadosArremates

        if (arremates == '' || arremates == undefined || isNaN(arremates)) {
            return message.ERROR_INVALID_ID // 400
        }else {

            //envia os dados para a model inserir no BD
            resultDadosArremates = await arrematesDAO.updateRecoverArremates(arremates)
            //Valida se o BD inseriu corretamente os dados
            if (resultDadosArremates)
                return message.SUCCESS_UPDATED_ITEM // 200
            else
                return message.ERROR_INTERNAL_SERVER_DBA // 500
        }
        
    } catch (error) {
        message.ERROR_INTERNAL_SERVER // 500
    }
}

const setInserirNovoArremate = async function(){}
const setAtualizarArremate = async function(){}

module.exports = {
    setInserirNovoArremate,
    setAtualizarArremate,
    setEditarExcluirArremates,
    setEditarRenovarArremates,
    getBuscarArremates,
    getListarArremates
}

