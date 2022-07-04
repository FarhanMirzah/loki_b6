const models = require('../models/index')
const bcrypt = require('bcryptjs')

const controllers = {}

controllers.dashboardDosen = async(req, res) => {
    res.render("dosen/dashboardDosen")
}

controllers.listRPS = async(req, res) => {
    const id= req.params.id;
    const RPSDsn = await models.course_plan_lecturers.findAll({
        where : {
            lecturer_id : id
        },
        atribute : ['course_id', 'lecturer_id'],
        include : {
            model : models.course_plans,
            atribute : ['id', 'code', 'name', 'credit']
        }
    })
    res.render("dosen/listRPS", {RPSDsn})
    
}

controllers.tambahRPS = async (req, res) => {
//     const id= req.params.id;
//     const { course_id, code, name, alias_name, credit, semester, description } = req.body;
//     try {
//         await models.course_plans.create({
//         code, 
//         name, 
//         alias_name,
//         credit, 
//         semester, 
//         description
//     });
    res.redirect("dosen/tambahRPS")
// } catch (eror){
//     console.log(eror);
// }
}

controllers.detailRPS = async(req, res) => {
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
    const ref = await models.course_plan_references.findAll({
        where:{
            course_plan_id: id
        }
    })
    const asses = await models.course_plan_assessments.findAll({
        where:{
            course_plan_id: id
        }
    })
    const weekMeet = await models.course_plan_details.findAll({
        where:{
            course_plan_id: id
        }
    })
    res.render("dosen/Pemrograman_Web/detailRPS",{course,dosen,cpl,cpmk,ref,asses,weekMeet})
}

controllers.editRPS = async(req, res) => {
    res.render("dosen/Pemrograman_Web/editRPS")
}

controllers.cpmk = async(req, res) => {
    res.render("dosen/Pemrograman_Web/CPMK")
}

controllers.editCPMK = async(req, res) => {
    res.render("dosen/Pemrograman_Web/editCPMK")
}

controllers.tambahCPMK = async(req, res) => {
    const createCPMK = async (req, res) => {
        try {
          await cpmk.create(req.body);
          res.json({
            message: "CPMK Created",
          });
        } catch (err) {
          console.log(err);
        }
      }
}

controllers.referensi = async(req, res) => {
    const id = req.query.id;
    const ref = await models.course_plan_references.findAll({
        where:{
            course_plan_id: id
        }
    })
    res.render("dosen/Pemrograman_Web/referensi", {ref})
}

controllers.editReferensi = async(req, res) => {
    res.render("dosen/Pemrograman_Web/editReferensi")
}

controllers.tambahReferensi = async(req, res) => {
    res.render("dosen/Pemrograman_Web/tambahReferensi")
}

controllers.komponenPenilaian = async(req, res) => {
    const id = req.query.id;
    const asses = await models.course_plan_assessments.findAll({
        where:{
            course_plan_id: id
        }
    })
    res.render("dosen/Pemrograman_Web/komponenPenilaian", {asses})
}

controllers.editKomponenPenilaian = async(req, res) => {
    res.render("dosen/Pemrograman_Web/editKomponenPenilaian")
}

controllers.tambahKomponenPenilaian = async(req, res) => {
    res.render("dosen/Pemrograman_Web/tambahKomponenPenilaian")
}

controllers.pertemuanMingguan = async(req, res) => {
    const id = req.query.id;
    const cpmk = await models.course_los.findAll({
        where:{
            course_plan_id:id
        },
        include:[{
            model:models.course_lo_details,
        }]
    })
    const weekMeet = await models.course_plan_details.findAll({
        where:{
            course_plan_id: id
        }
    })
    res.render("dosen/Pemrograman_Web/pertemuanMingguan", {cpmk,weekMeet})
}

controllers.editPertemuanMingguan = async(req, res) => {
    res.render("dosen/Pemrograman_Web/editPertemuanMingguan")
}

controllers.tambahPertemuanMingguan = async(req, res) => {
    res.render("dosen/Pemrograman_Web/tambahPertemuanMingguan")
}

module.exports = controllers