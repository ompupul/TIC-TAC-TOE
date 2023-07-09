const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info")
const newGamebtn = document.querySelector(".btn")

let currentplayer;
let gamegrid;
const winningPosition =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//let's create a function to initialise the game

function  initGame(box,index){
currentplayer = "X";
gamegrid = ["","","","","","","","",""]
boxes.forEach((box,index) => {
    box.innerText = "";
    boxes[index].style.pointerEvents = 'all';
//remove green color
box.classList = `box box${index+1}`;

})
gameInfo.innerText=`current player - ${currentplayer}`

newGamebtn.classList.remove("active")
}
initGame();

boxes.forEach((box, index)=>{
    box.addEventListener("click",()=>{
        handelclick(index);
    })
})
 function handelclick(index){
    if(gamegrid[index] === ""){
boxes[index].innerText = currentplayer;
gamegrid[index] =  currentplayer;
boxes[index].style.pointerEvents = 'none';
//sawping players
swapTurn();
//checking if anyone wins
checkGameover();
    }
}
function swapTurn(){
    if(currentplayer === "X"){
currentplayer = "O"
    }
    else{
        currentplayer = "X"
    }
    gameInfo.innerText = `current player - ${currentplayer}`
}

function checkGameover(){

let answer = "";
winningPosition.forEach((position)=>{
    // all 3 boxes should be non empty and exactly same in value
    if((gamegrid[position[0]] !== "" || gamegrid[position[1]]!=="" || gamegrid[position[2]] !=="")&&(gamegrid[position[0]] === gamegrid[position[1]] )&&(gamegrid[position[1]] === gamegrid[position[2]])){
       //check if winner is X
        if(gamegrid[position[0]] === "X")
        answer = "X"
        else 
        answer = "O"

        //disable pointer events
        boxes.forEach((box)=>{
            box.style.pointerEvents =  'none'
        })
        //now we know winner is X/O
        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");
    
    }
})
// it menas we have a winner
if(answer !==""){
    gameInfo.innerText = `winner player - ${answer}`
    newGamebtn.classList.add("active")
return;
}
//let's check tie or not
let fillcount = 0 ;
gamegrid.forEach((box)=>{
    if(box!=="")
    fillcount++;
});
if(fillcount ===9){
    gameInfo.innerText ="Game tied"
    newGamebtn.classList.add("active")
}
  
};


newGamebtn.addEventListener("click",initGame);












