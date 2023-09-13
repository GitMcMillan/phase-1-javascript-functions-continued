// code your solution here
function saturdayFun(activity = "roller-skate") {
      return `This Saturday, I want to ${activity}!`;
  }

  saturdayFun();
  saturdayFun("bathe my dog!")



  function mondayWork(activity = "go to the office") {
      return `This Monday, I will ${activity}.`
  }

  console.log(mondayWork());
  console.log(mondayWork("work from home"))


  function wrapAdjective(flair = "*") {
      return function innerFunction(spec = "special") {
            return `You are ${flair}${spec}${flair}!`
      }
  }

console.log(wrapAdjective("headache")("painful"))
