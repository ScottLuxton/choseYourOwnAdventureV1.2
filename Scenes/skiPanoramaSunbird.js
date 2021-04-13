let goToSunbird = true
let goToMile1 = true
let goToFritz = true
let goToHeavenCanWait = true


function ridingTobyChair(goToSunbird){
    console.log("Decision - Sitting on Toby chair, go to the Sunbird or Mile1?", goToSunbird)
    if(goToSunbird){
        console.log("Action - Traverse to the Sunbird")
    } else {
        console.log("Action - Traverse to the Mile1", goToMile1 )
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

function ridingSunbirdChair(goToHeavenCanWait) {
    console.log("decision - Riding the Sunbird go to Fritz or Heaven Can Wait?" )
    if(goToHeavenCanWait){
        console.log("Action - Ski Heaven Can Wait")
    } else {
        console.log("Action - ski Fritz")
    }
}


ridingTobyChair(true)
skiFritz(true)
ridingSunbirdChair(true)

module.exports = {
    ridingTobyChair,
    skiFritz,
    goToHeavenCanWait,    
}

