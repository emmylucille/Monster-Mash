// CONSTRUCTORS
// Here is where you'll create your constructors for you player and monster.
// e.g. function Monster(){};
// e.g. function Player(){};

"use strict";

function Player(name){
    this.name = name;
}

function Monster(name, health){
  this.name = name;
  this.health = 0;
}

// GLOBAL VARIABLES
// You'll also want to create variables for the specific players and monsters.
// e.g. var purplePeopleEater = new Monster();
// e.g. var tinaFey = new Player();
// e.g. var attackMode = function(target){ Some code that produces an attack - pew, pew! };

var nun  = new Player ({
  name: "Nun"
});

var priest  = new Player ({
  name: "Priest"
});

var godzilla = new Monster ({
  name: "Godzilla",
  health: 0
});

var yeti = new Monster ({
  name: "Yeti",
  health: 0
});


// ACTIONS
// This is where jQuery will come into play and where you'll set a lot of your
// interactions for players and monsters. (e.g. player selection, attack interactions)
// e.g. $('.purple-people-eater').click(function () { Some code that attacks the monster! };

// var attackMode = function(attack) {
//   while(Monster.health > 0)
//   Monster.health -5
// }

$("#nunFight").hide();
$("#priestFight").hide();
$(".pow").hide();
$(".wham").hide();
$(".argh").hide();

$(".playerNun" ).click(function() {
  $("#nunFight").show("slow");
  $("#start").hide();
  // alert("Are you ready to whip him into shape!");
  $(".monster").css("opacity", 1);
});

$(".playerPriest" ).click(function() {
  $("#priestFight").show("slow");
  $("#start").hide();
  // alert("Good will prevail!");
  $(".monster").css("opacity", 1);
});


// long winded way of fading out monster.

// $("li").click(function() {
//   godzilla.health = godzilla.health + 1;
//   console.log("Whack!")
//   if (godzilla.health === 5) {
//     $(".monster").fadeTo("slow", 0.75);
//   }
//   if (godzilla.health === 10) {
//     $(".monster").fadeTo("slow", 0.5);
//   }
//   if (godzilla.health === 15) {
//     $(".monster").fadeTo("slow", 0.25);
//   }
//   if (godzilla.health === 20) {
//     alert('You win!');
//     $("#start").show("slow");
//     $("#nunFight").hide();
//     $("#priestFight").hide();
//   }
// });

$("li").click(function() {
  godzilla.health = godzilla.health + 1;

  $(".monster").fadeTo("fast", 1 - godzilla.health/11);
  if (godzilla.health === 1) {
    $(".pow").fadeIn("slow");
    $(".pow").fadeTo("slow", 0);
  }
  if (godzilla.health === 5) {
    $(".wham").fadeIn("slow");
    $(".wham").fadeTo("slow", 0);
  }
  if (godzilla.health === 9) {
    $(".argh").fadeIn("slow");
    $(".argh").fadeTo("slow", 0);
  }

// went down a modulus rabbit hole. Trying to figure out how to cycle through each action

  // $("li").click(function() {
  //   godzilla.health = godzilla.health + 1;
  //
  //   $(".monster").fadeTo("fast", 1 - godzilla.health/11);
  //   if (godzilla.health % 2 === 0) {
  //     $(".pow").fadeIn("slow");
  //     $(".pow").fadeTo("slow", 0);
  //   }

// different way of showing action

// $("li").click(function() {
//   godzilla.health = godzilla.health + 1;
//
//   $(".monster").fadeTo("fast", 1 - godzilla.health/10);
//   if (godzilla.health === 1) {
//     $(".pow").toggle("slow");
//   }
//   if (godzilla.health === 3) {
//     $(".pow").hide("slow");
//   }
//   if (godzilla.health === 4) {
//     $(".wham").toggle("slow");
//   }
//   if (godzilla.health === 6) {
//     $(".wham").hide("slow");
//   }
//   if (godzilla.health === 7) {
//     $(".argh").toggle("slow");
//   }
//   if (godzilla.health === 9) {
//     $(".argh").hide("slow");
//   }

  if (godzilla.health === 11) {
    godzilla.health = 0;
    $("#start").show("slow");
    $("#nunFight").hide();
    $("#priestFight").hide();
    // alert("You win! Let's play again");
  }
});
