const ignore = ['.', ';', ',', '?', '!', '"', "'", '`', '(', ')', '´', '~', '\n'];

function check(word) {

    word = String(word);
    for(i=0; i<ignore.length; i++){
        while(word.indexOf(ignore[i]) > -1) {
            word = word.replace(ignore[i], '');
        }
    }
    return word;
}

function sortWords(a, b) {
    return a[1] - b[1];
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

    let wordsTotal = [];

    for(word in wordsRepeat) {
        wordsTotal.push([word, wordsRepeat[word]]);
    }

    wordsTotal.sort(sortWords).reverse()

    let result = wordsTotal.map(e => {
        let a = String(e).split(',');
        return `${a[0]}: ${a[1]}`;
    })

    let contWords = document.querySelector('#cont-words');
    let div = document.createElement('div');
    div.className = "words";
    let p = document.createElement('p');

    if(result) {
        result.map(e => {

            p.append(e);
            div.append(p);
            contWords.append(div)
        })
    }
})