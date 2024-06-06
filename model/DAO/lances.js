/****************************************************************************************************************
 * Objetivo: Arquivo responsável por criar a interação com o banco de dados MySQL para fazer o CRUD de lances.
 * Autor: Mariana Alves.
 * Data: 04/06/2024.
 * Versão: 1.0
 ****************************************************************************************************************/

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const insertLances = async function(){}
const selectAllLances = async function(){}
const selectByIdLances = async function(){}
const deleteLances = async () => {}
const updateLances = async function(){}

module.exports = {
    insertLances,
    updateLances,
    selectAllLances,
    selectByIdLances,
    deleteLances
}