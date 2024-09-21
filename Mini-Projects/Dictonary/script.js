const soultion = document.querySelector('.solution'),
    input = document.querySelector('input'),
    display = document.querySelector('.display'),
    mean = document.querySelector('.wrapper h3'),
    meaning = document.querySelector('.wrapper .meaning'),
    first = document.querySelector('.synonym .first'),
    second = document.querySelector('.synonym .second'),
    synonyms = document.querySelector('.synonym')
examples = document.querySelector('.wrapper .example');


function data(result, word) {
    if (result.title) {
        display.innerHTML = `No record Found of ${word} Try different word`;
    } else {
        console.log(result);
        let definitions = result[0].meanings[0].definitions[0];
        soultion.classList.add('active');
        mean.innerText = result[0].word;
        meaning.innerText = definitions.definition;

        if (result[0].meanings[0].definitions[0] != result[0].meanings[0].definitions[0].example) {
            examples.innerText = `No Exapmles found`;
        } else {
            examples.innerText = definitions.example;
        }

        if (result[0].meanings[0].synonyms == '') {
            synonyms.innerHTML = `No Synonym found`;
        } else {
            first.innerText = result[0].meanings[0].synonyms;
            second.innerText = result[0].meanings[1].synonyms;
        }

    }
}


function fetchAPI(word) {
    display.innerHTML = `Searching deatails of the word :${word}`;
    const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(API_URL).then(res => res.json()).then(result =>
        data(result, word)
    );
}


input.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && e.target.value) {
        fetchAPI(e.target.value);
    }
});

