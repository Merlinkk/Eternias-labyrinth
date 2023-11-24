screenState = {}

// story node legends
// text : changes the text that appears on the screen
// screenState : this has two options that if set true can change the screen on which text is displayed
// state: this defines the progression of the story and how much the player has progressed in the story
// options: an array of Objects that explores the player's options
// picSRC: image links 
// inventoryChange: add items to this array dor inventory addition of items
// inventoryRemoval: items in this array are removed from the inventory html
// healthChange: enter value positive or negative it will change the health of the character
// staminaChange: enter value positive or negative it will change the stamina of the character
// playerMessage: inform the player how or why he died

// add map in inventory for map popup

const textNodes = [
    {
        id:`Main-Story-1`,
        text: `Far away, within a secluded clearing enveloped by the forest's embrace, a young man stirs from an inexplicable slumber. His eyes flutter open to an unfamiliar world, memories a distant haze shrouded in mist. Yet, a palpable sense of urgency pervades his consciousness—a premonition of imminent danger creeping closer, threatening the tranquility of this land.
        With no recollection of his own identity, only an instinctual awareness of an impending menace, the young man grapples with a single imperative—to ready himself for the encroaching darkness, a looming threat on the horizon that demands preparation and vigilance.'`,
        screenState : {},
        state: {progression: 0},
        options : [
            {
                text: `Explore the clearing and the nearby surroundings for clues`,
                nextText: `Side-story-1`,
            },
            {
                text: `Set out towards Eternia City to seek answers and prepare for the impending threat`,
                nextText: `Main-story-1.1`,  //REDIRECT TO MAIN STORY
            },
        ],
        picSRC : `./../Game-Assets/Mruq10X.gif`
    },

    // SIDE STORY RUNIC SYMBOLS ******************************************

    // Side-story-1
    {
        id:`Side-story-1`,
        text: `The young man, driven by an insatiable curiosity and an urgency to uncover his purpose, decided to explore the clearing and its immediate vicinity. The tranquil serenity of the place held secrets waiting to be unveiled.
        As he traversed the clearing, he noticed peculiar markings etched upon a weathered stone. Symbols, ancient yet familiar, seemed to beckon to him, hinting at a forgotten past or a hidden truth. The enigmatic markings sparked a distant memory, a fleeting sensation of connection.
        Gently tracing the symbols with his fingertips, a surge of energy coursed through him, as if unlocking a fragment of a lost memory. Visions flickered—a sword radiating with an ethereal light, a chorus of whispers echoing through the ruins, and a sense of foreboding that weighed upon the land.
        `,
        screenState : {},
        state: {progression: 0},
        options : [
            {
                text: `Delve deeper into deciphering the mysterious symbols`,
                nextText: `Side-story-1.1`,         //CONTINUE WITH SIDE STORY
            },
            {
                text: `Venture towards Eternia City, driven by the need for answers and preparation`,
                nextText: `Main-story-1.1`,         //REDIRECT TO MAIN STORY
            },
        ],
        picSRC : `./../Game-Assets/word-wall.jpg`
    },

    // Side-story-1.1
    {
        id:`Side-story-1.1`,
        text: `Drawn by an inexplicable pull toward the mysterious symbols, he immersed himself in deciphering their cryptic meaning. As he concentrated on the enigmatic etchings, an overwhelming surge of energy coursed through him, enveloping his senses in a kaleidoscope of memories, visions, and whispers echoing from the depths of time.
        But the intensity proved too much to bear. Overwhelmed by the flood of fragmented memories and the enigmatic symbols' resonance, he staggered and collapsed to the ground. Darkness closed in, shrouding his consciousness.
        Moments later, his eyes fluttered open, and a familiar yet eerie sensation washed over him. He found himself once again in the heart of the serene clearing, the memories of his previous attempts at deciphering the symbols hazy and distant, as if veiled by a thick fog.
        Disoriented but undeterred, the young man realized that the symbols held a power beyond comprehension, offering glimpses into a forgotten past or an obscured destiny. Yet, they remained elusive, teasing him with fragments of knowledge just beyond his grasp.
        `,
        screenState : {},
        options : [
            {
                text: `Make another attempt at deciphering the mysterious symbols`,
                nextText: `Side-story-1.2`,     //CONTINUE WITH SIDE STORY
            },
            {
                text: `Choose to head towards Eternia City, driven by the need for answers and preparation`,
                nextText: `Main-story-1.1`,      //REDIRECT TO MAIN STORY
            },
        ],

        picSRC : `./../Game-Assets/forest-clearing.jpg`
    },

    // Side-story-1.2
    {
        id:`Side-story-1.2`,
        text: `Driven by an unyielding curiosity and determination, the young man resolved to make another attempt at deciphering the cryptic symbols. Focused and resolute, he immersed himself once more into the mysterious etchings, delving deeper in search of understanding.
        `,
        screenState : {black:true},
        picSRC : ``,
        options : [
            {
                text: `Continue`,
                nextText: `Side-story-1.3`,     //CONTINUE WITH SIDE STORY
            },
            {
                text: `Continue`,
                nextText: `Side-story-1.3`,     //CONTINUE WITH SIDE STORY
            },
        ]
    },

     // Side-story-1.3
    {
        id:`Side-story-1.3`,
        text: `However, as he concentrated on unraveling the symbols' arcane meaning, an overwhelming surge of energy cascaded through him. Visions of the sword's radiance, echoes of ancient whispers, and fragments of forgotten memories flooded his mind in a dizzying torrent. The intensity of the revelations proved too much to bear.
        `,
        screenState : {black:true},
        picSRC : ``,
        options : [
            {
                text: `Continue`,
                nextText: `Side-story-1.4`,     //CONTINUE WITH SIDE STORY
            },
            {
                text: `Continue`,
                nextText: `Side-story-1.4`,     //CONTINUE WITH SIDE STORY
            },
        ]
    },

    // Side-story-1.4
    {
        id:`Side-story-1.4`,
        text: `Suddenly, searing pain ripped through his head, and a crimson stream trickled from his eyes, nose, and ears. Clutching his head in agony, he fell to his knees, the ground beneath him stained with his blood. Nausea overwhelmed him, and he retched, vomiting blood, his body convulsing uncontrollably. 
        `,
        screenState : {black:true, },
        options : [
            {
                text: `Continue`,
                nextText: `Side-story-1.5`,     //CONTINUE WITH SIDE STORY
            },
            {
                text: `Continue`,
                nextText: `Side-story-1.5`,     //CONTINUE WITH SIDE STORY
            },
        ],
        picSRC : ``
    },

    // Side-story-1.5
    {
        id:`Side-story-1.5`,
        text: `In a matter of moments, the young man's consciousness waned, his vision blurring as darkness encroached. His last breath escaped him, and with a silent gasp, he succumbed to the overwhelming influx of information and the fatal toll it took on his body.Silence descended upon the clearing, where the enigmatic symbols remained unchanged, withholding their secrets as the young man's quest for understanding came to an abrupt and tragic end. 
        `,
        screenState : {black:true, gameOver: true},
        picSRC : ``,
        playerMessage: `You die as the influx of information from the runes was too much`,
        options : [
            {
                text: `END`,
                nextText: `END`,     //END
            },
            {
                text: `END`,
                nextText: `END`,     //END
            },
        ]
    },
]
