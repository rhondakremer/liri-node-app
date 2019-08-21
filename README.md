# liri-node-app
This is an app that uses Node to search upcoming concerts, movie information, and song information from Spotify. Search results are returned from APIs using axios and displayed in the console. 

The app uses a number of variables including requires for the different node packages. Each API is called through a function. The command is read in a basic if/else statement, and the appropriate function is called depending on what command is given. The value to search is a global variable that is passed as an argument in the function to give the user the information he or she is looking for. 

To use this app, download the files and supply your own spotify credentials into the key files. It is also necessary to download the node packages from the package.json. Once the user has all of that, usage is fairly straightforward. The user must run the app in node by typing node liri.js, then selecting one of the following commands: spotify-this-song, movie-this, concert-this, or do-what-it-says. For the first three commands, a value to search must also be provided (or else one will be automatically supplied). spotify-this-song returns information about a specific song, concert-this returns information about upcoming artists for a specific artist or band, and movie-this returns information for a specific movie. do-what-it-says returns a command and a value pre-supplied in a text file. The text file can be altered with a command and value as the user pleases. 

Examples of commands:
node liri.js spotify-this-song someone like you
node liri.js concert-this Dionne Warwick
node liri.js movie-this Over the Top

Technologies used:
node.js
moment.js
OMDB API
Bands in Town API
axios npm
spotify npm
dotenv npm


This app was developed by Rhonda Kremer to fulfill a requirement of the Trilogy Coding Bootcamp at University of Miami. 