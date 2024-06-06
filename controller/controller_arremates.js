/******************************************************************************************************
 * Objetivo: Arquivo responsável pela interacão entre o App e a Model, que teremos 
 todas as tratativas e regras de negócio para o CRUD de arremates.
 * DATA: 04/06/2024.
 * Autor: Mariana Alves.
 * Versão: 1.0
******************************************************************************************************/

const arrematesDAO = require('../model/DAO/arremates.js')
const usuariosDAO = require('../model/DAO/vendas.js')
const lotesDAO = require('../model/DAO/lances.js')

const setInserirNovoArremates = async function (){}
const setAtualizarArremates = async function(){}
const setExcluirArremates = async function(){}
const getListarArremates = async function(){}
const getBuscarArremates = async function(){}

module.exports = {
    setInserirNovoArremates,
    setExcluirArremates,
    setAtualizarArremates,
    getListarArremates,
    getBuscarArremates
  }

