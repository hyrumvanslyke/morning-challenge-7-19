// Write your code below this line.

function findLuckyNumbers(n) {// function called findLuckyNumbers that Given a number, n, returns an array containing n unique random numbers between 1-10, inclusive. 
    let nums = [];// create an empty array to use for your loops 
    
    while (nums.length < n) {// while loop that ends when the array becomes equal to n.
      let ranNum = Math.floor(Math.random() * 10) + 1 // created a random number generator from 1-10 using math objects
      
      if (!nums.includes(ranNum)) {// if statement to check to make sure there are no repeats
        nums.push(ranNum)// push to the array
      }
    }
    
    return nums;// returns the nums array at the end of the function
  }
console.log(findLuckyNumbers(6))// logged for testing