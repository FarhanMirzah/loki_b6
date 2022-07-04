const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')
const cekLogin = require('../middleware/cekLogin.js')
const cekAdmin = require('../middleware/cekAdmin.js')

server.get('/loginAdmin',controllers.auth.loginAdmin)
server.get('/admin/dashboardAdmin',controllers.admin.dashboardAdmin)
server.get('/admin/listRPS',controllers.admin.listRPS)
server.get('/admin/dosenPengampu',controllers.admin.dosenPengampu)
server.get('/admin/editDosenPengampu',controllers.admin.editDosenPengampu)
server.get('/admin/metodeRPS',controllers.admin.metodeRPS)
server.get('/admin/petaCPL-CPMK',controllers.admin.petaCPLCPMK)
server.get('/admin/tambahDosenPengampu',controllers.admin.tambahDosenPengampu)


module.exports = server