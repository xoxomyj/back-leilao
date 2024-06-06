/******************************************************************************
* Objetivo: criar uma api para responder os dados da empresa Leilão Expresso
* Data: 28/05/2024
* Autor: Gabriela Fernandes, Eduardo Gonçalves e Mariana Sousa
* Versão: 1.0
*****************************************************************************/

// imports de bibliotecas
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// criando objeto app
const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', '*')
    app.use(cors())
    // app.use(express.json());
    next()
})

// cria um objeto do tipo JSON para receber os dados via body nas requisições POST ou PUT
const bodyParserJSON = bodyParser.json()

const controllerVendas = require('./controller/controller-vendas.js')
const controllerLances = require('./controller/controller-lances.js')
const controllerArremates = require('./controller/controller-arremates.js')

// ********************* VENDAS ******************************

app.get('/v1/leilao_expresso/vendas', cors(), async(request, response, next) => {
    // chama a função para retornar os dados das vendas
    let dadosVendas = await controllerVendas.getListarVendas()
    response.status(dadosVendas.status_code)
    response.json(dadosVendas)
})

app.get('/v1/leilao_expresso/vendas/:id', cors(), async(request, response, next) => {
    // recebe o id da requisição das vendas
    let idVendas = request.params.id

    let dadosVendas = await controllerVendas.getBuscarVendas(idVendas)

    response.status(dadosVendas.status_code)
    response.json(dadosVendas)
})

app.put('/v1/leilao_expresso/vendas/excluir/:id', cors(), async(request, response, next) => {
    // para "excluir" uma venda
    let vendas = request.params.id
    let dadosVendas = await controllerVendas.setExcluirVendas(vendas)

    response.status(dadosVendas.status_code)
    response.json(dadosVendas)
})

// ********************* LANCES ******************************

app.get('/v1/leilao_expresso/lances', cors(), async(request, response, next) => {
    // chama a função para retornar os dados dos lances
    let dadosLances = await controllerLances.getListarLances()

    response.status(dadosLances.status_code)
    response.json(dadosLances)
})

app.get('/v1/leilao_expresso/lances/:id', cors(), async(request, response, next) => {
    // recebe o id da requisição das vendas
    let idLances = request.params.id
    let dadosLances = await controllerLances.getBuscarLances(idLances)

    response.status(dadosLances.status_code)
    response.json(dadosLances)
})

app.put('/v1/leilao_expresso/lances/excluir/:id', cors(), async(request, response, next) => {
    // para "excluir" um lance
    let lances = request.params.id
    let dadosLances = await controllerLances.setExcluirLances(lances)

    response.status(dadosLances.status_code)
    response.json(dadosLances)
})

// ********************* ARREMATES ******************************

app.get('/v1/leilao_expresso/arremates', cors(), async(request, response, next) => {
    // chama a função para retornar os dados dos arremates
    let dadosArremates = await controllerArremates.getListarArremates()

    response.status(dadosArremates.status_code)
    response.json(dadosArremates)
})

app.get('/v1/leilao_expresso/arremates/:id', cors(), async(request, response, next) => {
    // recebe o id da requisição dos arremates
    let idArremates = request.params.id
    let dadosArremates = await controllerArremates.getBuscarArremates(idArremates)

    response.status(dadosArremates.status_code)
    response.json(dadosArremates)
})

app.put('/v1/leilao_expresso/arremates/excluir/:id', cors(), async(request, response, next) => {
    // para "excluir" um lance
    let arremates = request.params.id
    let dadosArremates = await controllerArremates.setExcluirArremates(arremates)

    response.status(dadosArremates.status_code)
    response.json(dadosArremates)
})


