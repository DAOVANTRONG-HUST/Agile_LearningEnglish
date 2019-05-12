const mongoose = require('mongoose');
var partIII = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        id_exam:"number",
        PartIII:{
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



, { collection: "partIII" });
module.exports = mongoose.model("partIII", partIII);