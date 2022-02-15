const listOfTd = document.querySelectorAll("td")
const scoreContainer = document.querySelector("h2")
let interval
let score = 1
let speed = 1000
let changeSpeed = speed
let progressiveIndex = 1

function increaseSpeed() {
    if(speed != changeSpeed) {
        clearInterval(interval)
        speed = changeSpeed
        interval = setInterval(moleAppear,speed)
    }
}

function reset() {
    score = 1
    speed = 1000
    changeSpeed = speed
    progressiveIndex = 1
    scoreContainer.innerText = "Press start to start"
    listOfTd.forEach(td => {
        td.classList.remove("mole")
    });
}
function moleAppear() {
    listOfTd[Math.floor(Math.random() * listOfTd.length)].classList.toggle("mole") 
    if(score%5 === 0) {
        if(changeSpeed>400){
            changeSpeed = changeSpeed - progressiveIndex*100
            progressiveIndex = progressiveIndex - 0.1
                if(progressiveIndex<0){
                progressiveIndex =0.5
                }
            increaseSpeed()
        }
        else{
            clearInterval(interval)
            interval = setInterval(moleAppear,changeSpeed)
        }
        console.log(changeSpeed)
        }
    if(score<0) {
        clearInterval(interval)
        reset()
        alert("YOU LOSE")
        
    }
    
}

//add event listeners to the td 

listOfTd.forEach(td => {
    td.addEventListener('click', (event) => {
        if(td.classList.contains("mole")) {
            score ++
            scoreContainer.innerText = "Score " + score
            td.classList.remove("mole")
        }
        else{
            score = score -10
            scoreContainer.innerText = "Score " + score
        }
        //every 10 score points, increase the speed 
    })
})

const startBtn = document.querySelector("button")

startBtn.addEventListener('click', (event) => {

        interval = setInterval(moleAppear,speed)
       
})




