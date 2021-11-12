const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, require: true, unique: true },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"], 
  },
  ingredients: [{ type: String }],
  cuisine: { type: String, require: true },
  dishType: { type: String },
  image: { type: String },
  duration: { type: Number, minimum: 0 },
  creator: { type: String },
  created: { type: Date }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;