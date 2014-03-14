'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Hero Schema
 */
var HeroSchema = new Schema({
  name: {type: String, unique: true, index: true, trim: true },
  marvelId: {type: String, unique: true, index: true },
  description: { type: String, trim: true },
  thumbnail: String,
  marvelUrl: String
});

/**
 * Validations
 */

// Validate empty name
HeroSchema
  .path('name')
  .validate(function(name) {
    return name.length;
  }, 'Name cannot be blank');

// Validate empty password
HeroSchema
  .path('marvelId')
  .validate(function(marvelId) {
    return marvelId.length;
  }, 'Marvel ID cannot be blank');

// TODO: Validate duplicated marvelID

module.exports = mongoose.model('Hero', HeroSchema);