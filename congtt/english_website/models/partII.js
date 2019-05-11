const mongoose = require('mongoose');
var partII = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        id_exam:"number",
        PartII:{
            id_part:"number",
            audio_src:"string",
            bo_cau_hoi:[
                {id_cauhoi:"number",answer:"number",sign:"string", explain:"string"}
               
            ]
        } 
    }



, { collection: "partII" });
module.exports = mongoose.model("partII", partII);