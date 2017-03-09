
const songStorage = [];
let itemsProcessed = 0;

$(document).ready(function() {
  const play = document.querySelector('button#play-button');

  $( "#song-form" ).on('submit', function( event ) {
    event.preventDefault();
    let name = event.currentTarget[0].value;
    let song = event.currentTarget[1].value;
    songStorage.push([name, song]);
    return createSongNode(`${name}: ${song}`);
  });

  play.addEventListener('click', function (event) {
    $('#play-button').slideUp()
    playAll();
  });

});


function playAll() {
  if (itemsProcessed < songStorage.length) {
    $('h5#now-playing').html("Now Playing: "+ songStorage[itemsProcessed][0]);
    playSong(parseSong(songStorage[itemsProcessed][1]), 300, playAll);
    $('#song-queue li').first().remove();
    itemsProcessed++;
  } else {
    $('#play-button').slideDown()
    $('#now-playing').html("Enter A Song to Play");
  }

};

function removeSongNode (input) {
  var listitem = document.createElement("li");
  var song = document.createTextNode(input);
  listitem.appendChild(song);
  document.getElementById("song-queue").appendChild(listitem);
}

function createSongNode (input) {
  var listitem = document.createElement("li");
  var song = document.createTextNode(input);
  listitem.appendChild(song);
  document.getElementById("song-queue").appendChild(listitem);
}
