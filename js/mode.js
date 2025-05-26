const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

const modeLocal = localStorage.getItem("mode")

const modeLocalStorage = () =>{
    body.classList.toggle("dark-mode")
    darkBtn.classList.toggle("hidden")
    lightBtn.classList.toggle("hidden")
}
if(modeLocal){
    modeLocalStorage()
}
const toggleModeBtn = () =>{
    modeLocalStorage()
}

darkBtn.addEventListener("click", ()=>{
    toggleModeBtn()
    localStorage.setItem("mode", "dark-mode")
})
lightBtn.addEventListener("click", ()=>{
    toggleModeBtn()
    localStorage.setItem("mode", "")
})













