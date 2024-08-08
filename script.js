console.log("Script running...")
// Task 1: Button One Flow
// Select the first button
let button=document.querySelector("#buttonOne")
console.log(button)
// Select the first p tag under that button
let p=document.querySelector("#textOne")
console.log(p)
// Add an event listener to the button such that when it's clicked, the p tag text says "You guessed wrong"
button.addEventListener("click", function(event){
	p.textContent="You guessed wrong"
})
// Task 2: Button Two Flow
// In index.html, add the IDs to the second button and p tag
// Select the second button and p tags
 let button2=document.querySelector("#buttonTwo")
 console.log(button2)
  
let p2=document.querySelector("#textTwo")
console.log(p2)
// Add an event listener to the second button such that when it's clicked, the p tag text is "You guessed right!"
button2.addEventListener("click", function(event){
	p2.textContent="You guessed right!"
})

// Task 3: Dog image flow
// Select the dog image
let img=document.querySelector("#dog")
console.log(img)
// Add an event listener to the dog image such that when the mouse is over it, the image src becomes post-boop.png
// Yellow: You can do this on click
img.addEventListener("mouseon", function(event){
	img="post-boop.png"
	console.log(img)
})
// Add an event listener to the dog image such that when the mouse is off it, the image src becomes pre-boop.jpeg
// Yellow: You can skip this
img.addEventListener("mouseout", function(event){
	img="pre-boop.jpeg"
	console.log(img)
})
// Task 4: Secret code flow
// Select the input
let input= document.querySelector("#code")
console.log(input)
// Add an event listener to the input such that when a key is pressed, you console log the value
input.addEventListener("press", function(event){
console.log(value)
})

// Extra credit: check if the value is "racoon." If it is, add the racoon.jpg image to the div below (you will need to select it first)




