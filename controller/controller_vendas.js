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
const message = require('../model/config')

const setInserirNovaVenda = async function (){}
const setAtualizarVenda = async function(){}
const setExcluirVenda = async function(){}
const getListarVenda = async function(){}
const getBuscarVenda = async function(){}

module.exports = {
    setInserirNovaVenda,
    setAtualizarVenda,
    setExcluirVenda,
    getListarVenda,
    getBuscarVenda
  }