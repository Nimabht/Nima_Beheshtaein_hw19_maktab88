const btn=document.getElementById("btn")
if(!!btn) {
    btn.onclick=()=>{
        const newGame=new Game()
        newGame.play()
    }
}