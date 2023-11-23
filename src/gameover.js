const progression = localStorage.getItem('progression')

const progressionStatus = document.getElementById('progressionNo')

const playerMessage = document.getElementById('playerMessage')
const playerMessageContent = localStorage.getItem('playerMessage')

const advice = document.getElementById('advice')

const playAgain = document.getElementById('playAgain')

window.onload=()=>{
    progressionStatus.innerHTML = progression
    if(playerMessageContent != `undefined`){
        playerMessage.innerHTML = playerMessageContent
    }

    advice.innerHTML = advArray[Math.floor(Math.random()*7)]
    console.log(Math.floor(Math.random()*7))

}

playAgain.addEventListener('click',()=>{
    window.location.href = './../index.html'
})

let advArray = [
    'Amidst the uncharted, wield caution as your guiding lantern. Within the enigmatic abyss, lies an arsenal of unfathomed might and secrets be    yond mortal grasp. Respect the unknown, for within its veils lie untold wonders and unforeseen perils.',

    'Caution in the face of the unknown is an invaluable ally on your quest. When delving into the mysteries that lie ahead, remember that the unfamiliar holds untold power and secrets beyond comprehension.',

    'Keep watchful vigilance as you venture forth into the unknown. Within its cryptic embrace lies an arsenal of untapped potentials and enigmatic secrets, waiting to be unraveled by the intrepid.',

    "In the dance with the unknown, wield caution as your most trusted companion, for it harbors both unfathomable treasures and unforeseen perils.",

    'Journey with vigilance through the uncharted territories, for therein lies the allure of undiscovered powers and secrets veiled in obscurity.',

    `Contemplate your decisions, for within each choice lies the seed of transformation. Consider the ripples they may create in the fabric of your tale, shaping not just the narrative, but the essence of your character's odyssey.`,

    `Deliberate each choice as if it were a branching path in an epic saga. Your decisions, like ink on parchment, inscribe the chronicles of your character's journey, shaping destinies and weaving the tapestry of your tale.`
]