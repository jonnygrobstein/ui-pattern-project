let games = [{
    title: 'God of War',
    price: 50,
    img: "./assets/images/God-of-War.jpg"
  },
  {
    title: 'Death Stranding',
    price: 70,
    img: "./assets/images/Death-Stranding.jpg"
  },
  {
    title: 'The Last Of Us 2',
    price: 40,
    img: "./assets/images/The-Last-Of-Us-2.jpg"
  }
];

function displayGames() {
  var result = '';
	games.forEach(function(game) {
    result += '<div class="item col-sm-4"><h2>' + game.title + '</h2><div><img class="img-fluid" src="' + game.img + '"></div><p class="text-right">' + game.price + '</p></div></div>';
});

document.getElementById('container').innerHTML = result;

}

displayGames();




{
    url: "",
    title: "",
    artistName: "",
    yearCreated: ,
    description:""
},





