const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  title: String,
  yearOfRelease: Number,
  description: String,
  stars: Number,
  genre: String,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
