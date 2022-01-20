console.log("Hello World, this is the story of Jon Snow")

let backpack = []
backpack.push("Sword")
backpack.push("Shield")
backpack.push("Food")

//backpack.shift()
backpack.splice(0, 1)

let furCoat = 'Fur Coat'

backpack.push(furCoat)
backpack.pop()


backpack.push("Flint", "Blanket", "Knife", "Toothbrush")

let backpack2 = backpack.splice(3, 3)

let itemCount = backpack.length + backpack2.length
console.log(itemCount)

/*for (let i = 0; i < backpack.length; i++) {
    console.log(backpack[i])
}
for (let i = 0; i <= backpack2.length -1; i++) {
    console.log(backpack2[i])
} */

backpack.push("hat")

//for (let i = 0; i < 3; i++) {
//    console.log(backpack[i])
//}

/* if (backpack.length >= 3) {
    for (let i = 0; i < 3; i++) {
        console.log(backpack[i])
    }
} else {
    for(let i = 0; i < backpack.length; i++) {
        console.log(backpack[i])
    }
} */

// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log('----------------', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log("guessMe is divisible by 4 or 5. Added 25")
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log("guessMe is divisible by 3. Subtracted 27")
        guessMe -= 27
    } else {
        console.log("Hit else, added 3")
        guessMe += 3
    }
    guessMe += 22
    console.log(`Added 22, guessMe is now ${guessMe}`)
}

console.log("Final value: ", guessMe)