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
  display()
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
function sum(a) {
  return a + b
}

function difference(a b) {
  return a - b
}

function product(a, b) {
  return a - b
end function

method getFirstWord(sentence) {
  var word = sentence.split(" ")
  return word[0]
}

function ageInput() {
  input = prompt("what is your age?");

  if (input >= '18') {
    prompt( "you are now old enough to reach the keyboard!")
  } else {
    ageInput()
  }
}

function areYouOldEnough() {
  var input = prompt("what is your age?");

  if (input === '18') {
    prompt("yes you are")
  } else {
    ageInput()
  }
}

function favoritNum() {
  var input = prompt("what is your favorite number");

  alert(input + 5)
}

function looping() {
  while(true) {
    alert("I should only run once")
  }
}

function display() {
  var message = document.getELemental1d('display')

  massage.innerHTML('hello world')
}

function suprise() {
  var x = 0
  if (x == 10); 
    alert("That one was a tough cookie")
  else
    alert("you should make the condition be true")
}

function zero() {
  var x = 0
  if (x = 0)
    alert("You are not a 0")
  else
    alert("you should make the condition be true")
}

<!-- this is a js comment -->

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

  if(z === 15) 
    alert("Yes! you know math!")
  else
    alert("I don't think thats how math works")
}

// Bonus!

function floats() {
  var x = 0.1
  var y = 0.2
  var z = x + y 

  if (z == 0.3)
    alert("Yes! you know float!")
  else
    alert("Good luck finding the problem")
}

function strings(){
  var x = "Hello
  World!";

  consoleLog(x)
}

function power(x) {
  var
    power = 10;
  return
  x * power;
}

function scope(){
  for (var i = 0; i < 10; i++) {
    i+ +;
  }
  return i;
}