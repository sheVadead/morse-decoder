const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const newStr = expr.match(/.{1,10}/g);
    let res = []
    let arrNew;
    for (let item of newStr) {
        if (item === '**********') {
            res.push(' ')
            continue
        }
        let word = item.slice(item.indexOf(1), item.length)
        let morseWord = word.match(/.{1,2}/g)
        arrNew = morseWord.map(function (item) {
            if (item === '11') {
                return item = '-'
            } else {
                return item = '.'
            }
            
        })
        res.push(MORSE_TABLE[arrNew.join('')])
    }
    return res.join('')
}

module.exports = {
    decode
}