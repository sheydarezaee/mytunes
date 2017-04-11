// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  
  initialize: function() {
    this.on('add remove', function(e) {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended dequeue', function(e) {
      this.remove(this.models[0]);
    });
  },

  playFirst: function () {
    this.models[0].play();
  }
});