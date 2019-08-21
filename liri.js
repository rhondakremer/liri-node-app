var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var value = process.argv.slice(3).join(" ");

function OMDBfunction(value) {
  
    if (value == "") {
      value = "Mr Nobody"
    }
    //console.log(value)

  axios.get("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy")   .then 
    (function(response) {
    console.log("------------\nTitle: " + response.data.Title + "\nReleased: " + response.data.Released + "\nIMDB Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " +response.data.Actors + "\n------------");
  });
}

function bandsInTownFunction(value) {
  axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
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
  });
}

function spotifyFunction(value) {
    if (value == "") {
      value = "The Sign Ace of Base"
    }
    //console.log(value);
    spotify.search({ type: 'track', query: value, limit: 1}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log("------------\nArtist Name: " + JSON.stringify(data.tracks.items[0].artists[0].name) + "\nTrack Name: " + JSON.stringify(data.tracks.items[0].name) + "\nPreview Song: " + data.tracks.items[0].preview_url + "\nAlbum: " + JSON.stringify(data.tracks.items[0].album.name) +"\n------------");
    });
  }


if (process.argv[2] == "movie-this") {
  OMDBfunction(value)
} 
else if (process.argv[2] == "concert-this") {
  bandsInTownFunction(value)
}
else if (process.argv[2] == "spotify-this-song") {
  spotifyFunction(value);
} 
else if (process.argv[2] == "do-what-it-says") {
  console.log("you don't make decisions")
  var fs = require("fs");
  fs.readFile('random.txt', 'utf8', function(err, data){
		if (err){ 
			return console.log(err);
		}
        var dataArr = data.split(',');
        console.log(dataArr)
        value = dataArr[1];
        spotifyFunction(value);
}
  )}

