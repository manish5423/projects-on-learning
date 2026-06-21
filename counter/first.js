const div = document.querySelector('div');
const h1 = document.querySelector('h1');
const incre = document.querySelector('button')[0];

let count =0;
div.addEventListener('click',(e)=>{
//    console.log(e);
    // console.log(e.target)
    if(e.target.id==="inc"){
        count++;
        // console.log("count "+count);
        h1.textContent= `Count : ${count}`;
    }
    else if(e.target.id==="dec"){
        if(count==0){
            return;
        }
         count--;
        // console.log("count "+count);
         h1.textContent= `Count : ${count}`;
    }

    else if(e.target.id==="res"){
        count=0;
        h1.textContent=`Count : ${count}`
    }

})