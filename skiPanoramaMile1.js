let goToMile1 = true
let goToShowoff = true
let goToOldTimer = true

function rideMile1(goToMile1){
    console.log("Decision - Sitting on Toby chair, go to the Sunbird or Mile1?")
    if(goToMile1){
        console.log("Action - Traverse to the Mile1")
    } else {
        console.log("Traverse to Sunbird chair")
    }
}

// build function to be offered energy bar and add to array

function skiShowoff(goToShowoff) {
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

rideMile1(true)
skiShowoff(true)
skiOldTimer(true)

module.exports = {
    skiShowoff,
    rideMile1
}

// Build function to use energy bar to ski again or if you don't have go home