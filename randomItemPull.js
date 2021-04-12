const yourCollectables = [
    'giant stick',
    'energy bar',
    'tayton bowl pass',
    'hand warmers',
    'cold beer',
]
// In this section we learn how to randomly pull an item from an array, call an item, add an item
// Syntax for random generator
// const randomItem = myArray[Math.floor(Math.random() * myArray.length)];
// console.log(`length: ${yourCollectables.length}`)
// console.log(`second item: ${yourCollectables[1]}`)

// // Add an item at the end 

// yourCollectables[3] = 'Hand warmers'

const getRandomItem = function (array) {
    const randomItem = [Math.floor(Math.random() * array.length)]
    return array[randomItem]
}

console.log(getRandomItem(yourCollectables))


