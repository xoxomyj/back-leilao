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

const setInserirNovoLances = async function (){}
const setAtualizarLances = async function(){}
const setExcluirLances = async function(){}
const getListarLances = async function(){}
const getBuscarLances = async function(){}

module.exports = {
    setInserirNovoLances,
    setAtualizarLances,
    setExcluirLances,
    getListarLances,
    getBuscarLances
  }