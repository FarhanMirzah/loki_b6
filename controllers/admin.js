const models = require('../models/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const controllers = {}

controllers.dashboardAdmin = async(req, res) => {
    res.render("admin/dashboardAdmin")
}

controllers.editDosenPengampu = async(req, res) => {
    res.render("admin/Pemrograman_Web/editDosenPengampu")
}

controllers.dosenPengampu = async(req, res) => {
    res.render("admin/Pemrograman_Web/dosenPengampu")
}



controllers.metodeRPS = async(req, res) => {
    res.render("admin/Pemrograman_Web/metodeRPS")
}

controllers.petaCPLCPMK = async(req, res) => {
    res.render("admin/Pemrograman_Web/petaCPL-CPMK")
}

controllers.tambahDosenPengampu = async(req, res) => {
    res.render("admin/Pemrograman_Web/tambahDosenPengampu")
}

controllers.editDosenPengampu = async(req, res) => {
    res.render("admin/Rekayasa_Perangkat_Lunak/editDosenPengampu")
}

controllers.metodeRPS = async(req, res) => {
    res.render("admin/Rekayasa_Perangkat_Lunak/metodeRPS")
}

controllers.petaCPLPMK = async(req, res) => {
    res.render("admin/Rekayasa_Perangkat_Lunak/petaCPL-CPMK")
}

controllers.tambahDosenPengampu = async(req, res) => {
    res.render("admin/Rekayasa_Perangkat_Lunak/tambahDosenPengampu")
}

controllers.dosenPengampu = async(req, res) => {
<<<<<<< HEAD
    res.render("admin/Rekayasa_Perangkat_Lunak/dosenPengampu")
=======
    res.render("admin/Rekayasa_Perangkat_Lunak/tambahDosenPengampu")
>>>>>>> ca3a96ae168dfa51070fe2af6a68d362625882b7
}

module.exports = controllers