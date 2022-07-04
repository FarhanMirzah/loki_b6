const models = require('../models/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const controllers = {}

controllers.dashboardAdmin = async(req, res) => {
    res.render("admin/dashboardAdmin")
}

controllers.listRPS = async(req, res) => {
    const RPSAdmin = await models.course_plan_lecturers.findAll({
        atribute : ['course_id', 'lecturer_id'],
        include : {
            model : models.course_plans,
            atribute : ['id', 'code', 'name', 'credit']
        }
    })
    res.render("admin/listRPS", {RPSAdmin})
}

controllers.editDosenPengampu = async(req, res) => {
    res.render("admin/Pemrograman_Web/editDosenPengampu")
}

controllers.dosenPengampu = async(req, res) => {
    const id = req.query.id;
    const dosen = await models.course_plan_lecturers.findAll({
        include:[{
            model:models.lecturers
        }],
        where:{
            course_plan_id:id
        }
    })
    res.render("admin/Pemrograman_Web/dosenPengampu", {dosen})
}

controllers.metodeRPS = async(req, res) => {
    res.render("admin/Pemrograman_Web/metodeRPS")
}

controllers.petaCPLCPMK = async(req, res) => {
    const id = req.query.id;
    const course = await models.course_plans.findOne({ 
        where: { id: id },
        include:[{
            model:models.courses
        }]
    
    });
    const course_id = course.course_id;
    const curricula = await models.courses.findOne({
        where:{
            id : course_id
        }
    })
    const cpmk = await models.course_los.findAll({
        where:{
            course_plan_id:id
        },
        include:[{
            model:models.course_lo_details,
        }]
    })
    const cpl = await models.curriculum_los.findAll({
        where:{
            id : curricula.curriculum_id
        }
    })
    res.render("admin/Pemrograman_Web/petaCPL-CPMK", {cpl,cpmk})
}

controllers.tambahDosenPengampu = async(req, res) => {
    res.render("admin/Pemrograman_Web/tambahDosenPengampu")
}
module.exports = controllers