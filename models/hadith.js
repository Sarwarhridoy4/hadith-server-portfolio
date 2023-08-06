const mongoose = require('mongoose');

const hadithSchema = new mongoose.Schema({
  hadith: String,
  narrator: String,
  source: String,
  reference: String,
});

const Hadith = mongoose.model('Hadith', hadithSchema);

module.exports = Hadith;
