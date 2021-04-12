let goToSunbird = true
let goToMile1 = true
let goToFritz = true
let goToHeavenCanWait = true


function rideSunbird(goToSunbird){
    console.log("Decision - Sitting on Toby chair, go to the Sunbird or Mile1?", goToSunbird)
    if(goToSunbird){
        console.log("Action - Traverse to the Sunbird")
    } else {
        console.log("Action - Traverse to the Mile1", rideMile1 )
    }
}

function skiFritz(goToFritz) {
    console.log("decision - Riding the Sunbird go to Fritz or Heaven Can Wait?", goToFritz)
    if(goToFritz){
        console.log("Action - Ski Fritz")
    } else {
        console.log("Action - ski Heaven Can Wait")
    }
}

function skiHeavenCanWait(goToHeavenCanWait) {
    console.log("decision - Riding the Sunbird go to Fritz or Heaven Can Wait?" )
    if(goToHeavenCanWait){
        console.log("Action - Ski Heaven Can Wait")
    } else {
        console.log("Action - ski Fritz")
    }
}


rideSunbird(true)
skiFritz(true)
skiHeavenCanWait(true)

module.exports = {
    rideSunbird,
    skiFritz,
    goToHeavenCanWait,    
}

// Build function to find ski pole and add to inventory
// console.log("Decision - Do you have a pole - Yes")
// // Build function to check for pole and if true use to fight bear
// console.log("Action - fight off bear - return to Sunbird")
