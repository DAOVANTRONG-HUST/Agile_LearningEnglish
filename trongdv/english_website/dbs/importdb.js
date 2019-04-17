var fs = require('fs');
var topicDao = require('./repository/TopicDao');
app.get("/topic", function(req, res) {
  fs.readFile('./db/Category.json', (err, data) => {
    if (err) throw err;

    var listData = JSON.parse(data);

    listData.forEach(element => {
        var obj = {};
        obj.id = element.id;
        obj.topicEn = element.name_category;
        obj.topicVi = element.name_Vi;
        obj.imageUrl = "";

        topicDao.createTopic(obj, function(result){
          if (result == null) {
            console.log("false");
          } else {
            console.log("true");            
          }
        })

    });

    res.json(listData);
  });
})


var lessonDao = require('./repository/LessonDao');
app.get("/lesson", function(req, res) {
  fs.readFile('./db/lesson.json', (err, data) => {
    if (err) throw err;

    var listData = JSON.parse(data);

    listData.forEach(element => {
        var obj = {};
        obj.id = element.id;
        obj.topicId = element.id_category;
        obj.lessonNameEn = element.lessonNameEnglish;
        obj.lessonNameVi = element.lessonNameVietNamese;
        obj.imageUrl = "";

        lessonDao.createLesson(obj, function(result){
          if (result == null) {
            console.log("false");
          } else {
            console.log("true");            
          }
        })

    });

    res.json(listData);
  });
})

var vocabularyDao = require('./repository/VocabularyDao');
app.get("/vocabulary", function(req, res) {
  fs.readFile('./db/vocabulary.json', (err, data) => {
    if (err) throw err;

    var listData = JSON.parse(data);

    listData.forEach(element => {
        var obj = {};
        obj.id = element.id;
        obj.lessonId = element.lession_id;
        obj.vocabularyEn = element.vocabulary_en;
        obj.pronunciation = element.pronunciation;
        obj.vocabularyType = element.vocabulary_type;
        obj.vocabularyVi = element.vocabulary_vi;
        obj.explantion = element.explantion;
        obj.exampleEn = element.example_en;
        obj.exampleVi = element.example_vi;
        obj.imageUrl = "";
        obj.audioUrl = "";

        vocabularyDao.createVocabulary(obj, function(result){
          if (result == null) {
            console.log("false " + obj.id);
          } else {
            console.log("true");            
          }
        })

    });

    res.json(listData);
  });
})
