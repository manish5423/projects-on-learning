

const buttn = document.getElementById('btn');
const result = document.getElementById('output-container');

async function getData(number=20) {

     const git = await fetch(`https://api.github.com/users?per_page=${number}`);
    const response = await git.json();
    // console.log(response);

     const root = document.getElementById('output-container');
    root.textContent = "";

    for(let user of response){
        const img = document.createElement('img');
        img.src = user.avatar_url;
        img.height = 100;
        img.width = 100;

        const name = document.createElement('h2');
        name.textContent = user.login;

        const div = document.createElement('div');
        div.classList.add('user-card');
        div.append(img,name);

        result.append(div);
    }
}

getData();


const search = document.getElementById('input');

buttn.addEventListener('click',() => {
    const num = Number(search.value);
    getData(num);


});

search.addEventListener('input',()=>{
    const value = search.value.trim();
    const number = Number(value);

    if(isNaN(number) || number < 0 || number > 100){
        alert("Please enter a valid number between 1 and 100");
    }

    if (!isNaN(number) && number >= 1 && number <= 100) {
        getData(number);
    }
})



