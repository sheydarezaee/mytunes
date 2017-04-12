describe('AppView', function() {
  var appView, app;

  beforeEach(function () {
    app = new AppModel({library:
      new Songs([
        {
          artist: 'Fakey McFakerson',
          title: 'Never Gonna Mock You Up',
          url: 'example/url'
        },
        {
          artist: 'BittyBacon',
          title: 'Sizzle Sundays',
          url: 'fake/url'
        }
      ])
    });
    appView = new AppView({model: app});
  });

  it('should generate a PlayerView when created', function() {
    expect(appView.playerView).to.be.an.instanceof(PlayerView);
  });
  it('should generate a LibraryView when created', function() {
    expect(appView.libraryView).to.be.an.instanceof(LibraryView);
  });
  it('should generate a SongQueueView when created', function() {
    expect(appView.songQueueView).to.be.an.instanceof(SongQueueView);
  });

  describe('when the currently playing song changes', function() {
    it('updates current song in playerView', function() {
      var song = app.get('library').at(0);
      expect(appView.playerView.model).to.not.equal(song);
      song.play();
      expect(appView.playerView.model).to.equal(song);
    });
  });

});
