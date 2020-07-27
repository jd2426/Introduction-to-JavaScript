/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 18
let age = votingAge <= 24 // I used my own age.
console.log(age)




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let myAge = 72;
let isChild = myAge <= 7;
let isSenior = myAge >= 65;

if (isChild) {
    console.log('WooHoo! You get the small child discount!')
}

if (isSenior) {
    console.log('Woohoo! You get the senior discount!')
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let year = "1999"
let ageAsNumber = parseInt(year)
console.log(ageAsNumber)





//Task d: Write a function to multiply a*b 

function multiply(firstNum, secondNum) {
  firstNum = 5
  secondNum = 10
}

console.log(firstNum * secondNum)

// Ask Eddy about this one





/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogYears(a) {
  return (a * 7)
} 
console.log(dogYears(10))




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs are at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
 function dogFeeder(pounds, age) {
    if (age >=1) {
      if (pounds <= 5) {
        return .05 * pounds
      } else if (pounds >= 6 && pounds <= 10) {
        return .04 * pounds
      } else if (pounds >=11 && pounds <=15) {
        return .03 * pounds
      } else {
        return .02 * pounds
      }
       
    }

    if (age <1 && age >= 7 / 12) {
       return .04 * pounds
    } else if (age <7 / 12 && age >= 4 / 12) {
      return .05 * pounds
    }
     else if (age <4 / 12 && age >= 2 / 12) {
      return .10 * pounds
    }
    
  }

  console.log( "Your dogs needs" , dogFeeder(15, 1), "of food" )
  console.log( "Your dogs needs" , dogFeeder(20, 3))




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

// rock = 1, paper = 2, scissors = 3
   

function winLoss(playerOne){
  let computerPlayer = Math.floor(Math.random()*3 + 1);
  let player = 0
  
  if (playerOne.toLowerCase()==="rock") {
    player = 1;
  } else if (playerOne.toLowerCase()==="paper") {
    player = 2;
  } else {
    player = 3;
  } 
// rock = 1, paper = 2, scissors = 3
if (computerPlayer === 1 && player === 1) {
  console.log("It's a tie");
} else if (computerPlayer === 2 && player ===2) {
  console.log("It's a tie")
} else if (computerPlayer === 3 && player ===3) {
  console.log("It's a tie")
} else if (computerPlayer === 1 && player ===2) {
  console.log("Player Wins")
} else if (computerPlayer === 1 && player ===3) {
  console.log("Computer Wins")
} else if (computerPlayer === 2 && player ===3) {
  console.log("Player Wins")
} else if (computerPlayer === 2 && player ===1) {
  console.log("Computer Wins")
} else if (computerPlayer === 3 && player ===2) {
  console.log("Computer Wins")
} else if (computerPlayer === 3 && player ===1) {
  console.log("Player Wins")
} 
  }
  winLoss("rock")
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let kilometers = 10
let miles = kilometers * 0.621371
console.log(miles)




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  let feet = 1
  let cm = feet * 30.48
  console.log(cm)




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong (numBottles) {
  console.log(`${numBottles}`)

  for(let i = numBottles; i >= 0; i--) {
    console.log(`${i}bottles of beer on the wall,  ${i} bottles of beer, take one down pass it around ${i-1} bottles of beer on the wall`)
  }
}
annoyingSong(99);



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function gradeCalculator(score, grade) {
  if(score>=90 && score<=100){
    return grade = "A"
  } else if (score >=80 && score<=90) {
    return grade = "B"
  } else if (score >=70 && score <=80) {
    return grade = "C"
  } else if (score >=60 && score >=70) {
    return grade = "D"
  } else {
    return grade = "F"
  }
}
console.log(gradeCalculator(54))

// Ask eddy why anything over 100 is returning "D"

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





