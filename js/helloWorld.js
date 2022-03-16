'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = "";
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('data', function (data) {
    //console.log(data);
    inputString = String(data);

    //let input = String(data).split(new RegExp("[\n ]+"));
    //main(+(input[0]), +(input[1]));
    main(); 
});

function readLine() {
    return inputString;
}

/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    
    
    console.log(parameterVariable);
    
}


function main() {
    const parameterVariable = readLine();
    
    greeting(parameterVariable);
}