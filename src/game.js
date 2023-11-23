localStorage.clear()

const storyText = document.getElementById('story-node')
const blackScreen = document.getElementById('black-screen')
const body = document.body
const picBody = document.getElementById('picid')
const blackScreenText = document.getElementById('black-screen-text')
const continueButton = document.getElementById('continue')
const optionButtonsElement = document.getElementById('choice-box')
const inventorylist = document.getElementById('item-list')
const healthBar = document.getElementById('health-bar')
const staminaBar = document.getElementById('stamina-bar')
const HPCount = document.getElementById('HPCount')
const SPCount = document.getElementById('SPCount')

var progression = 0
var inventoryArray = []
let playerHealth = 70
let playerStamina = 80
healthAndStaminaBArAdjust()

// 
const displayNone = () =>{
    blackScreen.style.display = "none"
    blackScreen.removeEventListener('click',displayNone) 
}
blackScreen.addEventListener('click',displayNone)
// 

startGame() 

// starting game 
function startGame(){
    state ={}
    showTextNode(`Main-Story-1`)
}
// updateing text from StoryDATA JS
function showTextNode(textNodeDesc) {
    const textNode = textNodes.find(textNode => textNode.id == textNodeDesc)
    
    // text updated here
    storyText.innerText = textNode.text
    console.log(textNode.options[0].nextText)

    // picture updated here
    picBody.setAttribute('src', textNode.picSRC)
    
    // options deleted
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)  
    }
    // options added
    textNode.options.forEach(option => {
          const button = document.createElement('div')
          button.innerText = option.text
          button.classList.add('choices')
          button.addEventListener('click', () => selectOption(option))
          optionButtonsElement.appendChild(button)
      })

    //   conditional check for black sccreen and gameover
    if(textNode.screenState.black && textNode.screenState.gameOver){
        const goToGameOver = () => {
            localStorage.setItem('progression',progression)
            localStorage.setItem('playerMessage',textNode.playerMessage)
            window.location.href = "./gameover.html";
            blackScreen.removeEventListener('click', goToGameOver);
        };
        blackScreenText.innerHTML = textNode.text;
        // blackScreen.removeEventListener('click', continueStory);
        blackScreen.addEventListener('click', goToGameOver);
    }
    else{
        if (textNode.screenState.black) {
            blackScreen.style.display = '';
            blackScreenText.innerHTML = textNode.text;
        
            const continueStory = () => {
                showTextNode(textNode.options[0].nextText);
                blackScreen.removeEventListener('click', continueStory);
            };
        
            blackScreen.addEventListener('click', continueStory);
        }
    } 

    // adding items to inventory
    if (textNode.inventoryChange) {
        addToInventory(textNode.inventoryChange);
        updateInventory();
    }

    // removing items from inventory
    if (textNode.inventoryRemoval) {
        textNode.inventoryRemoval.forEach((item) => {
            removeItemFromInventory(item);
        });
        updateInventory();
    }

    // Update Health
    if (textNode.healthChange) {
        // Adjust player's health
        playerHealth += textNode.healthChange;
    
        // Ensure health doesn't go below 0
        if (playerHealth < 0) {
            playerHealth = 0;
        }
    
        // maximum health value, doesn't exceed that value
        const maxHealth = 100; 
        if (playerHealth > maxHealth) {
            playerHealth = maxHealth;
        }
        
    }
    // update stamina
    if (textNode.staminaChange) {
        // Adjust player's stamina
        playerStamina += textNode.staminaChange;
    
        // Ensure stamina doesn't go below 0
        if (playerStamina < 0) {
            playerStamina = 0;
        }
    
        // maximum stamina value , doesn't exceed that value
        const maxStamina = 100; 
        if (playerStamina > maxStamina) {
            playerStamina = maxStamina;
        }
    }
    console.log(playerHealth,playerStamina)
    healthAndStaminaBArAdjust()
}    
    

// continuous function for next node
function selectOption(option) {
    const nextTextNodeId = option.nextText
    // state = Object.assign(state, option.state)
    showTextNode(nextTextNodeId)
    // console.log(nextTextNodeId)
    
}

// update inventory for any changes
function updateInventory(){
    if(inventoryArray.length === 0){
        inventorylist.innerHTML = `<li>none</li>`
    }else{
        inventorylist.innerHTML = ``
        inventoryArray.forEach((element)=>{
            inventorylist.innerHTML += `<li>${element}</li>`
        })
    }
}

// remove item when called
function removeItemFromInventory(itemName) {
    const index = inventoryArray.indexOf(itemName);
    if (index !== -1) {
        inventoryArray.splice(index, 1);
        console.log(`Removed ${itemName} from inventory.`);
    }
    updateInventory()
}

function addToInventory(items) {
    if (Array.isArray(items)) {
        inventoryArray = inventoryArray.concat(items);
        console.log(`Added ${items.join(', ')} to inventory.`);
    }
}

function healthAndStaminaBArAdjust(){
    HPCount.innerText = playerHealth
    SPCount.innerText = playerStamina
    healthBar.style.width = `${playerHealth}%`
    staminaBar.style.width = `${playerStamina}%`
}