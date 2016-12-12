Players = new Mongo.Collection('players');

// Players.allow({
// 	insert: function(userId, doc){
// 		return !!userId;
// 	},
// 	update: function(userId, doc){
// 		return !!userId;
// 	}
// });

PlayersSchema = new SimpleSchema({
	username: {
		type: String,
		label: "Username"
	},
	location: {
		type: String,
		label: "Location"
	},
	gender: {
		type: String,
		label: "Gender",
		allowedValues: ['M', 'F', 'N'],
		autoform: {
	        options: [
		        {label: "M", value: "M"},
		        {label: "F", value: "F"},
		        {label: "N", value: "N"}
	        ]
	    }
	},
	age: {
		type: Number,
		label: "Age",
	},
	favorites: {
		type: [String],
		label: "Favorite Games",
		autoform: {
	        options: function(){
	        	var opts = Games.find({},{fields: {name:1}}).map(function (game){
	        		return {
	        			label: game.name,
		        		value: game.name
	        		};
	        	});
	        	return opts;
	        }
	    }
	},
	groups: {
		type: [String],
		label: "Groups",
		autoform: {
	        options: function(){
	        	var opts = Groups.find({},{fields: {name:1}}).map(function (group){
	        		return {
	        			label: group.name,
		        		value: group.name
	        		};
	        	});
	        	return opts;
	        }
	    }
	},
	registered: {
		type: Date,
		autoValue: function() {
			if (this.isInsert){
				return new Date();
			}
		},
		autoform: {
			type: "hidden"
		}
	},
});

Players.attachSchema(PlayersSchema);

// Person

// userid
// username
// favorite games
// location
// gender
// date registered
// name
// age
// email