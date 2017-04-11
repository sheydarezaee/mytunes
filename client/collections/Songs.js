// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',


  initialize: function () {
    var context = this;
    $.ajax({
      url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      success: function(data) {
        var results = data.results;
        context.reset(results);
      },
      error: function(data) {
        console.log('fails');
      }
    });

  },
});
