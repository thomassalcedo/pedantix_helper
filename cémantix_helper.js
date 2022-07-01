wordArray = [
    "a", "à", "dans", "par", "pour", "en", "ver", "vert", "verre", "avec", "deux", "sans", "cent", "sang", "sous", "sur", "sûr", "lui",
    "mais", "ou", "où", "est", "et", "est", "donc", "or", "hors", "ni", "car",
    "qui", "que", "quoi", "donc",
    "mon", "ton", "son", "ma", "ta", "sa", "mes", "tes", "ses",
    "un", "une", "de", "des", "du", "au", "aux", "le" , "la", "les", "se",
    "e", "r", "t", "y", "p", "q", "qu", "d", "j", "l", "m", "c", "n", "s",
    "je", "tu", "il", "elle", "nous", "vous", "ils", "elles",
    "lequel", "lesquels", "auquel", "auquels",
    "durant", "pendant", "avant", "après",
    "comment", "quand"
];

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setWord(word){
    document.getElementById("pedantix-guess").value = word;
}

function clickButton(){
    document.getElementById("pedantix-guess-btn").click();
}

async function loopFromArray(){
    for (let i = 0; i<wordArray.length; i++){
        console.log(i + ": " + wordArray[i]);
        setWord(wordArray[i]);
        clickButton();
        await sleep(50);
    }
}

loopFromArray();
