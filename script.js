var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'images/harryPotter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'images/krolLew.jpg'
    },
    {
        id: 3,
        title: 'Iluzja',
        desc: 'Film o magikach',
        img: 'images/iluzja.jpg'
    },
    {
        id: 4,
        title: 'The Other Woman',
        desc: 'Film o zonie i kochankach męza',
        img: 'images/theOtherWoman.jpg'
    }
  ];

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img}));
  });

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app'));