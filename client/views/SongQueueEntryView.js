// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'add': 'render',
    'remove': 'render'
  },

  render: function() {
    console.log('k');
    return this.$el.html(this.template(this.model.attributes));
  }
});
