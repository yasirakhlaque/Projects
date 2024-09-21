const soultion = document.querySelector('.solution'),
input = document.querySelector('input'),
display = document.querySelector('.display');

function fetchAPI(word) {
    display.innerHTML=`Searching deatails of the word :${word}`;
    const API_URL=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(API_URL).then(res => res.json()).then(result =>
        console.log(result)
    );
}


input.addEventListener("keyup" , (e)=>{
    if(e.key==="Enter" && e.target.value){
        fetchAPI(e.target.value);
    }
});

