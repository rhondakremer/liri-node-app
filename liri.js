//require("dotenv").config();
//var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);

// Here we incorporate the "axios" npm package
var axios = require("axios");

//OMDB
if (process.argv[2] == "movie-this") {
    var movie = [];
    for (i = 3; i < process.argv.length; i++){
    movie.push(process.argv[i]);
    }
    //console.log(movie)

axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("Title: " + response.data.Title + "\nReleased: " + response.data.Released + "\nIMDB Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " +response.data.Actors);
  }
);
} 
//Bands in Town
else if (process.argv[2] == "concert-this") {
    var artist = "";
    for (i = 3; i < process.argv.length; i++){
    artist += (process.argv[i]);
    
} 
//console.log(artist);

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    for (let i = 0; i < response.data.length; i++) {
        console.log("Venue: " + response.data[i].venue.name);
        console.log("City: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
        console.log("Date: " + response.data[i].datetime + "\n--------");
    }  
    
    
    
  }
);
}
