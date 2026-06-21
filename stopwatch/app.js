const timedis = document.getElementById("btn");
const start = document.getElementById("time");


// function displayTime(hr,min,sec){

//     start.textContent = `${hr}:${min}:${sec}`;

// }

//    let sec=0;
//    let min =0;
//    let hr =0;

// timedis.addEventListener("click",(e) =>{

   

//    if(e.target.id==='start'){
    
//     timer =setInterval(() => {
//         sec++;

//     if(sec === 60){
//         sec=0;
//         min++
//         displayTime(hr,min,sec);
//     }

//     if(min === 60){
//         min=0;
//         hr++;
//         displayTime(hr,min,sec);
//     }


//     displayTime(hr,min,sec);
//     },1000);



//    }

//    else if(e.target.id==='stop'){
//     clearInterval(timer);
//    }

//    else if(e.target.id==='reset'){
//     clearInterval(timer);
//     sec=0;
//     min=0;
//     hr=0;
//     displayTime(hr,min,sec);
//    }
  
// });



let timer;
let startTime;
let elapsedTime = 0;

function displayTime(hr, min, sec) {
    start.textContent =
        `${String(hr).padStart(2, "0")}:` +
        `${String(min).padStart(2, "0")}:` +
        `${String(sec).padStart(2, "0")}`;
}

timedis.addEventListener("click", (e) => {

    if (e.target.id === "start") {
        clearInterval(timer);

        // Resume support
        startTime = Date.now() - elapsedTime;

        timer = setInterval(() => {

            elapsedTime = Date.now() - startTime;

            let hr = Math.floor(elapsedTime / (1000 * 60 * 60));

            let min = Math.floor(
                (elapsedTime % (1000 * 60 * 60)) / (1000 * 60)
            );

            let sec = Math.floor(
                (elapsedTime % (1000 * 60)) / 1000
            );

            displayTime(hr, min, sec);

        }, 100);

    }

    else if (e.target.id === "stop") {

        clearInterval(timer);

    }

    else if (e.target.id === "reset") {

        clearInterval(timer);

        elapsedTime = 0;
        startTime = 0;

        displayTime(0, 0, 0);

    }

});