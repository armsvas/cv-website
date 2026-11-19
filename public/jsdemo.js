"use strict";

/* =====================
ACCESS HTML ELEMENTS
===================== */

const yearsInput = document.getElementById("years");
const projectsInput = document.getElementById("projects");
const calcBtn = document.getElementById("calcBtn");
const skillResult = document.getElementById("skillResult");

const ideaBtn = document.getElementById("ideaBtn");
const ideaOutput = document.getElementById("ideaOutput");

const circle = document.getElementById("skillCircle");
const circleBtn = document.getElementById("circleBtn");

const moveBtn = document.getElementById("moveBtn");
const box = document.getElementById("box");

const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("jokeText");


/* =====================
FORM CALCULATION
===================== */

calcBtn.addEventListener("click", function(){

let years = parseInt(yearsInput.value);
let projects = parseInt(projectsInput.value);

let score = (years * 10) + projects;

if(score > 100){
skillResult.textContent = "Skill Level: Expert Developer";
}
else if(score > 50){
skillResult.textContent = "Skill Level: Intermediate Developer";
}
else{
skillResult.textContent = "Skill Level: Beginner Developer";
}

});


/* =====================
RANDOM PROJECT GENERATOR
===================== */

const ideas = [
"Build a weather app",
"Create a JavaScript game",
"Develop a task manager",
"Create a portfolio site",
"Build a REST API project"
];

ideaBtn.addEventListener("click", function(){

let randomIndex = Math.floor(Math.random() * ideas.length);
ideaOutput.textContent = ideas[randomIndex];

});


/* =====================
SVG MANIPULATION
===================== */

let radius = 40;

circleBtn.addEventListener("click", function(){

radius += 5;

if(radius > 80){
radius = 40;
}

circle.setAttribute("r", radius);

});


/* =====================
MOVE ELEMENT
===================== */

let position = 0;

moveBtn.addEventListener("click", function(){

position += 30;
box.style.left = position + "px";

});


/* =====================
INTERNAL JSON DATA
===================== */

fetch("skills.json")
.then(response => response.json())
.then(data => {

let list = document.getElementById("skillsList");

for(let i = 0; i < data.skills.length; i++){

let li = document.createElement("li");
li.textContent = data.skills[i];

list.appendChild(li);

}

});


/* =====================
EXTERNAL API
===================== */

jokeBtn.addEventListener("click", function(){

fetch("https://official-joke-api.appspot.com/jokes/programming/random")
.then(response => response.json())
.then(data => {

jokeText.textContent = data[0].setup + " - " + data[0].punchline;

});

});