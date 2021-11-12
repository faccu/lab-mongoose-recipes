const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb+srv://faccu:thisshitboring@cluster0.k2htr.mongodb.net/recipesLab?retryWrites=true&w=majority';

// Connection to the database "recipe-app"

  mongoose
    .connect(MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(self => {
      // console.log(`Connected to the database: "${self.connection.name}"`);

      // ITERATION 02

      const newRecipe = {
        title: "Tinga de pollo",
        level: "Easy Peasy",
        ingredients: ["Pechuga de pollo", "Tomate triturado", "Cebolla", "Chile chipotle", "Oregano" ],
        cuisine: "Mexicano",
        dishType: "main_course",
        image: "https://images.media-allrecipes.com/images/75131.jpg",
        duration: 40,
        creator: "Facu",
        created: new Date (2021, 11, 11)
      }

      .then(() => {
        return Recipe.create(newRecipe);
      })

      // ITERATION 03

      .then(() => {
        return Recipe.insertMany(data);
      })

      // ITERATION 04

      .then(() => {
        return Recipe.findOneAndUpdate({title:"Rigatoni alla Genovese"}, {duration:100});
      })

      // ITERATION 05

      .then(() => {
        return Recipe.deleteOne({title: "Carrot Cake"});
      })
      
    })

    // ITERATION 06

    .then(() => {
      console.log("Disconnecting from the database...");
      mongoose.disconnect();
    })
    .catch(error => {
      console.error('Error connecting to the database', error);
    });
