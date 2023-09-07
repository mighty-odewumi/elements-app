export default function Leetcode() {

  /*  
   * This code is a solution to The Richest Customer Wealth question on Leetcode
  */

  // const arr = [[1, 2, 3], [1, 2, 3]];

  // const testArr = [[95],[95],[64],[96],[100],[74],[44],[100],[97],[99],[45],[98],[34],[16],[39],[81],[38],[46],[73],[12],[72],[91],[20],[63],[58],[40],[72],[97],[49],[3],[37],[71],[67],[38],[39],[20],[71],[90],[6],[31],[20],[4]];
  

  /* function maximumWealth(accounts) {
    const sumArr = [];
    let num;
    accounts.map((val) => {
      val.reduce((a, b) => {
        return num = a + b;
      }, 0)
      sumArr.push(num);
      return sumArr;
    });

    return sumArr.reduce((a, b) => {
      return a > b ? a : b;
    }, -Infinity);
  } */

  // console.log(maximumWealth(testArr));

 

  /*
   * This is for the Running Sum of a 1D array
  */

  
  /* function runningSum(arr) {
    // const mainArr = [3, 1, 2, 10, 1, 0, 77];
    const newArr = [];

    newArr.push(mainArr[0]);
    for (let i = 1; i < arr.length; i++) {
      const num = mainArr[i] + newArr[i - 1];
      console.log("num after concat of arrays", num);
      newArr.push(num);
    }
    console.log("This is the new array", newArr);

  }

  const mainArr = [3, 4];

  runningSum(mainArr);
  */

 
  /* 
   * This is for the FizzBuzz challenge on Leetcode
  */

  /* function fizzbuzz(num) {
    const finalArr = [];

    for (let i = num; i > 0; i--) {
      if (i % 3 === 0 && i % 5 === 0) {
        finalArr.unshift("FizzBuzz");
        console.log("FizzBuzz", i);
      }

      else if (i % 3 === 0) {
        finalArr.unshift("Fizz");
        console.log("Fizz", i);
      }

      else if (i % 5 === 0) {
        finalArr.unshift("Buzz");
        console.log("Buzz", i);
      }

      else {
        finalArr.unshift(i.toString());
        console.log(i.toString());
      }

    }

    return console.log(finalArr);
  }

  fizzbuzz(10**3);
  
  */




  /* 
   * This is for the Number of Steps to Reduce a Number to Zero challenge
  */

  /* function reduceToZero(num) {
    let state = num;
    let count = 0;

    while (state >= 0 && num > 0) {

      if (num % 2 === 0) {
        num = num / 2;
        count = count + 1;
      }

      else if (num % 2 !== 0) {
        num -= 1;
        count = count + 1;
      }

      else if(num === 0) {
        count = count + 1;
      }

      state--;
    }

    console.log("This is the final count", count);
    return count;
  }

  reduceToZero(123);
  */


  /* 
   * This is the Merge String Alternately challenge on Leetcode
  */
 
  /* function mergeWords(word1, word2) {
    let arr = [];

    for (let i = 0; i < word1.length; i++) {

      for (let j = 0; j < word2.length; j++) {
        arr.push(word1[i] + word2[j]);
      }
    }
  
    return console.log(arr);
  }
 
  // mergeWords("abc", "pqgr"); */

  

  return ( 
    <h2>Leetcode playground</h2> 
  )
}
