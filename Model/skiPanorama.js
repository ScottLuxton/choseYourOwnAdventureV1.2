const scenes = require('/scenes')

scenes.createScene("intro",
'As you are riding up the toby chair the first decision you must make is where to go next will you head to the Mile1 chairlift or the Sunbird chairlift next?',
[
    {description: "head over to the Sunbird and crush some pow", scene: "sunbirdChair"},
    {description: "zip over to the Mile 1 for some action in the park", scene: "mile1Chair"}
])

scenes.createScene("sunbirdChair",
'As you are riding up the Sunbird the next decision you must make is where to go next will you ski down Fritz Run or Heaven Can Wait next?',
[
    {description: "Steep and deep, take me to Fritz", scene: "skiFritzRun"},
    {description: "Look at that cordoroy, head to Heaven Can Wait", scene: "skiHeavenCanWait"}
])

scenes.createScene("mile1Chair",
'As you are riding Mile 1 chair you should decide to hit the park on Showoff or some freestyle on Old Timer?',
[
    {description: "head over to Showoff for some rail jams", scene: "skiShowoff"},
    {description: "Slide over to Old Timer for sick freestyle lines", scene: "skiOldTimer"}
])

scenes.createScene("skiShowoff",
'You smash some rails on Showoff and it is awesome!')

scenes.createScene("skiOldTimer", 
'You hit some huge rollers on Old Timer and get serious air time!')

scenes.createScene("skiFritzRun",
'You chose to ski Fritz and it is a powdery delight!')

scenes.createScene("skiHeavenCanWait",
'You carve down Heaven Can Wait and it is indeed heavenly.')



