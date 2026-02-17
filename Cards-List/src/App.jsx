import Card from "./Card"
import React from "react"

function App() {
  const descriptions = {
    "Nikobro82" : {
      "desc" : "I study Computer Science at NYU and like to play video games.",
      "desc2" : "My favorite game is Destiny 2",
      "imgsrc" : "./assets/nikobro82pfp.jpg",
      "name" : "Nikobro82"
    },
    "Computer Science" : {
      "desc" : "I've studied Computer Science for three years. I am familiar with Lua, C++/C#, JavaScript, Python and HTML/CSS",
      "desc2" : "My favorite programming language is C++ and Lua!",
      "imgsrc" : "./assets/nikobro82pfp.jpg",
      "TimeLength" : "3 Years",
      "name" : "Computer Science"
    },
    "History" : {
      "desc" : "I've studied History for four years. I've previously built an online history spanning 300 members, and continue to study history today.",
      "desc2" : "1753-1815 is my favorite historical time period.",
      "imgsrc" : "./assets/nikobro82pfp.jpg",
      "TimeLength" : "4 Years",
      "name" : "History"
    },
    "Destiny 2" : {
      "desc" : "My #1 game I am committed to. In Destiny 2, I've grinded for thousands of hours, raiding, and doing story missions.",
      "desc2" : "My favorite Destiny 2 Raid is Deep Stone Crypt!",
      "imgsrc" : "./assets/nikobro82pfp.jpg",
      "TimeLength" : "1000+ Hours",
      "name" : "Destiny 2"
    },
    "Brickbattle Defense" : {
      "desc" : "Brickbattle Defense is a tower defense game that I've worked on the longest. I developed the systems and code for Brickbattle Defense",
      "desc2" : "lol c00lkidd vs 1x1x1x1, strongest today vs strongest in history",
      "imgsrc" : "./assets/nikobro82pfp.jpg",
      "TimeLength" : "1 Year and 1/2",
      "name" : "Brickbattle Defense"
    },
    "Brickbattle RPG" : {
      "desc" : "Brickbattle RPG is the newest game I am working on. I've developed advanced systems for Weapons, Armor, and Abilities, and currently developing on more.",
      "desc2" : "The tamer class is real!",
      "imgsrc" : "./assets/nikobro82pfp.jpg",
      "TimeLength" : "2 Months",
      "name" : "Brickbattle RPG"
    },
  }
  return (
    <>
      <h1 className = "header">Nikobro82</h1>
      <hr></hr>
      <Card table = {descriptions["Nikobro82"]}></Card>
      <Card table = {descriptions["Computer Science"]}></Card>
      <Card table = {descriptions["History"]}></Card>
      <hr></hr>
      <h2 className = "header">Projects</h2>
      <hr></hr>
      <Card table = {descriptions["Brickbattle Defense"]}></Card>
      <Card table = {descriptions["Brickbattle RPG"]}></Card>
      <h2 className = "header">Games</h2>
      <hr></hr>
      <Card table = {descriptions["Destiny 2"]}></Card>

    </>
    
  )
}

export default App
