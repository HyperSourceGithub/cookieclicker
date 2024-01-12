let cookies = 0;
let cursors = 0;
let grandmas = 0;
let searchers = 0;
let makers = 0;
let universes = 0;
let imageindex = 0;

const imagesDisplayed = [
  "Assets/cookie.png",
  "Assets/cookie_vector.png",
  "Assets/amogus.png"
];

function cookieClick() {
  cookies += 1;
  document.getElementById('cookies').innerHTML = cookies;
}

function cursorClick(num) {
  cookies += num;
  document.getElementById('cookies').innerHTML = cookies;
}

function searcherClick(num) {
  cookies += num * 2;
  document.getElementById('cookies').innerHTML = cookies;
}

function makerClick(num) {
  cookies += num * 8;
  document.getElementById('cookies').innerHTML = cookies;
}

function spaceClick(num) {
  cookies += num * 15;
  document.getElementById('cookies').innerHTML = cookies;
}

function buyCursor() {
  let cursorCost = Math.floor(30 * Math.pow(1.1, cursors / 8));
  if (cookies >= cursorCost) {
    cursors++;
    cookies -= cursorCost;
    document.getElementById('cursors').innerHTML = cursors;
    document.getElementById('cursor-display').innerHTML = cursors;
    document.getElementById('cookies').innerHTML = cookies;
  }
  let nextCost = Math.floor(30 * Math.pow(1.1, cursors / 8));
  document.getElementById('cursorCost').innerHTML = nextCost;
}

function buySearcher() {
  let searcherCost = Math.floor(250 * Math.pow(1.1, searchers / 8))
  if (cookies >= searcherCost) {
    searchers++;
    cookies -= searcherCost;
    document.getElementById('searchers').innerHTML = searchers;
    document.getElementById('searcher-display').innerHTML = searchers;
    document.getElementById('cookies').innerHTML = cookies;
  }
  let nextCost = Math.floor(250 * Math.pow(1.1, searchers / 8));
  document.getElementById('searcherCost').innerHTML = nextCost;
}

function buyUniverse() {
  let uniCost = Math.floor(2000 * Math.pow(1.1, universes / 5))
  if (cookies >= uniCost) {
    universes++;
    cookies -= uniCost;
    document.getElementById('universes').innerHTML = universes;
    document.getElementById('universe-display').innerHTML = universes;
    document.getElementById('cookies').innerHTML = cookies;
  }
  let nextCost = Math.floor(2000 * Math.pow(1.1, universes / 5));
  document.getElementById('universeCost').innerHTML = nextCost;
}


function buyMaker() {
  let makerCost = Math.floor(800 * Math.pow(1.1, makers / 5))
  if (cookies >= makerCost) {
    makers++;
    cookies -= makerCost;
    document.getElementById('makers').innerHTML = makers;
    document.getElementById('maker-display').innerHTML = makers;
    document.getElementById('cookies').innerHTML = cookies;
  }
  let nextCost = Math.floor(800 * Math.pow(1.1, makers / 5));
  document.getElementById('makerCost').innerHTML = nextCost;
}


function save() {
  let save = {
    cookies: cookies,
    cursors: cursors,
    grandmas: grandmas,
    searchers: searchers,
    makers: makers,
    universes: universes
  }
  localStorage.setItem('cookieSave', JSON.stringify(save));
}

function load() {
  let savegame = JSON.parse(localStorage.getItem("cookieSave"));
  if (savegame !== null) {
    if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
    if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
    if (typeof savegame.cursors !== "undefined") grandmas = savegame.grandmas;
    if (typeof savegame.searchers !== "undefined") searchers = savegame.searchers;
    if (typeof savegame.makers !== "undefined") makers = savegame.makers;
    if (typeof savegame.universes !== "undefined") universes = savegame.universes;
  }
  document.getElementById('cookies').innerHTML = cookies;
  document.getElementById('cursors').innerHTML = cursors;
  document.getElementById('grandmas').innerHTML = grandmas;
  document.getElementById('searchers').innerHTML = searchers;
  document.getElementById('makers').innerHTML = makers;
  document.getElementById('universes').innerHTML = universes;
  document.getElementById('cursor-display').innerHTML = cursors;
  document.getElementById('grandma-display').innerHTML = grandmas;
  document.getElementById('searcher-display').innerHTML = searchers;
  document.getElementById('maker-display').innerHTML = makers;
  document.getElementById('universe-display').innerHTML = universes;
  let nextCost = Math.floor(10 * Math.pow(1.1, cursors / 8));
  document.getElementById('cursorCost').innerHTML = nextCost;
}

