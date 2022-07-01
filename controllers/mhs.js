const models = require('../models/index')

const controllers = {}

controllers.home = async(req, res) => {
    res.render("mahasiswa/dashboardMahasiswa" )
}

controllers.listRPS = async (req, res) => {
    const RPS = await models.course_plans.findAll({})
    const dosen = await models.course_plan_lecturers.findAll({
        include:[{
            model:models.lecturers
        }]
    })
    
    res.render("mahasiswa/listRPS", {RPS,dosen} )
}

controllers.detailRPS = async (req, res) => {
    const id = req.query.id;
    const course = await models.course_plans.findOne({ 
        where: { id: id },
        include:[{
            model:models.courses
        }]
    
    });
    const dosen = await models.course_plan_lecturers.findAll({
        include:[{
            model:models.lecturers
        }],
        where:{
            course_plan_id:id
        }
    })
    const course_id = course.course_id;
    const curricula = await models.courses.findOne({
        where:{
            id : course_id
        }
    })
    const cpmk = await models.course_lo_details.findAll({
        
    })
    const cpl = await models.curriculum_los.findAll({
        where:{
            id : curricula.curriculum_id
        }
    })
    res.render("mahasiswa/Pemrograman_Web/detailRPS",{course,dosen})
}

controllers.hasilPencarian = async(req, res) => {
    res.render("mahasiswa/hasilPencarian")
}

module.exports = controllers