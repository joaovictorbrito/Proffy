//SERVIDOR
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require("./pages")

// configurar nunjucks 
const nunjucks = require('nunjucks')
nunjucks.configure('public_html/src/views', {
    express: server,
    noCache: true,

})

// INICIO E CONFIGURAÇÃO
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public_html"))
// rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)

