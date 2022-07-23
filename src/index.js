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
    let exprList = expr.match(/.{1,10}/g);
    let result = [];
    let symbolList = [];
    let symbol;
    for (let i = 0; i < exprList.length; i++) {
      let word = exprList[i].match(/.{1,2}/g);
      let symbolWord = '';
      for (let j = 0; j < word.length; j++) {
        if (word[j] === '10') {
          symbolWord = symbolWord + '.';
        } else if (word[j] === '11') {
          symbolWord = symbolWord + '-';
        }
      }
      if (typeof MORSE_TABLE[symbolWord] === 'undefined') {
        result[i] = ' ';
      } else {
        result[i] = MORSE_TABLE[symbolWord];
      }
      // write your solution here
    }
    return result.join('');
  }
  

module.exports = {
    decode
}
