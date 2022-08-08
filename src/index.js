const MORSE_TABLE = {
    ['.-']:     'a',
    ['-...']:   'b',
    ['-.-.']:   'c',
    ['-..']:    'd',
    ['.']:      'e',
    ['..-.']:   'f',
    ['--.']:    'g',
    ['....']:   'h',
    ['..']:     'i',
    ['.---']:   'j',
    ['-.-']:    'k',
    ['.-..']:   'l',
    ['--']:     'm',
    ['-.']:     'n',
    ['---']:    'o',
    ['.--.']:   'p',
    ['--.-']:   'q',
    ['.-.']:    'r',
    ['...']:    's',
    ['-']:      't',
    ['..-']:    'u',
    ['...-']:   'v',
    ['.--']:    'w',
    ['-..-']:   'x',
    ['-.--']:   'y',
    ['--..']:   'z',
    ['.----']:  '1',
    ['..---']:  '2',
    ['...--']:  '3',
    ['....-']:  '4',
    ['.....']:  '5',
    ['-....']:  '6',
    ['--...']:  '7',
    ['---..']:  '8',
    ['----.']:  '9',
    ['-----']:  '0',
    ['**********']:  ' ',
};


const OPEN_MORSE = ['10', '11', '**'];


function decode(expr) {
let sort = [];
let stack = [];
let res = []; 
let key = Object.keys(MORSE_TABLE);
let val = Object.values(MORSE_TABLE);


for (let i = 0; i < expr.length; i+=2){
    let currentSymbol = expr.substr(i, 2);
    if (OPEN_MORSE.includes(currentSymbol)) {
        if (currentSymbol === '10'){
            sort.push('.')
        }
        else if (currentSymbol === '11'){
            sort.push('-')
        }
        else if (currentSymbol === '**'){
            sort.push('**')
        }
        
    }
    else {
        sort.push('');
    }
    
}

for (let j = 0; j < sort.length; j+=5){
   let temp = sort[j].concat(sort[j+1], sort[j+2], sort[j+3], sort[j+4]);
    stack.push(temp);

}

for (let n = 0; n < stack.length; n++){
    if (key.includes(stack[n])) {
        let index = key.indexOf(stack[n])
       res.push(val[index])
    }
  
}
     return res.join("");      
}

module.exports = {
    decode
}