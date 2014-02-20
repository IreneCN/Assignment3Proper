/**
 * @author Chidinma Irene Nwoye
 */
var myMovies = [{
				"title" : "Forrest Gump",
				"releaseYear" : 1994,
				"rating":5,
				"haveSeen":true
			}, {
				"title" : "Captain Phillips",
				"releaseYear" : 2013,
				"rating":2,
				"haveSeen":false
			}, {
				"title" : "Life is Beautiful",
				"releaseYear":1993,
				"rating":1,
				"haveSeen":true
			}, {
				"title" : "Pirates of the Carribean",
				"releaseYear":2011,
				"rating":3,
				"haveSeen": true
			}];
			console.log(myMovies);

		//Below I will sort my movies into 2 lists based on the movies I've seen and the ones I haven't
		var seenIt   = [];
		var notSeen  = [];

		//for each movie in my movies' list, my for loop will check if I've seen it. 
		//If haveSeen is true, it'll add it to seenIt. If not, it'll go to notSeen

		for(var i=0; i<myMovies.length; i++)
		{
			console.log(i);
			var thatMovie = myMovies[i];

			if(thatMovie.haveSeen == true){
				console.log(thatMovie);
				//when haveSeen is true, add that movie to my seenIt list, 
				seenIt.push(thatMovie);
				}else{
				//otherwise add thatMovie to notSeen list
				notSeen.push(thatMovie);
				} 									//this is the end of my if/else statement

		} 											//this is the end of my for loop
		console.log("sorted movies!");
		console.log(seenIt);
		console.log(notSeen);