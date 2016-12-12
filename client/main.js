// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

Template.Games.onCreated(function() {
  
});

Template.Games.helpers({
	game: function(){
		return Games.find({});
	}
});

Template.Games.events({
  
});


Template.Groups.helpers({
	group: function(){
		return Groups.find({});
	},
	member: function(group){
		return Players.find({groups:group});
		// return Players.find({groups:group}).username;
		// var query = Players.find({favorites:game});
		// console.log(query);
		// var players =[];
		// console.log(query.username);
		// if(typeof(query) !== 'undefined')
		// 	for(var p in query)
		// 		players.push(p.username);
		// 		// return p.username;

		// console.log(players);
		// // return players;
	}
});

Template.Players.helpers({
	player: function(){
		return Players.find({});
	}
});