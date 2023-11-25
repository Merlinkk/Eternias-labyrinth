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
// progressUpdate : add porgression points in it to show at the end
// add map in inventory for map popup

// 🫙 add images <<<<<<<<<<<?????????????????>>>>>>>>>>>>>>>>
// ✨MAIN STORY LINE 
// ⭕ ADD PROGRESSION

const textNodes = [
    // Main-Story-1 ✨⭕
    {
        id:`Main-Story-1`,
        text: `Far away, within a secluded clearing enveloped by the forest's embrace, a young man stirs from an inexplicable slumber. His eyes flutter open to an unfamiliar world, memories a distant haze shrouded in mist. Yet, a palpable sense of urgency pervades his consciousness—a premonition of imminent danger creeping closer, threatening the tranquility of this land.
        With no recollection of his own identity, only an instinctual awareness of an impending menace, the young man grapples with a single imperative—to ready himself for the encroaching darkness, a looming threat on the horizon that demands preparation and vigilance.'`,
        screenState : {},
        progressUpdate :+5,
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


    // Side-story-1  SIDE STORY RUNIC SYMBOLS ******************************************
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

    // Main-story 1.1 Journey to Eternia City ✨
    {
        id: `Main-story-1.1`,
        text: `As the young man emerges from the tranquil clearing, the dense foliage gradually gives way to a well-trodden path. Each step brings a renewed sense of purpose, a determination to confront the enigma that shrouds his existence. With resolute strides, he sets forth on the journey toward Eternia City.

        The forest's verdant embrace begins to recede, unveiling the sprawling outskirts of the bustling metropolis. Towers adorned with shimmering spires loom in the distance, casting elongated shadows that dance along the path. The city beckons, promising answers to the questions that linger in the young man's mind.`,
        screenState: {},
        progressUpdate: +5,
        options: [
            {
                text: `Continue to Eternia City`,
                nextText: `Eternia-City-1`
            }
        ],
        staminaChange: -10,
        healthChange: +5,
        picSRC: `./../Game-Assets/city-outskirts.jpg`
    },

    // Main-story 1.2 CITY GATES✨
    {
        id: `Eternia-City-1`,
        text: `Upon reaching the city gates, guards clad in polished armor stand watch, their vigilant gazes assessing all who seek entry. The young man approaches, heart pounding with a blend of anticipation and apprehension.

        "State your purpose in Eternia City," the guard demands, eyes keen and unwavering.
        
        A momentary hesitation gives way to a steadfast resolve as the young man speaks, "I seek answers. There's a looming threat, an encroaching darkness... I must understand, prepare."
        
        The guard studies him intently, gauging the sincerity in his voice. After a pregnant pause, the guard nods, granting passage.`,
        screenState: {},
        options: [
            {
                text: `Enter Eternia City`,
                nextText: `City-montage-1`
            }
        ],
        picSRC: `./../Game-Assets/city-gates.png`
    },

    // Main-story 1.3 ENTER CITY MONTAGE✨
    {
        id: `City-montage-1`,
        text: `Eternia City sprawls before him—a tapestry of vibrant markets, towering structures, and a labyrinth of bustling streets. The young man's quest for truth and readiness for the impending danger lead him deeper into the heart of this metropolis, a city teeming with secrets waiting to be unraveled.

        The journey is only beginning, with every corner holding the potential for discovery. The young man's determination fuels his steps, propelling him forward into the heart of the unknown..`,
        screenState: {},
        options: [
            {
                text: `To Town Square`,
                nextText: `Town-Square-1`
            }
        ],
        picSRC: `./../Game-Assets/city-montage.png`
    },

    // Main-story 1.4 Reached Town Square - Choices to go next {trader-magic-tome, tavern, townsfolk}✨
    {
        id: `Town-Square-1`,
        text: `As he immerses himself in this vibrant tapestry, the allure of the markets beckons. Stalls adorned with exotic goods and vibrant fabrics line the streets, their owners calling out in melodic tones, inviting passersby to peruse their wares. The young man weaves through the crowd, drawn by the promise of potential information hidden amid the lively exchanges.

        Yet, the pulsating heart of a city often resides within its taverns—a haven where stories are traded as freely as ale. The young man considers seeking solace within these walls, recognizing the potential for unexpected alliances and valuable tidbits of knowledge hidden within the conversations of diverse patrons.
        
        Alternatively, the city's pulse reverberates through its residents—the townsfolk who navigate its alleys daily. Their whispers and gestures hold the potential for valuable insights, rumors, and local folklore about the encroaching darkness that shadows the land.
        
        The young man stands at a crossroads within the city's labyrinthine streets, poised to embark on his chosen path. His quest for truth and readiness for the impending danger guide his next steps.
        
        Where shall his curiosity lead him first—the vibrant markets, the inviting taverns, or the company of the townsfolk?`,
        screenState: {},
        options: [
            {
                text: `Explore markets`,
                nextText: `magic-tome-trader`
            },
            {
                text: `Go to tavern`,
                nextText: `Tavern-1`
            },
            {
                text: `Talk to townsfolk`,
                nextText: `Townsfolk-1`
            },
        ],
        picSRC: `./../Game-Assets/town-square.jpg`
    },

    // >>CHOICE-1 Explore Markets-1 - Meet Trader - GET MAGIC TOME✨⭕
    {
        id: `magic-tome-trader`,
        text: `As the young man wanders through the labyrinthine markets, a weathered stall catches his eye. An elderly figure, draped in robes adorned with mystical symbols, beckons him closer with a gnarled hand. The man's gaze, clouded by white pupils, flickers with an otherworldly wisdom.

        Muttering incomprehensibly for a brief moment, the old man's wrinkled fingers dance across an array of ancient tomes and artifacts. Suddenly, as if guided by an unseen force, his hand finds a weathered book tucked among the volumes. With deliberate intent, he presents the tome to the young man.
        
        "This," the old man rasps, fixing his gaze on the young man, "will aid you in your journeys to come. It holds the essence of forgotten wisdom, a beacon amid the encroaching darkness."
        
        The young man's fingers trace the weathered cover, sensing a palpable energy emanating from the ancient pages. As he meets the old man's gaze, a silent understanding passes between them—a connection forged in the enigmatic dance of fate.
        
        Grateful yet perplexed by the cryptic encounter, the young man clutches the tome, a tangible token of guidance in this labyrinth of uncertainty.He hesitates on what to do next`,
        screenState: {},
        inventoryChange:['Azure Magic Tome'],
        progression:+5,
        options: [
            {
                text: `Ask the old man about the tome`,
                nextText: `Old-man-1`
            },
            {
                text: `Continue exploring the city`,
                nextText: `Historian-1`
            },
        ],
        picSRC: `./../Game-Assets/magic-tome.jpg`
    },

    // talk to the old man >> redirect to Historian-1 ✨
    {
        id: `Old-man-1`,
        text: `Inquisitive about the tome and its significance, the young man's voice quivers with curiosity as he turns to the old man, seeking further insight into the enigmatic gift.

        "What is the meaning of this tome? How will it aid me?" The young man's words hang in the air, his eyes searching for answers within the depths of the old man's mysterious gaze.
        
        The old man, his visage weathered with age and wisdom, meets the young man's eyes with a knowing look. "My role is done, young traveler. It is not for me to unveil the mysteries held within these pages. Your path is one of discovery and understanding. Seek the answers yourself; the tome shall reveal its purpose when the time is right."
        
        A sense of realization dawns upon the young man—a subtle understanding that some truths are not immediately unveiled but discovered through the journey itself. With a nod of gratitude and a newfound resolve burning within him, he pockets the tome, acknowledging the weight of responsibility that comes with it.
        
        The old man returns to his silent contemplation, his presence fading into the vibrant tapestry of the market. The young man, now laden with the gift of ancient knowledge, stands amidst the bustling stalls, contemplating the next step on his journey.`,
        screenState: {},
        options: [
            {
                text: `Continue exploring the city`,
                nextText: `Historian-1`
            },
            {
                text: `Go to the inn`,
                nextText: `Historian-1`
            },
        ],
        picSRC: `./../Game-Assets/oldman.jpg`
    },

    // >>CHOICE-2 Go to Tavern 
    {
        id: `Tavern-1`,
        text: `The young man, sensing that the answers he seeks might be found amid the whispered conversations and shared tales within the city's taverns, decides to seek solace within their walls.

        The streets wind and twist, guiding him toward a cozy tavern nestled between towering structures. As he pushes the creaking door open, the warmth of the hearth embraces him, accompanied by the harmonious symphony of clinking tankards and murmured conversations.
        
        The interior is a tapestry of life—a blend of laughter, camaraderie, and whispered secrets. Patrons from diverse walks of life gather around wooden tables, their voices rising and falling in animated discussions.
        
        Approaching the bar, the young man catches the eye of the innkeeper, a sturdy figure with a welcoming countenance. The innkeeper nods in acknowledgment, recognizing the young man's intent.`,
        screenState: {},
        options: [
            {
                text: `Talk to Owner`,
                nextText: `Tavern-Owner`
            },
            {
                text: `Eavesdrop on Rumors`,
                nextText: `Eavesdrop`
            },
        ],
        picSRC: `./../Game-Assets/tavern-interior.jpg`
    },

    // >>/>>TALK TO OWNER
    {
        id: `Tavern-Owner`,
        text: `Choosing to engage the innkeeper, the young man approaches the sturdy figure behind the bar, an air of authority surrounding the seasoned tavern owner. With a respectful nod, he initiates a conversation, hoping to glean insights from someone deeply rooted in the city's happenings.

        The innkeeper's eyes, weathered by years of witnessing both revelry and secrets shared in the confines of the tavern, meet the young man's gaze. A silent understanding passes between them as the young man articulates his query about the encroaching darkness.
        
        The innkeeper, a repository of local lore and whispered rumors, shares tales of a nearby forest, shrouded in mystery and rumors of ancient ruins. Legends intertwine with cautionary tales, hinting at the enigmatic forces lurking within those woods—an intrigue that has captivated the imaginations of travelers and locals alike.`,
        screenState: {},
        options: [
            {
                text: `Leave and go to Inn`,
                nextText: `Historian-1`
            },
            {
                text: `Continue exploring City`,
                nextText: `Historian-1`
            },
        ],
        picSRC: `./../Game-Assets/owner.jpg`
    },

    // >>/>> Evasdrop
    {
        id: `Eavesdrop`,
        text: `Opting to discreetly eavesdrop on the conversations swirling around the tavern, the young man positions himself strategically, tuning his ears to the fragmented dialogues that flutter through the air like ephemeral whispers.

        Amidst the tales of adventurous souls seeking treasure and forbidden knowledge within the forest's depths, rumors of ancient ruins resurface—rumblings about arcane relics and forgotten secrets veiled within the shadows of those age-old structures.
        
        The young man sifts through the mosaic of narratives, discerning kernels of truth buried beneath layers of embellishment and hearsay, each snippet contributing to the tapestry of his understanding.
        
        Whichever path he chooses, the young man absorbs these fragments of information, recognizing that the answers he seeks might lie within the forest's enigmatic ruins—a threshold to untold mysteries and perhaps a key to unveiling the looming threat`,
        screenState: {},
        options: [
            {
                text: `Leave and go to Inn`,
                nextText: `Historian-1`
            },
            {
                text: `Continue exploring City`,
                nextText: `Historian-1`
            },
        ],
        picSRC: `./../Game-Assets/evaesdrop.jpg`
    },

    // >>CHOICE-3 Talk to townsfolk
    {
        id: `Townsfolk-1`,
        text: `With a sense of intrigue guiding his steps, the young man veers toward the townsfolk, recognizing the potential treasure trove of information hidden within their whispers and knowing gestures.

        Engaging the residents who traverse the city's alleys daily, the young man seeks to glean insights, rumors, and local folklore about the encroaching darkness that casts its ominous shadow over the land.
        
        Approaching a cluster of townsfolk engaged in animated conversation, he listens attentively to their discussions, his presence blending seamlessly into the ebb and flow of city life. Fragments of rumors drift through the air—whispers of unsettling events, foreboding omens, and cryptic references to an ancient prophecy that looms over the city like an unspoken truth.`,
        screenState: {},
        options: [
            {
                text: `Continue Listening`,
                nextText: `Townsfolk-2`
            },
            {
                text: `Go to Inn`,
                nextText: `Historian-1`
            },
            {
                text: `Continue exploring City`,
                nextText: `Historian-1`
            },
        ],
        picSRC: `./../Game-Assets/townsfolk1.jpg`
    },

    // >>/>> Continue Listening 
    {
        id: `Townsfolk-2`,
        text: `Among the tales shared by the townsfolk, a recurring thread weaves through their narratives—a mention of a forgotten forest, draped in secrecy and whispers of ancient ruins concealed within its depths. Stories of the forest's mysteries intertwine with cautionary tales, hinting at a power that slumbers beneath the earth, waiting for the right catalyst to awaken.

        As he absorbs these fragments of lore, the young man discerns the urgency behind the encroaching darkness—a narrative woven into the fabric of the city's collective consciousness, a truth held within the whispers and shared gazes of its inhabitants.
        
        Feeling a sense of kinship with these storytellers of urban folklore, the young man realizes that within these cryptic narratives, lies the key to unlocking the mysteries that haunt his quest for truth.`,
        screenState: {},
        options: [
            {
                text: `Go to Inn`,
                nextText: `Historian-1`
            },
            {
                text: `Continue exploring City`,
                nextText: `Historian-1`
            },
        ],
        picSRC: `./../Game-Assets/townsfolk.jpg`
    },

    // HISTORIAN ✨⭕
    {
        id: `Historian-1`,
        text: `Amidst the vibrant cityscape, the young man's attention gravitates toward the shadowy figure—a cloaked individual who observes the bustling streets from a distance. Trusting his instincts, he approaches the mysterious figure, drawn by an inexplicable pull.

        As he nears, the figure unveils their countenance, revealing the features of the recluse historian known as Theodric. Theodric's eyes, carrying the weight of ages past, lock onto the young man's, and in that moment, a silent understanding passes between them—an unspoken dialogue that transcends mere words.
        
        With a deliberate motion, Theodric hands the young man an aged, worn-out map, its edges frayed with time. His voice, seasoned with wisdom and mystery, breaks the silence. "The answers you seek lie within the ruins nestled deep in the forest," Theodric begins, his tone measured and resonant. "It is your destiny to uncover these truths and continue onward with your journey into the unfamiliar lands that await."
        
        The young man's senses sharpen, his curiosity and determination ignited by Theodric's direct guidance. There's a weightiness to Theodric's words, an aura of significance that amplifies the young man's understanding of the gravity of his quest.`,
        screenState: {},
        inventoryChange :['map'],
        options: [
            {
                text: `Ask him what he means?`,
                nextText: `Historian-2`
            },
            {
                text: `Leave for the ruins`,
                nextText: `Side-2`
            },
            {
                text: `Go the the Inn`,
                nextText: `Inn`
            },
        ],
        picSRC: `./../Game-Assets/cloaked-man.jpg`
    },

    {
        id: `Historian-2`,
        text: `Perplexed by Theodric's cryptic statement, the young man presses for further clarification, seeking a deeper understanding of the historian's guidance.

        "What do you mean by 'my destiny'?" the young man inquires, his voice laced with curiosity and a hint of urgency.
        
        Theodric meets his gaze once more, the weight of his words measured and deliberate. "It is your destiny to unravel the mysteries concealed within the ruins," he begins, his voice carrying a somber tone. "But I am bound by restrictions imposed upon me by the encroaching darkness. My support can only extend to the confines of this moment—a mere fraction of the aid you seek."
        
        There's a tinge of lament in Theodric's voice, a hint of the limitations that shackle him. His words allude to a larger conflict, one that seems to intertwine their fates amidst the looming threat that casts its shadow upon the land.
        
        The young man absorbs Theodric's revelation, sensing the gravity of the situation. There's an understanding that the historian, despite his depth of knowledge and willingness to assist, is hindered by forces beyond his control.
        
        As Theodric retreats into the shadows, leaving the young man with the map and his enigmatic words lingering in the air, in the city street alone, a sense of determination takes root within him. He comprehends the magnitude of the task ahead, recognizing that while Theodric's support may be limited, the onus to unravel the secrets lies squarely upon his shoulders.`,
        screenState: {},
        options: [
            {
                text: `Leave for the ruins`,
                nextText: `Side-2`
            },
            {
                text: `Go the the Inn`,
                nextText: `Inn`
            },
        ],
        picSRC: `./../Game-Assets/historian2.jpg`
    },
    
    // if you continue you die because of wolves
    {
        id: `Side-2`,
        text: `The moment of decision weighs heavy on the young man as he stands at the city gates, contemplating the path ahead. The call of the forest and its mysterious ruins pulls at him, but a sense of uncertainty clouds his resolve.

        Torn between the urgency to seek the answers concealed within the ancient ruins and the nagging hesitation that tugs at the corners of his mind, he grapples with the decision before him.
        
        The allure of the inn's comfort and the promise of a new day's light tugs at his thoughts, offering the solace of familiar surroundings and the chance to embark on the journey with a fresh perspective. Perhaps a night's rest would bring clarity to his mind, easing the weight of uncertainty that burdens his shoulders.
        
        On the other hand, the urgency to uncover the truths hinted at by Theodric and the map's cryptic pathways fuel his determination. The young man wrestles with the choice between heeding the call of adventure and seeking respite for the night to begin anew with a rested mind. What do you do?`,
        screenState: {},
        options: [
            {
                text: `Continue towards the ruins`,
                nextText: `Side-2.1`
            },
            {
                text: `Go the the Inn`,
                nextText: `Inn`
            },
        ],
        picSRC: `./../Game-Assets/city-gates.png` //🫙 show city gates
    },

    // die going to ruins in the night
    {   
        id: `Side-2.1`,
        text: `Losing his way in the depths of the unfamiliar forest, exhausted and disoriented, he  encounters the dangers lurking within the wilderness. The young man's valiant efforts to escape the pursuing wolves, his heart racing with fear and adrenaline, ultimately culminate in a tragic outcome. The merciless jaws of the wild creatures claim him, sealing his fate in the depths of the uncharted lands he sought to conquer.`,
        healthChange:-60,
        staminaChange:-60,
        screenState: {},
        options: [
            {
                text: `Continue`,
                nextText: `Side-2.2`
            },
        ],
        picSRC: `./../Game-Assets/death-night.gif` //🫙
    },

    {   
        id: `Side-2.2`,
        text: `The young man's valiant efforts to escape the pursuing wolves, his heart racing with fear and adrenaline, ultimately culminate in a tragic outcome. The merciless jaws of the wild creatures claim him, sealing his fate in the depths of the uncharted lands he sought to conquer.The young man's valiant efforts to escape the pursuing wolves, his heart racing with fear and adrenaline, ultimately culminate in a tragic outcome. The merciless jaws of the wild creatures claim him, sealing his fate in the depths of the uncharted lands he sought to conquer.`,
        playerMessage: `The wolves showed no mercy, and with you fatigued, the only end is your unfortunate end.`,
        screenState : {black:true,gameOver:true},
        options: [
            {
                text: `END`,
                nextText: `END`,     //END
            },
        ],
        picSRC: `./../Game-Assets/death-night.gif` //🫙
    },

    {
        id: `Inn`,
        text: `The young man, feeling the weight of uncertainty pressing upon him, opts for the solace of the inn. With a sigh, he turns away from the forest's enigmatic pull, choosing the familiar comforts of the inn's embrace for the night.

        Retreating from the looming mysteries that await in the forest, he seeks refuge within the inn's welcoming walls. The promise of a warm hearth, a soft bed, and the gentle reprieve of the night's rest beckon to him, offering a chance to clear his mind and reassess his path come the dawn of a new day.`,
        screenState: {},
        options: [
            {
                text: `Continue`,
                nextText: `Inn-1`
            },
        ],
        picSRC: `` //🫙 INN
    },

    {
        id: `Inn-1`,
        text: `As he enters the inn, a sense of relief washes over him, momentarily easing the weight of the decisions that weighed heavily on his shoulders. Amidst the flickering glow of hearth fires and the comforting chatter of fellow travelers, he finds a momentary respite from the uncertainties that cloud his mind.

        Settling into the inn's embrace, he contemplates the events that led him here, pondering the mysteries of the forest and the ruins that remain tantalizingly out of reach. Tomorrow's light will bring new opportunities, and perhaps with a rested mind, clarity will dawn upon his quest.
        
        The inn's tranquility envelops him, offering a temporary sanctuary from the complexities and unknowns that lie beyond its doors. The young man retires to his room, seeking solace in the promise of a new day and the possibilities that await with the rising sun.`,
        screenState: {},
        options: [
            {
                text: `Continue`,
                nextText: `Inn-2`
            },
        ],
        picSRC: `` //🫙 INN
    },

    {
        id: `Inn-2`,
        text: `As the morning sun casts its golden hues across the horizon, the young man stirs within the confines of the inn, rejuvenated by a night of rest. With determination rekindled and a sense of purpose guiding his steps, he readies himself for the journey that awaits beyond the inn's threshold.

        The clatter of breakfast chatter and the savory scent of morning fare fill the inn's common room, where travelers gather to break their fast and exchange tales of their own quests. Amidst this lively ambiance, the young man partakes in a hearty meal, fortifying himself for the road ahead.
        
        Equipped with a renewed sense of resolve and clarity brought by the dawn's light, he takes a moment to reassess his belongings, ensuring that he's adequately prepared for the unknown trails that lie beyond the city gates.`,
        screenState: {},
        healthChange:+50,
        staminaChange:+50,
        options: [
            {
                text: `Continue`,
                nextText: `Inn-3`
            },
        ],
        picSRC: `` //🫙 INN
    },

    {
        id: `Inn-3`,
        text: `With his gear in order and a map clasped firmly in hand—a map now ingrained with the cryptic guidance bestowed upon him by Theodric—the young man bids farewell to the comforting embrace of the inn. Stepping into the crisp morning air, he feels a sense of anticipation coursing through his veins, mingled with a hint of apprehension.

        The forest and its elusive ruins beckon once more, their secrets and challenges awaiting his discovery. With each step, the young man advances toward the city gates, ready to embark on a new chapter of his quest, fueled by the determination to unravel the mysteries that await amidst the uncharted wilderness.`,
        screenState: {},
        options: [
            {
                text: `Proceed towards the Ruins`,
                nextText: `Forest-1`
            },
            {
                text: `Go to the Market`,
                nextText: `Forest-1`
            },
        ],
        picSRC: `` //🫙 INN
    },

    {
        id: `Inn-4`,
        text: `As he approaches the gates, the city's bustle gradually fades behind him, and the forest's embrace looms ahead—a canvas of untamed beauty, fraught with enigmas yet to be unveiled.

        With resolve firm and purpose clear, the young man steps beyond the threshold, setting forth on the path that will lead him deeper into the heart of the unknown, where revelations and trials await in equal measure.
        
        Before he proceeds he thinks to go to the market once more to see if there is anything he may need just in case or to proceed towards the Ruins, What do you do?`,
        screenState: {},
        options: [
            {
                text: `Proceed towards the Ruins`,
                nextText: `Forest-1`
            },
            {
                text: `Go to the Market`,
                nextText: `Market-ring`
            },
        ],
        picSRC: `` //🫙 INN
    },

    {
        id: `Market-ring`,
        text: `The young man, drawn by an inexplicable allure, ventures into the hidden shop tucked away from the bustling main street. Amongst the array of eclectic goods, his attention fixates on a peculiar ring nestled among the display.

        A curious sensation pulls him towards the ring, as if an unseen force beckons him to it. Ignoring the array of other items, he reaches out and grasps the ring, feeling an inexplicable connection to this mysterious artifact.
        
        As he holds the ring in his hand, a voice, gentle yet resonant, interrupts his thoughts. It's the shopkeeper observing his actions with a knowing gaze. "You can keep it," the shopkeeper says, breaking the young man's reverie.`,
        screenState: {},
        options: [
            {
                text: `Continue`,
                nextText: `Market-ring-1`
            },
        ],
        picSRC: `` //🫙 INN
    },

    {
        id: `Market-ring-1`,
        text: `Perplexed, the young man looks up, meeting the shopkeeper's eyes, seeking an explanation for the unusual encounter. The shopkeeper then begins to unravel the mystique surrounding the ring.

        "This ring was left here by a mysterious individual," the shopkeeper explains, his tone tinged with a hint of reverence. "They claimed that the ring possesses a unique quality—it calls upon its destined user and serves as an aid to them in times of need."
        
        The shopkeeper's words hang in the air, casting an aura of intrigue around the young man and the enigmatic ring in his possession. It becomes evident that this ring holds a significance beyond its mere appearance—a talisman intertwined with fate, awaiting its destined bearer.
        
        With gratitude and a sense of wonder, the young man accepts the gift, acknowledging the weight of destiny that seems to intertwine with his own.
        
        As he leaves the hidden shop, the ring clasped securely around his finger, he ponders the implications of this mysterious encounter. A new ally in the form of a mystical ring now accompanies him on his quest, its secrets and potential yet to be unveiled.`,
        screenState: {},
        inventoryChange:['Ring - Faunus aries'],
        options: [
            {
                text: `Leave for the Ruins`,
                nextText: `Forest-1`
            },
        ],
        picSRC: `` //🫙 INN
    },
]
