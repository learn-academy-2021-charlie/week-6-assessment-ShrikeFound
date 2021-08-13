// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("describePeople",() =>{
  const people = [
    { name: "ford prefect", occupation: "hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "radio employee" }
  ]
  const output = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]
  
  it("returns an array with a properly capitalized sentence",() =>{
    expect(describePeople(people)).toEqual(output)
  })


})
// b) Create the function that makes the test pass.

//we want a function that takes in one array and returns another
//we want to create a string with the two values of each object in the array
//and...also capitalize the name?
//gonna start by getting everything in the object into a string, the think about how to get the name capitalized

// const describePeople = (array) =>{
//   //template literal to create a sentence with the values
  
//   return array.map(ob => {
//   //template literal to create a sentence with the values
//   return `${ob.name} is a ${ob.occupation}.`
// })
// }

//then I need to capitalize each name.

const describePeople = (array) =>{
  //template literal to create a sentence with the values
  
  return array.map(ob => {

  //we're splitting the name into an array of names,
  //then mapping through each name and capitalizing the first letter.
  //we're concatenating the capitalized first letter with the rest of the name.
  //then joining the array of words back into a string with spaces between the words.
  const capitalizedName = ob.name.split(" ").map( w =>{
    return w[0].toUpperCase()+w.slice(1)
  }).join(" ")

  //template literal to create a sentence with the values
  return `${capitalizedName} is a ${ob.occupation}.`
})
}



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]



// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125



// b) Create the function that makes the test pass.
