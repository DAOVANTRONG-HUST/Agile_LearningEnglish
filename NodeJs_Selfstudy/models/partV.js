const mongoose = require('mongoose');
var partV = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        id_exam:"number",
        PartV:{
            id_part:"number",
            audio_src:"string",
            bo_cau_hoi:[
                {
                    id_cauhoi:"number",answer:"number",sign:"string", explain:"string",
                    description:{
                        question:"string",
                        A:"string",
                        B:"string",
                        C:"string",
                        D:"string"
                    }
            
            
            
                }
               
            ]
        } 
    }



, { collection: "partV" });
module.exports = mongoose.model("partV", partV);