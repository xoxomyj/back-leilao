/*****************************************************************************************************************
 * Objetivo: Arquivo responsável por criar a interação com o banco de dados MySQL para fazer o CRUD de vendas.
 * Autor: Mariana Alves.
 * Data: 04/06/2024.
 * Versão: 1.0
 ****************************************************************************************************************/

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const insertVendas = async function(){}
const selectAllVendas = async function(){}
const selectByIdVendas = async function(){}
const deleteVendas = async () => {}
const updateVendas = async function(){}

module.exports = {
    insertVendas,
    updateVendas,
    selectAllVendas,
    selectByIdVendas,
    deleteVendas
  }