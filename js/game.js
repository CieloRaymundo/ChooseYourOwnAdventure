// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "forest.gif",
    levels: {

        start: {
            message: "You are lost in the woods with your friends, it is starting to get dark. You can either go to the cabin or keep walking",
            choices: [
                {
                    text: "Enter the cabin",
                    nextLevel: "cabin",
                },

                {
                    text: "Keep on moving",
                    nextLevel: "Die",
                },
            ]
        },

        cabin: {
            background_image: "storm.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You're in the cabin and you  hear a storm coming. You can either stay longer or start to move before it comes",
            choices: [
                {
                    text: "Stay for a longer time",
                    nextLevel: "StayLonger",
                },
                {
                    text: "Start Walking",
                    nextLevel: "Die",
                },
            ]
        },

        Die: {
            background_image: "creature.jpg",
            message: "While walking in the dark, you and your friends encountered a creature amd it killed you",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        StayLonger: {
            background_image: "thingd.gif",
            message: "In the cabin you start hearing noises and having nightmares, and when you wake in the middle of the night you see a shadow",
            choices: [
                {
                    text: "Stay the night",
                    nextLevel: "stay",
                },
                {
                    text: "Pack up and go",
                    nextLevel: "go",
                },
            ]
        },
        stay: {
            background_image: "space.gif",
            message: "The shadow came again and attacked all of you while you were sleeping and died",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        go: {
            background_image: "space.gif",
            message: "When you started walking you got lost again in the woods and encountered another cabin, you can either enter the cabin or keep mmoving",
            choices: [
                {
                    text: "Go to the cabin",
                    nextLevel: "cabin2",
                },
                {
                    text: "Keep on moving",
                    nextLevel: "move",
                },
            ]
        },
         cabin2: {
             background_image: "cabin.png",
            message: "In the cabin that you, the shadows seemed to follow you and ended up killing you",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
         move: {
            message: "Walking through the woods you and your friends encountered a town that doesn't seem to be far away",
            choices: [
                {
                    text: "Go to the town",
                    nextLevel: "town",
                },
                {
                    text: "Keep Walking",
                    nextLevel: "Die",
                },
            ]
        },
         town: {
            message: "In the town everyone welcomed you and your friends with great joy. Later that same night they ended up killing you",
            choices: [
                {
                    text: "Start Over ",
                    nextLevel: "start",
                },
              ]
         }
    }
};
