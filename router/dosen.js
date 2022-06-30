const express = require('express')
const server = express.Router()
const controllers = require('../controllers/index.js')
const cekLogin = require('../middleware/cekLogin.js')
const cekDosenPengampu = require('../middleware/cekDosenPengampu.js')

server.get('/dosen/dashboardDosen',controllers.dosen.dashboardDosen)
server.get('/dosen/listRPS',controllers.dosen.listRPS)
server.get('/dosen/tambahRPS',controllers.dosen.tambahRPS)
server.get('/dosen/detailRPS',controllers.dosen.detailRPS)
server.get('/dosen/CPMK',controllers.dosen.cpmk)
server.get('/dosen/tambahCPMK',controllers.dosen.tambahCPMK)
server.get('/dosen/editCPMK',controllers.dosen.editCPMK)
server.get('/dosen/referensi',controllers.dosen.referensi)
server.get('/dosen/editReferensi',controllers.dosen.editReferensi)
server.get('/dosen/tambahReferensi',controllers.dosen.tambahReferensi)
server.get('/dosen/komponenPenilaian',controllers.dosen.komponenPenilaian)
server.get('/dosen/editKomponenPenilaian',controllers.dosen.editKomponenPenilaian)
server.get('/dosen/tambahKomponenPenilaian',controllers.dosen.tambahKomponenPenilaian)
server.get('/dosen/pertemuanMingguan',controllers.dosen.pertemuanMingguan)
server.get('/dosen/editPertemuanMingguan',controllers.dosen.editPertemuanMingguan)
server.get('/dosen/tambahPertemuanMingguan',controllers.dosen.tambahPertemuanMingguan)
server.get('/dosen/editRPS',controllers.dosen.editRPS)


module.exports = server

