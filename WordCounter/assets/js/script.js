const ignore = ['.', ';', ',', '?', '!', '"', "'", '`', '(', ')', '´', '~'];

function check(word) {

    word = String(word);
    for(i=0; i<ignore.length; i++){
        while(word.indexOf(ignore[i]) > -1) {
            word = word.replace(ignore[i], '');
        }
    }
    return word;
}


document.querySelector('button').addEventListener('click', () => {
    
    let words = document.querySelector('#words').value;
    words = words.split(' ');

    let filter = words.filter(e => e.length > 1);
    let validWords = filter.map(e => check(e));

    let wordsRepeat = validWords.reduce((accumulator, word) => {
        if(word in accumulator) {
            accumulator[word]++;
        }
        else {
            accumulator[word] = 1;
        }
        return accumulator
    }, {})

    wordsTotal = [];

    for(word in wordsRepeat) {
        wordsTotal.push(`${word}: ${wordsRepeat[word]}`)
    }

    let contWords = document.querySelector('#cont-words');

    if(wordsTotal) {
        wordsTotal.map(e => {
            let div = document.createElement('div');
            div.className = "words";
            let p = document.createElement('p');

            p.append(e);
            div.append(p);
            contWords.append(div)
        })
    }
})