/******************************************************************************************************
 * Objetivo: Arquivo responsável pela interacão entre o App e a Model, que teremos 
 todas as tratativas e regras de negócio para o CRUD de lances.
 * DATA: 23/04/2024
 * Autor: Mariana Alves.
 * Versão: 1.0
******************************************************************************************************/

const lancesDAO = require('../model/DAO/lances.js')
const usuariosDAO = require('../model/DAO/usuario.js')
const lotesDAO = require('../model/DAO/lotes.js')

const getListarLances = async function() {
    let lancesJSON = {}
    let dadosLances = await
    lancesDAO.selectAllLances()

    if (dadosLances) {
       lancesJSON.lances = dadosLances
       lancesJSON.quantidade = dadosLances.length
       lancesJSON.status_code = 200
        return lancesJSON
    } else {
        return false
    }
}

const getBuscarLances = async function(id) {
    let idLance = id
    let lancesJSON = {}

    if (idLance == '' || idLance == undefined || isNaN(idLance)) {
        return message.ERROR_INVALID_ID
    } else {
        let dadosLancesPorId = await
        lancesDAO.selectByIdLances(idLance)
        if (dadosLancesPorId) {
            if (dadosLancesPorId.length > 0) {
               lancesJSON.lances = dadosLancesPorId
               lancesJSON.status_code = 200
                return lancesJSON  //200
            } else {
                return message.ERROR_NOT_FOUND //400
            }
        } else {
            return message.ERROR_INTERNAL_SERVER_DB //500
        }
    }
}


const setEditarExcluirLances = async function(id) {
    try {
        let lances  = id
        let valLances = await getBuscarVendas(vendas)
        let resultDadosLances

        if (lances == '' || lances == undefined || isNaN(lances)) {
            return message.ERROR_INVALID_ID // 400
        } else if(valLances.status == false){
            return message.ERROR_NOT_FOUND // 404
        }else {
            //envia os dados para a model inserir no BD
            resultDadosLances = await lancesDAO.updateDeleteLances(lances)

            if (resultDadosLances)
                return message.SUCCESS_DELETED_ITEM // 200
            else
                return message.ERROR_INTERNAL_SERVER_DBA // 500
        
    }
} catch (error) {
        message.ERROR_INTERNAL_SERVER // 500
    }
}

const setEditarRenovarLances = async (id) => {
    try {
        let lances = id
        let resultDadosLances

        if (lances == '' || lances == undefined || isNaN(lances)) {
            return message.ERROR_INVALID_ID // 400
        }else {

            //envia os dados para a model inserir no BD
            resultDadosLances = await lancesDAO.updateRecoverLances(lances)
            //Valida se o BD inseriu corretamente os dados
            if (resultDadosLances)
                return message.SUCCESS_UPDATED_ITEM // 200
            else
                return message.ERROR_INTERNAL_SERVER_DBA // 500

        }
        
    } catch (error) {
        message.ERROR_INTERNAL_SERVER // 500
    }
}

const setInserirNovoLance = async function() {}
const setAtualizarLance = async function() {}

module.exports = {
    setInserirNovoLance,
    setAtualizarLance,
    setEditarExcluirLances,
    setEditarRenovarLances,
    getBuscarLances,
    getListarLances
}