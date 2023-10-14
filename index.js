// code your solution here

//empty parameter = roller-skate
// argument passed = override roller-skate
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}



// function saturdayFun(roller-skate) {
//     console.log(`This Saturday, I want to ${`roller-skate`}!`)

// }
//function saturdayFun("bathe my dog") 
// "This Saturday, I want to bathe my dog!"

// Implement a function expression called mondayWork. The function should return a String like "This Monday, I will ... ." Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "go to the office". Run npm test to verify you've gotten this set of tests passing before continuing with the lesson.

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
};



// function wrapAdjective(flair = "*") {
//     return function innerFunction(spec = "special") {
//         return `You are ${flair}${spec}${flair}!`
//     }
// }


function wrapAdjective(pretty = `*`) {
    return function youAre(very = special) {
        return `You are ${pretty}${very}${pretty}!`
    }
}