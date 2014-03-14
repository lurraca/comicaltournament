'use strict';

var should = require('should'),
    Hero = require('../../../lib/models/hero.js'),
    mongoose = require('mongoose');

var hero;

describe('Hero Model', function() {
  before(function(done) {
    // Clear heroes before testing
    Hero.remove().exec();
    done();
  });

  beforeEach(function(done) {
    hero = new Hero({
      marvelId: '1009521',
      name: 'Hank Pym',
      description: 'A very bad hero!',
      thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4ce5a0e31f109.jpg",
      marvelUrl: 'http://marvel.com/comics/characters/1009521/_hank_pym'
    });
    done();
  })

  afterEach(function(done) {
    Hero.remove().exec();
    done();
  });

  it('should begin with no heroes', function(done) {
    Hero.find({}, function(err, heroes) {
      heroes.should.have.length(0);
      done();
    });
  });

  it('should fail when saving a duplicate hero', function(done) {
    hero.save();
    var heroDup = new Hero(hero);
    heroDup.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail when saving without an name', function(done) {
    hero.name = '';
    hero.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it ('should fail when marvelID is duplicated')
  // function(done) {
  //   var invalidHero = new Hero({
  //     marvelId: hero.marvelId,
  //     name: 'New Hero',
  //     thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4ce5a0e31f109.jpg"
  //   });
  //   invalidHero.save(function(err) {
  //     console.log(err);
  //     should.exist(err);
  //     done();
  //   })
  // })

  it('should fail when saving without marvelID', function (done) {
    hero.marvelId = '';
    hero.save( function(err) {
      should.exist(err);
      done();
    })
  });

});