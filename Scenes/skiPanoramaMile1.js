let goToMile1 = true
let goToShowoff = true
let goToOldTimer = true

function ridingTobyChair(goToMile1){
    console.log("Decision - Sitting on Toby chair, go to the Sunbird or Mile1?")
    if(goToMile1){
        console.log("Action - Traverse to the Mile1")
    } else {
        console.log("Traverse to Sunbird chair")
    }
}

// build function to be offered energy bar and add to array

function ridingMile1Chair(goToShowoff) {
    console.log("decision - Riding the Mile1, ski Showoff or Old Timer?")
    if(goToShowoff){
        console.log("Action - Ski Showoff")
    } else {
        console.log("Action - ski Old Timer")
    }
}

function skiOldTimer(goToOldTimer){
    console.log("Decision - Sitting on Mile1 chair, go to the Old Timer or Showoff?")
    if(goToOldTimer){
        console.log("Action - ski Old Timer")
    } else {
        console.log("Action - ski Showoff")
    }
}

ridingTobyChair(true)
ridingMile1(true)
skiOldTimer(true)

module.exports = {
    ridingMile1Chair,
    ridingTobyChair
}

// Build function to use energy bar to ski again or if you don't have go home