'use strict';

// Global variables
var memes = [];
var displayMemes = [];
var displayMemes1 = [];
var displayMemes2 = [];
var arrayName = [];
var memeNumber = 8;
var userChoices = []; // records id of clicks
var matches = 0; // records number of matches user has made
var attempts = 0; // records number of attempts user has made
var madeMatch = false;

// Global DOM variable
var gameEl = document.getElementById('game');

function Meme(id, name) {
  this.id = id;
  this.name = name;
  memes.push(this);
}

var meme0 = new Meme(0, 'aliens');
var meme1 = new Meme(1, 'bad-time');
var meme2 = new Meme(2, 'kermit-tea');
var meme3 = new Meme(3, 'memes-everywhere');
var meme4 = new Meme(4, 'pepperidge-farm');
var meme5 = new Meme(5, 'smug-spongebob');
var meme6 = new Meme(6, 'success-kid');
var meme7 = new Meme(7, 'trollface');

// Function that picks a random number
function random() {
  return Math.floor(Math.random() * memeNumber);
};

// Function that populates array
function populateDisplayMemes() {
  var item;
  for (var i = 0; i < memeNumber; i++) {
    do {
      item = random();
    } while (displayMemes1.includes(item));
    displayMemes1.push(item);
  };
  for (var j = 0; j < memeNumber; j++) {
    do {
      item = random();
    } while (displayMemes2.includes(item));
    displayMemes2.push(item);
  };
  for (var k = 0; k < memeNumber; k++) {
    displayMemes.push(displayMemes1[k]);
    displayMemes.push(displayMemes2[k]);
  };
  console.log(displayMemes);
  for (var n = 0; n < displayMemes.length; n++){
    arrayName.push(memes[displayMemes[n]]);
  }
};

//function to make card
function makeCard() {
  for (var j = 0; j < arrayName.length; j++) {
    var imgEl = document.createElement('img');
    imgEl.setAttribute('src', 'other-images/card-back.jpg');
    imgEl.setAttribute('class', arrayName[j].name);
    imgEl.setAttribute('name', arrayName[j].id);
    imgEl.addEventListener('click', click, false);
    gameEl.appendChild(imgEl);
  };
};

//functino to compare matches
function compareMatches() {
// did user make two choices?
  if (userChoices.length === 2) {
    attempts++;
    console.log(attempts + ' = attempts');
    console.log('beginning compare function');
  };
  if (userChoices[0] === userChoices[1]) {
    matches++;
    //alert('You got a match!');
    console.log(matches + ' + current total matches made');
    remove();
  } else {
    var misMatch1 = document.getElementsByName(parseInt(userChoices[0]));
    console.log(misMatch1);
    for (var i = 0; i < misMatch1.length; i++) {
      var imgEl = misMatch1[i];
      imgEl.setAttribute('src', 'other-images/card-back.jpg');
    };
    var misMatch2 = document.getElementsByName(parseInt(userChoices[1]));
    console.log(misMatch2);
    for (var i = 0; i < misMatch2.length; i++) {
      var imgEl = misMatch2[i];
      imgEl.setAttribute('src', 'other-images/card-back.jpg');
    }
    console.log('no matches');
  };
  userChoices = [];
};

//function to remove event listener
function remove() {
  var removeEl = document.getElementsByName(parseInt(userChoices[0]));
  for (var j = 0; j < removeEl.length; j++){
    var removeItemEl = removeEl[j];
    removeItemEl.removeEventListener('click', click, false);
  }
}
//event listener function
function click() {
  console.log(event.target);
  var imgEl = event.target;
  var classEl = imgEl.getAttribute('class');
  var nameEl = imgEl.getAttribute('name');
  console.log(nameEl);
  imgEl.setAttribute('src', 'memes/' + classEl + '.jpg');
  userChoices.push(nameEl);
};

//calling functions
populateDisplayMemes();
makeCard();
compareMatches();
