const timerClass=document.getElementsByClassName("timerClass")[0]
const startBtn=document.getElementById("startBtn")
const stopBtn=document.getElementById("stopBtn")
const resetBtn=document.getElementById("resetBtn")

let seconds=0
let interval=null

function timeFormat(sec){
    let minute=Math.floor(sec/60)
    let second=sec%60
    return `${minute.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")}`
}

// start the timer
startBtn.addEventListener("click", ()=>{
    if (interval) return

    interval=setInterval(()=>{
        seconds++
        timerClass.textContent=timeFormat(seconds)
    },1000)
})

// stop the timer
stopBtn.addEventListener("click", ()=>{
    clearInterval(interval)
    interval=null
})

// reset the timer
resetBtn.addEventListener("click", ()=>{
    clearInterval(interval)
    interval=null
    seconds=0
    timerClass.textContent="00:00"
})