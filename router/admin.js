const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')
const cekLogin = require('../middleware/cekLogin.js')
const cekAdmin = require('../middleware/cekAdmin.js')

server.get('/admin/dashboardAdmin',controllers.admin.dashboardAdmin)
<<<<<<< HEAD
server.get('/admin/dosenPengampu',controllers.admin.dosenPengampu)
server.get('/admin/Pemrograman_Web/editDosenPengampu',controllers.admin.editDosenPengampu)
server.get('/admin/Pemrograman_Web/metodeRPS',controllers.admin.metodeRPS)
server.get('/admin/Pemrograman_Web/petaCPL-CPMK',controllers.admin.petaCPLCPMK)
server.get('/admin/Pemrograman_Web/tambahDosenPengampu',controllers.admin.tambahDosenPengampu)
server.get('/admin/listRPS',controllers.admin.tambahDosenPengampu)
server.get('/admin/Rekayasa_Perangkat_Lunak/editDosenPengampu',controllers.admin.editDosenPengampu)
server.get('/admin/Rekayasa_Perangkat_Lunak/metodeRPS',controllers.admin.metodeRPS)
server.get('/admin/Rekayasa_Perangkat_Lunak/petaCPL-CPMK',controllers.admin.petaCPLCPMK)
server.get('/admin/Rekayasa_Perangkat_Lunak/tambahDosenPengampu',controllers.admin.tambahDosenPengampu)
server.get('/admin/Rekayasa_Perangkat_Lunak/dosenPengampu',controllers.admin.dosenPengampu)

=======
server.get('/admin/DosenPengampu',controllers.admin.dosenPengampu)
server.get('/admin/editDosenPengampu',controllers.admin.editDosenPengampu)
server.get('/admin/metodeRPS',controllers.admin.metodeRPS)
server.get('/admin/petaCPL-CPMK',controllers.admin.petaCPLPMK)
server.get('/admin/tambahDosenPengampu',controllers.admin.tambahDosenPengampu)
>>>>>>> ca3a96ae168dfa51070fe2af6a68d362625882b7

module.exports = server