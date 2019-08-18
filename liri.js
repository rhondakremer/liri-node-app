//require("dotenv").config();
//var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);

// Here we incorporate the "axios" npm package
var axios = require("axios");

if (process.argv[2] == "movie-this") {
    

var movie = [];

for (i = 3; i < process.argv.length; i++){
    movie.push(process.argv[i]);
    }
    //console.log(movie)

axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating

    
    console.log("Title: " + response.data.Title + "\nReleased: " + response.data.Released + "\nIMDB Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " +response.data.Actors);
  }
);
};
