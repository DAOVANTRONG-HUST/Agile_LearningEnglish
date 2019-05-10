var mongoose = require('mongoose');

var contact = new mongoose.Schema({ Post_id: 'number', Author_id: 'number', Author_avt: 'string', Post_time: 'date', Views: 'number', Content: 'string', Reputatuons: 'number' }, { collection: 'Posts' });

module.exports = mongoose.model('contact', contact);