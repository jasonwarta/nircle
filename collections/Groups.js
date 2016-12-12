Groups = new Mongo.Collection('groups');

// Groups.allow({
// 	insert: function(userId, doc){
// 		return !!userId;
// 	},
// 	update: function(userId, doc){
// 		return !!userId;
// 	}
// });

GroupsSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Group Name",
	},
	gm: {
		type: String,
		label: "GM",
	},
	games: {
		type: [String],
		label: "Games",
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
	members: {
		type: [String],
		optional: true,
		autoform: {
			type: "hidden"
		},
	},
	registered: {
		type: Date,
		// label: "Date registered:",
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

Groups.attachSchema(GroupsSchema);