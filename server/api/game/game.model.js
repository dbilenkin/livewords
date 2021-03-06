'use strict';

var mongoose = require('mongoose'), Schema = mongoose.Schema;

var GameSchema = new Schema({
	name : String,
	version : Number,
	updatedBy : Number,
	board : [],
	bag : [],
	players : [],
	status : String,
	winner : Number,
	startTime : Date,
	gameTime : Date,
	boardType : {},
	bagSize : String

});

module.exports = mongoose.model('Game', GameSchema); 