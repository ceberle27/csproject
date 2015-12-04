//this explains what each game is, or gives information about the game.
var halo = document.getElementById("halo");
var assasinsCreed = document.getElementById("assasinsCreed");
var skyrim = document.getElementById("skyrim");
var CODBO2 = document.getElementById("CODBO2");
var infoskyrim = document.getElementById('infoskyrim');
var infohalo = document.getElementById('infohalo');
var infoCODBO2 = document.getElementById('infoCODBO2');
var infoassasinsCreed = document.getElementById('infoassasinsCreed')
//Halo Game
halo.addEventListener("click", function(){
   infohalo.innerHTML = "Halo is a series of sci-fi first person shooter games. It is about a race of aliens who go to war with the humans. Depending on the game you play as a certain character who has to fight off these aliens. In the earlier games you are playing as soldier, but in the more recent games you play as a spartan, which is a much stronger trained soldier in a large metal suit made to fight off the aliens in the war. There is a campaign mode, multiplayer mode, and a free roam mode. ";
});
     //Assasins Creed game                  
assasinsCreed.addEventListener("click", function(){
    infoassasinsCreed.innerHTML = "Assassin's Creed is a game about a group of assassins, living in the middle of an oppressed period of time. The character you play as has to start and win the revolution by defeating the military forces. It is a third person game."
});
//Skyrim game
skyrim.addEventListener("click", function(){
    infoskyrim.innerHTML = "Skyrim is a game based back in medieval times with witches wizards and magic. You can choose who you play as and there are many missions you can do through the large map. You can play it both in first person and third person."
});
//Call Of Duty Black Ops 2 Game
CODBO2.addEventListener("click", function(){
    infoCODBO2.innerHTML = "Call Of Duty Black Ops 2 is a first person shooter game based in the near future. There is a campaign mode, multiplayer mode, and a zombies mode, where you fight off mobs of zombies."
});