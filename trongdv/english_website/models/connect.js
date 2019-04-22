var mongoose = require('mongoose');
var part5 = new mongoose.Schema({ id_exam: "number", Part5: { id_part: "number", bo_cau_hoi: [{ id_cauhoi: "number", a1: "string", sign: "string", translate: "string" }] } }, { collection: 'part5' });
module.exports = mongoose.model('part5', part5);
