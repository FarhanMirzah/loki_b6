const models = require('../models/index')
const bcrypt = require('bcryptjs')

const controllers = {}

controllers.dashboardDosen = async(req, res) => {
    res.render("dosen/dashboardDosen")
}

controllers.listRPS = async(req, res) => {
    models.course_plans.hasMany(models.course_plan_lecturers, {foreignKey: "id"})
    models.course_plan_lecturers.belongsTo(models.course_plans, {foreignKey: "course_plan_id"})
    const RPSDsn = await models.course_plan_lecturers.findAll({
        where : {
            lecturer_id : id = 2
        },
        atribute : ['course_id', 'lecturer_id'],
        include : {
            model : models.course_plans,
            atribute : ['id', 'code', 'name', 'credit']
        }
    })
    res.render("dosen/listRPS", {RPSDsn})
    
}

controllers.tambahRPS = async(req, res) => {
    res.render("dosen/tambahRPS")
}

controllers.detailRPS = async(req, res) => {
    res.render("dosen/Pemrograman_Web/detailRPS")
}

controllers.detailRPS = async(req, res) => {
    res.render("dosen/Pemrograman_Web/editRPS")
}

controllers.cpmk = async(req, res) => {
    res.render("dosen/Pemrograman_Web/CPMK")
}

controllers.referensi = async(req, res) => {
    res.render("dosen/Pemrograman_Web/referensi")
}

controllers.komponenPenilaian = async(req, res) => {
    res.render("dosen/Pemrograman_Web/komponenPenilaian")
}

controllers.pertemuanMingguan = async(req, res) => {
    res.render("dosen/Pemrograman_Web/pertemuanMingguan")
}


module.exports = controllers