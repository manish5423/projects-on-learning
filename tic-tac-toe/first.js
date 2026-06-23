        //   0  1  2  3   4  5  6  7  8
const arr = ["","","","","","","","",""];
let totalInsert =0;
let winnerdecide =false;


const box = document.getElementById("tic");
const stat = document.querySelector("p");

let player ="X";
// row: 012 , 345 , 678
// col: 036, 147, 258
// dig: 048 , 246

function wining(member){
    if(arr[0]==member && arr[1]==member && arr[2]==member)
        return true;
    if(arr[3]==member && arr[4]==member && arr[5]==member)
        return true;
    if(arr[6]==member && arr[7]==member && arr[8]==member)
        return true;
    if(arr[0]==member && arr[3]==member && arr[6]==member)
        return true;
    if(arr[0]==member && arr[4]==member && arr[8]==member)
        return true;
    if(arr[2]==member && arr[4]==member && arr[6]==member)
        return true;
    if(arr[1]==member && arr[4]==member && arr[7]==member)
        return true;
    if(arr[2]==member && arr[5]==member && arr[8]==member)
        return true;
    else 
        return false;
}

box.addEventListener('click',(e)=>{
    // console.log(e.target);

    if(e.target.id === "tic"|| arr[e.target.id] !== "" || totalInsert == 9 || winnerdecide){
        return;
    }
  
    const clic = e.target;
    clic.textContent = player;
    const index = e.target.id;
    // console.log(index);

    // add the player in the array.
    arr[index] = player;
    totalInsert++;


    if(wining(player)){
        stat.textContent = `Player ${player} is the winner`;
        winnerdecide = true;
        return;
    } 
    
    else if(totalInsert === 9){
        stat.textContent = "It's a tie!";
        return;
    }


   if(player === "X"){
         player = "O";
   }else{
        player = "X";
   }
//    console.log(arr);
  
   stat.textContent = `Player ${player} Turn`;

});

const reset = document.getElementById("but");

reset.addEventListener('click',()=>{

    totalInsert=0;
    winnerdecide=false;
    for(let i=0;i<arr.length;i++){
        document.getElementById(i).textContent="";
        arr[i]="";
    }
     stat.textContent = "Player X's turn";

});