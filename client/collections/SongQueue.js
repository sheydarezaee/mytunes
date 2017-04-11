// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  
  initialize: function() {
    this.on('add remove', function(e) {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(e) {
      this.remove(this.models[0]);
    });

    this.on('ended', function(e) {
      this.remove(this.models[0]);
      if (this.length > 1) {
        this.playFirst();
      }
    });
  },

  playFirst: function () {
    console.log('playfirst');

    this.models[0].play() || console.log('hey hey');
  }
});