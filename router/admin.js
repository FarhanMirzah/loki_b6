const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')
const cekLogin = require('../middleware/cekLogin.js')
const cekAdmin = require('../middleware/cekAdmin.js')

server.get('/admin/dashboardAdmin',controllers.admin.dashboardAdmin)
server.get('/admin/Pemrograman_Web/dosenPengampu',controllers.admin.dosenPengampu)
server.get('/admin/Pemrograman_Web/editDosenPengampu',controllers.admin.editDosenPengampu)
server.get('/admin/Pemrograman_Web/metodeRPS',controllers.admin.metodeRPS)
server.get('/admin/Pemrograman_Web/petaCPL-CPMK',controllers.admin.petaCPLCPMK)
server.get('/admin/Pemrograman_Web/tambahDosenPengampu',controllers.admin.tambahDosenPengampu)
server.get('/admin/listRPS',controllers.admin.listRPS)


module.exports = server