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
    let array = [];
    let reuslt = [];
    let str = '';
    let str2 = '';
    let numChar = expr.length / 10;

//    console.log('numChar = ', numChar);
//    console.log(expr);

    for (let i = 1; i <= numChar; i++) {
        str = expr.slice((i * 10) - 10, (i * 10));
        array.push(str);
    }

//    console.log(array);

    for (let i = 0; i < array.length; i++ ) {
        str = array[i];
        for (let j = 0; j < str.length; j++ ) {
            if (str[j] === '*') {
                str2 = str2 + ' ';
                break;
            }

            if (str[j] !== '0') {
                //reuslt.push(str.slice(j).replace(/(10)/g,'.').replace(/(11)/g,'-'));
                str2 = str2 + MORSE_TABLE[str.slice(j).replace(/(10)/g,'.').replace(/(11)/g,'-')];
                break;
            }
        }
    }

//    console.log(reuslt);
//    console.log(str2);

    return str2;

}

module.exports = {
    decode
}
