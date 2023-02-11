 let board = document.querySelector('.board');
 board.style.gridTemplateColumns = "repeat(100, 1fr)";
 board.style.gridTemplateRows = "repeat(100, 1fr)";

 for(let i = 0; i <=10000; i++){
    let square= document.createElement('div');
    square.addEventListener("mouseover", color);
    board.insertAdjacentElement("beforeend", square);
}
function color(){
    let color= document.querySelector('#color').value;
    this.style.backgroundColor=color;
}
function erase(){
    let erase = document.querySelector('#Erase').square.style.backgroundColor="black"
}