window.setInterval(function () {
  if (cursors > 0) {
    cursorClick(cursors);
  }
  if (searchers > 0) {
    searcherClick(searchers);
  }
  if (makers > 0) {
    makerClick(makers);
  }
  if (universes > 0) {
    spaceClick(universes);
  }
  document.getElementById('cps').innerHTML = (cursors * 2) + (searchers * 4) + (makers * 16) + (universes * 30);
}, 500);


function buyGrandma() {
  let grandmaCost = Math.floor(200 * Math.pow(1.2, grandmas / 5));
  if (cookies >= grandmaCost) {
    grandmas++;
    cookies -= grandmaCost;
    document.getElementById('grandmas').innerHTML = grandmas;
    document.getElementById('grandma-display').innerHTML = grandmas;
    document.getElementById('cookies').innerHTML = cookies;
  }
  let nextCost = Math.floor(200 * Math.pow(1.2, grandmas / 5));
  document.getElementById('grandmaCost').innerHTML = nextCost;
}

function grandmaPower() {
  cookies += 4 * grandmas; // Each grandma produces 4 cookies per click
  document.getElementById('cookies').innerHTML = cookies;
}

// Add the functionality to apply cheat codes in the script.js file
function applyCheat() {
  let cheatCode = document.getElementById('cheatInputField').value;
  if (cheatCode === "cheatcode") {
    cookies += 50;
    document.getElementById('cookies').innerHTML = cookies;
  } else if (cheatCode === "cook") {
    cookies += 50;
    document.getElementById('cookies').innerHTML = cookies;

  } else if (cheatCode === "morecookies") {
    cookies += 50;
    document.getElementById('cookies').innerHTML = cookies;

  } else if (cheatCode === "help") {
    alert("The cheat codes are as follows: 'cheatcode', 'cook', 'morecookies', 'zoomiez'. \n Use these for +50 cookies.");
    alert("If you want to get tons of cursors, use 'spam cursor'.");
    alert("To reset, refresh the page or enter the cheat code 'reset.'");
    alert("For +500 cookies, use 'super'.")

  } else if (cheatCode === "super") {
    cookies += 500;
    document.getElementById('cookies').innerHTML = cookies;

  } else if (cheatCode === "spam cursor") {
    alert("Warning: this takes away cookies initially, but it will give you more in return.");
    for (let i = 0; i < 20; i++) {
      buyCursor()
    }
  } else if (cheatCode === "zoomiez") {
    for (let i = 1; i === i; i === i) {
      alert("get trolled lol refersh")
    }
  } else if (cheatCode === "reset") {
    cookies = 0;
    grandmas = 0;
    cursors = 0;
    searchers = 0;
    document.getElementById('cookies').innerHTML = cookies;
    document.getElementById('grandmas').innerHTML = grandmas;
    document.getElementById('cursors').innerHTML = cursors;
    document.getElementByID('searchers').innerHTML = searchers;
  } else {
    alert("Invalid cheat code."); // Show an alert for invalid cheat codes
  }
}

// Add the keydown event listener to show the cheat input field
document.addEventListener('keydown', function (event) {
  if (event.key === '`') {
    document.getElementById('cheatCodes').style.display = 'block';
  }
});

function swapImage() {
  imageindex +=1;
  var imageDisplayed = document.getElementById('click');
  var imageNum = imageindex % imagesDisplayed.length;
  imageDisplayed.src = imagesDisplayed[imageNum];
}

window.onload = function () {
  var flakes = [];
  var types = ['❄', '❅', '❆'];
  for (var i = 0, len = 240; i < len; i++) {
    flakes.push('<i>' + types[i % 3] + '</i>');
  } document.getElementById('snow').innerHTML = flakes.join('');
};

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}