/****************************************************************************************************************
 * Objetivo: Arquivo responsável por criar a interação com o banco de dados MySQL para fazer o CRUD de arremates.
 * Autor: Mariana Alves.
 * Data: 04/06/2024.
 * Versão: 1.0
 ****************************************************************************************************************/

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const insertArremates = async function(){}
const selectAllArremates = async function(){}
const selectByIdArremates = async function(){}
const deleteArremates = async () => {}
const updateArremates = async function(){}

module.exports = {
    insertArremates,
    updateArremates,
    selectAllArremates,
    selectByIdArremates,
    deleteArremates
  }