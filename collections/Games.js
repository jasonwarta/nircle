Games = new Mongo.Collection('games');

// Games.allow({
// 	insert: function(userId, doc){
// 		return !!userId;
// 	},
// 	update: function(userId, doc){
// 		return !!userId;
// 	}
// });

GamesSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	category: {
		type: String,
		allowedValues: ['board', 'card', 'video'],
	    autoform: {
	        options: [
		        {label: "Boardgame", value: "board"},
		        {label: "Cardgame", value: "card"},
		        {label: "Videogame", value: "video"}
	        ]
	    }
	},
	genre: {
		type: String,
		allowedValues: ['rpg', 'rts', 'fps'],
	    autoform: {
	        options: [
		        {label: "RPG", value: "rpg"},
		        {label: "RTS", value: "rts"},
		        {label: "FPS", value: "fps"}
	        ]
	    }
	}
});

Meteor.methods({
	groups: function(){
		return Games.find({},{fields: {name:1}})
	} 
});

Games.attachSchema(GamesSchema);


// name
// type
// 	board/card/video
// genre
// 	rpg
// 	rts
// 	fps
// 	mmo

