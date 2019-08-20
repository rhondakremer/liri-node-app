
//axios
var axios = require("axios");
//moment (for bands)
var moment = require("moment");

//spotify
var Spotify = require('node-spotify-api');
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);


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
    if (response.data.length == 0) {
        console.log("Oh no! This artist has no upcoming shows")
    } else {
            for (let i = 0; i < response.data.length; i++) {
            console.log("Venue: " + response.data[i].venue.name);
            console.log("City: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
            console.log(moment(response.data[i].datetime).format("MM/DD/YYYY HH:MM") + "\n------------")
            
    }  
    }
  }
);
}
// Spotify
else if (process.argv[2] == "spotify-this-song") {
  var song = process.argv.slice(3).join(" ");
  
//console.log(song);

spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log("------------\nArtist Name: " + JSON.stringify(data.tracks.items[0].artists[0].name) + "\nTrack Name: " + JSON.stringify(data.tracks.items[0]).name + "\nPreview Song: " + data.tracks.items[0].preview_url + "\nAlbum: " + JSON.stringify(data.tracks.items[0].album.name) +"\n------------");

//console.log(JSON.stringify(data.tracks.items[0].artists[0].name)); 
//console.log(JSON.stringify(data.tracks.items[0]).name);
//console.log(data.tracks.items[0].preview_url)
//console.log(JSON.stringify(data.tracks.items[0].album.name))
});
} 


