// DO NOT CHANGE THIS METHOD
function main() {
  console.log(sum(1, 2))
  console.log(difference(2, 4))
  console.log(product(2, 2))
  console.log(getFirstWord("This is a sentence"))
  ageInput()
  areYouOldEnough()
  favoritNum()
  looping()
  // change this method name
  myDisplay()
  suprise()
  zero()
  ten()
  isThisMath()
  floats()
  strings()
  console.log(power(2))
  console.log(scope())

  var display = document.getElementById('display');
  display.innerHTML += "<h1 class='header-title animate-pop-in'>" + "You are now a debugging Master!!!" + "</h1>"
}

main()

// Try to debug below
// missing parameter of b
function sum(a, b) {
  return a + b
}

// needed a coma in the parameter
function difference(a, b) {
  return a - b
}

// ending a function is with a barrack
function product(a, b) {
  // should multiply instead of subtract
  return a * b
}

// functions are invoked with the word function instead of method
function getFirstWord(sentence) {
  var word = sentence.split(" ")
  return word[0]
}

function ageInput() {
  input = prompt("what is your age?");

  if (input >= '18') {
    // change to a alert
    alert( "you are now old enough to reach the keyboard!")
  } else {
    ageInput()
  }
}

function areYouOldEnough() {
  var input = prompt("what is your age?");

  // should be greater than or equals for input
  if (input >= '18') {
    alert("yes you are")
  } else {
    // should call the function we are in instead of calling another function
    areYouOldEnough()
  }
}

function favoritNum() {
  var input = prompt("what is your favorite number");

  // we just need to print out the number
  alert(input)
}

function looping() {
  // take out the while loop becasue it causes a infinite loop
  alert("I should only run once")
}

// rename display because display is a reserved word
function myDisplay() {
  // should be getElementById
  var message = document.getElementById('display')

  // typo 
  message.innerHTML += 'hello world'
}

function suprise() {
  var x = 0
  // 0 is binary for false so this if is never true
  if (x != 10) 
    alert("That one was a tough cookie")
  else
    alert("you should make the condition be true")
}

function zero() {
  var x = 0
  // making the condition true instead of re assigning x
  if (x == 0)
    alert("You are not a 0")
  else
    alert("you should make the condition be true")
}

// this is a js comment 

function ten() {
  var x = 10;
  var y = "10";
  if (x == y)
    alert("I knew there was something wrong there!")
  else
    alert("are you sure you fixed the problem?")
}

function isThisMath() {
  var x = 10;
  var y = "5";
  var z = x + y; 

  // it will concatenate x and y and put them together
  if(z === "105") 
    alert("Yes! you know math!")
  else
    alert("I don't think thats how math works")
}

// Bonus!

function floats() {
  var x = 0.1
  var y = 0.2
  var z = x + y 

  // floats work super differently than what math really is
  if (z == 0.30000000000000004)
    alert("Yes! you know float!")
  else
    alert("Good luck finding the problem")
}

function strings(){
  // making a variable will work all in one line
  var x = "Hello World!";

  console.log(x)
}

function power(x) {
  // making a variable will work all in one line
  var power = 10;
  return x * power;
}

// here is the correct sytax for this function
function scope(){
  for (var i = 0; i < 10; i++) {
    i++;
  }
  return i;
}