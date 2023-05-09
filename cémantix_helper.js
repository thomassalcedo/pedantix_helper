wordArray = [
    "à", "dans", "par", "pour", "en", "ver", "vert", "verre", "avec", "deux", "sans", "cent", "sang", "sous", "sur", "sûr", "lui",
    "mais", "ou", "où", "et", "donc", "or", "hors", "ni", "car",
    "qui", "que", "quoi", "donc",
    "mon", "ton", "son", "ma", "ta", "sa", "mes", "tes", "ses",
    "un", "une", "de", "des", "du", "au", "aux", "le" , "la", "les", "se",
    "e", "r", "t", "y", "p", "q", "qu", "d", "j", "l", "m", "c", "n", "s",
    "je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles",
    "lequel", "lesquels", "auquel", "auquels",
    "durant", "pendant", "avant", "après",
    "comment", "quand",
    "avoir", "être",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31",
    "er", "ième", "ème",
    "i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv", "xv", "xvi", "xvii", "xviii", "xix", "xx", "xxi"
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
        await sleep(100);
    }
}

loopFromArray();
