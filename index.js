const play = document.getElementById('play')

const bgm1 = new Audio('./Game-Assets/ambiance.mp3')
bgm1.play()
bgm1.loop = true

play.onclick=()=>{
    window.location.href = './instructions.html'
}