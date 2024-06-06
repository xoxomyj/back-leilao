/******************************************************************************************************
 * Objetivo: Arquivo responsável pela interacão entre o App e a Model, que teremos 
 todas as tratativas e regras de negócio para o CRUD de vendas.
 * DATA: 23/04/2024
 * Autor: Mariana Alves.
 * Versão: 1.0
******************************************************************************************************/

const vendasDAO = require('../model/DAO/venda.js')
const usuariosDAO = require('../model/DAO/usuario.js')
const produtosDAO = require('../model/DAO/produtos.js')
const message = require('../modulo/config.js')

const getListarVendas = async function() {
    let vendasJSON = {}
    let dadosVendas = await
    vendasDAO.selectAllVendas()

    if (dadosVendas) {
      vendasJSON.vendas = dadosVendas
       vendasJSON.quantidade = dadosVendas.length
       vendasJSON.status_code = 200
        return vendasJSON
    } else {
        return false
    }
}

const getBuscarVendas= async function(id) {
    let idVenda = id
    let vendasJSON = {}

    if (idVenda== '' || idVenda == undefined || isNaN(idVenda)) {
        return message.ERROR_INVALID_ID
    } else {

    let dadosVendasPorId = await
    vendasDAO.selectByIdVenda(idVenda)

    if (dadosVendasPorId) {
            if (dadosVendasPorId.length > 0) {
               vendasJSON.usuarios = dadosVendasPorId
               vendasJSON.status_code = 200
                return vendasJSON  //200
            } else {
                return message.ERROR_NOT_FOUND //400
            }
        } else {
            return message.ERROR_INTERNAL_SERVER_DB //500
        }
    }
}

const setEditarExcluirVendas = async function(id) {
    try {
        let vendas = id
        let valVendas = await getBuscarVendas(vendas)
        let resultDadosVendas

        if (vendas == '' || vendas == undefined || isNaN(vendas)) {
            return message.ERROR_INVALID_ID // 400
        } else if(valVendas.status == false){
            return message.ERROR_NOT_FOUND // 404
        }else {
            //envia os dados para a model inserir no BD
            resultDadosVendas = await vendasDAO.updateDeleteVendas(vendas)
            //envia os dados para a model inserir no BD
            resultDadosVendas = await vendasDAO.updateVendas(vendas)

            if (resultDadosVendas)
                return message.SUCCESS_DELETED_ITEM // 200
            else
                return message.ERROR_INTERNAL_SERVER_DBA // 500
        
    }
} catch (error) {
        message.ERROR_INTERNAL_SERVER // 500
    }
}

const setEditarRenovarVendas = async (id) => {
    try {
        let vendas = id
        let resultDadosVenda

        if (vendas == '' || vendas == undefined || isNaN(vendas)) {
            return message.ERROR_INVALID_ID // 400
        }else {

            //envia os dados para a model inserir no BD
            resultDadosVenda = await vendasDAO.updateRecoverVendas(vendas)
            //Valida se o BD inseriu corretamente os dados
            if (resultDadosVenda)
                return message.SUCCESS_UPDATED_ITEM // 200
            else
                return message.ERROR_INTERNAL_SERVER_DBA // 500

        }
        
    } catch (error) {
        message.ERROR_INTERNAL_SERVER // 500
    }
}

const setInserirNovaVendas = async function() {}
const setAtualizarVendas = async function() {}

module.exports = {
    setInserirNovaVendas,
    setAtualizarVendas,
    setEditarExcluirVendas,
    setEditarRenovarVendas,
    getBuscarVendas,
    getListarVendas
}