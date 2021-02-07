/////////////////////////USEFUL HINTS//////////////////////////
////////////////////////////////////////////////////////////////

/**
 * Question 1  --	Anny’s Seashore Supplies
 *
 */
equipmts = ["kayaks", "canoes", "beach chairs", "umbrellas"];
function addItems(event) {
  var items = document.getElementById("item");
  if (items.value == "") {
    window.alert("Invalid Input. Please enter another equipment again");
    items.focus();
  } else {
    var opt = document.getElementById("selectedItems");
    var flag = true;
    if (opt.length == 0) {
      addItemsSel(items, opt);
    } else {
      for (var i = 0; i < opt.length; i++) {
        if (opt.options[i].value == items.value) {
          window.alert("Invalid Input. Please enter another equipment again");
          items.focus();
          flag = true;
          break;
        } else {
          flag = false;
        }
      }
    }
    if (flag == false) {
      addItemsSel(items, opt);
    }
  }
}

function addItemsSel(items, opt) {
  var element = document.createElement("option");
  element.id = items.value;
  element.value = items.value;
  element.text = items.value;
  opt.append(element);
}

function deleteItems(event) {
  var selElem = document.getElementById("selectedItems");
  if (selElem.value == "") {
    window.alert("OOPS!! There are no items to delete");
  } else {
    selElem.remove(selElem.selectedIndex);
  }
}

function diplayRent(event) {
  var minutes = document.getElementById("minutes");
  var dispRes = document.getElementById("selectedItems").length;
  if (minutes.value == "" || minutes.value <= 0) {
    window.alert("Invalid Input");
  } else if (minutes.value <= 60) {
    var cost = 40;
    total = cost * dispRes;
  } else if (minutes.value > 60) {
    var hrs = minutes.value / 60;
    var mins = minutes.value % 60;
    console.log(Math.floor(hrs) + " and " + mins);
    var total = (Math.floor(hrs) * 40 + mins) * dispRes;
  }
  document.getElementById("amount").setAttribute("value", total);
}

/**
 * Question 2 -- Changing Quotes
 */
var arrayQuotes = [
  "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "There is no greater agony than bearing an untold story inside you. - Maya Angelou",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
  "We accept the love we think we deserve. - Stephen Chbosky",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
  "No one can make you feel inferior without your consent. - Eleanor Roosevelt",
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston S. Churchill",
  "If my life is going to mean anything, I have to live it myself. - Rick Riordan",
  "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet? - L.M. Montgomery",
  "You can't stay in your corner of the Forest waiting for others to come to you. You have to go to them sometimes. - A.A. Milne",
  "Pain is inevitable. Suffering is optional. - Haruki Murakami",
  "Always do what you are afraid to do. - Ralph Waldo Emerson",
  "Our lives begin to end the day we become silent about things that matter. - Martin Luther King Jr.",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
  "Talent hits a target no one else can hit. Genius hits a target no one else can see. - Arthur Schopenhauer",
  "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.. - John Milton",
  "Fantasy is hardly an escape from reality. It's a way of understanding it. - Lloyd Alexander",
  "Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering. - Paulo Coelho",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
  "I can be changed by what happens to me. But I refuse to be reduced by it. - Maya Angelou",
  "Never let your sense of morals prevent you from doing what is right. - Isaac Asimov",
  "Hell is empty and all the devils are here. - William Shakespeare",
  "Turn your wounds into wisdom. - Oprah Winfrey",
];
setInterval(function displayQuotes() {
  var arryDisp = "";
  for (var j = 0; j < 4; j++) {
    arryDisp +=
      arrayQuotes[Math.floor(Math.random() * arrayQuotes.length)] + "<br>";
    document.getElementById("displayQuotes").innerHTML = arryDisp;
  }
}, 2000);

/**
 * Question 3 -- Animated Images
 *
 */

var imageArray = new Array(14);

for (var i = 0; i < imageArray.length; i++) {
  imageArray[i] = new Image();
  imageArray[i].id = "animateImage";
  imageArray[i].src = "images/img" + i + ".png";
}

$(document).ready(function () {
  var i = 0;
  setInterval(function () {
    $("#animateImage").animate({ opacity: 1 }, "slow", animateImage(i));
    i++;
    if (i > 13) i = 0;
  }, 150);
});

function animateImage(i) {
  $("#animateImage").replaceWith(imageArray[i]);
}
/**
 * Question 4 --Slide Show
 *
 */
$(document).ready(function () {
  slideShow();
});

function slideShow() {
  setInterval(function () {
    var caption = $("#slides img:first-child").attr("alt"); //get method to read the value has single param
    var source = $("#slides img:first-child").attr("src");
    $("#caption").text(caption);
    $("#slide").attr("src", source); //set method (jQuery) similar to JavaScript's setAttribute method used to set the value for a specific attribute of selected element
    $("#slides img:first-child").appendTo("#slides");	//to move the first child to the bottom of the div tag onn every iteration
  }, 2000);
}

//var k = 0;
//var images = [];
//var time = 2000;

//Image List
// images[]

/**
 * Question 5 -- Bouncing Balls
 */
var left = $(window).innerWidth(),
  topp = $(window).innerHeight();
setInterval(bouncingBallR(), 50);

function bouncingBallR() {
  $("#ballImage").animate({ marginLeft: left }, 1000, function () {
    setTimeout(bouncingBallB(), 50);
  });
}

function bouncingBallB() {
  $("#ballImage").animate({ marginTop: topp }, 1000, function () {
    setTimeout(bouncingBallL(), 50);
  });
}

function bouncingBallL() {
  $("#ballImage").animate({ marginLeft: 0 }, 1000, function () {
    setTimeout(bouncingBallT(), 50);
  });
}

function bouncingBallT() {
  $("#ballImage").animate({ marginTop: 0 }, 1000, function () {
    setTimeout(bouncingBallR(), 50);
  });
}

/**
 * Question 6 -- Moving Helicopter
 *
 */

// window.innerWidth property returns the width of a window's content area.
//clientWidth is the inner width (ie. the space inside an element including padding but excluding borders and scrollbars)
//setWidth is the outer width (ie. the space occupied by the element, including padding and borders)
//scrollWidth is the total width including stuff that is only visible if you scroll
//Viewport: It is your device screen.
//Window: It is your browser window. The window can be as big as viewport or smaller.
//Document: It is the webpage. It can be bigger than viewport or even bigger than window.

// wrap the code in a function to call it multiple times

setInterval(movingObject(), 100);

function movingObject() {
  var flag = false;
  var diag = -$(window).height(),
    rgt = $(window).width();
  $("#aero").animate({ marginLeft: rgt, marginTop: diag }, 6000, function () {
    if (flag == false) {
      $("#aero").css({ "margin-left": "0", "margin-top": "0" });
      flag = true;
    }
    if (flag == true) {
      movingObject();
      flag = false;
    }
  });
}
