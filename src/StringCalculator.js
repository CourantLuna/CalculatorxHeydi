const { before } = require("node:test");
// STEP 1: Basic add function
function add (stringOperation)
{
        if(stringOperation === "") return "0";
        const numbers = stringOperation.split(",").map(Number);
        if(numbers.length === 1){return numbers[0].toString();}
        if(numbers.length === 2){return (numbers[0]+numbers[1]).toFixed(1).toString();}

}

// STEP 2: Many Numbers to add
/*function add(stringOperation)
{ 
    if (stringOperation === "") {return "0";}
    const numbers = stringOperation.split(",").map(Number);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum.toFixed(1).toString();
}    */

// STEP 3: Allow newlines as separators
/*function add(stringOperation)
{ 
    if (stringOperation === "") {return "0";}

    if      (stringOperation.match(/,\n/)) {
        return `Number expected but '\\n' found at position ${stringOperation.search(/,\n/)+1}.`;} 
    else if (stringOperation.match(/,,/)){
        return `Number expected but ',' found at position ${stringOperation.search(/,,/)+1}.`;}
    else if (stringOperation.match(/\n,/)){
            return `Number expected but ',' found at position ${stringOperation.search(/,\n/)+2}.`;} 
    else if (stringOperation.match(/\n\n/)){
            return `Number expected but '\\n' found at position ${stringOperation.search(/\n\n/)+2}.`;}         
    else {
        const numbers = stringOperation.split(/,|\n/).map(Number);
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        return sum.toFixed(1).toString();
    }
}    */


// STEP 4: Missing number in last position
/*
function add(stringOperation)
{ 
    //returns "0" for empty string
    if (stringOperation === "") {return "0";}

    // don't allow duplicated separators
    if      (stringOperation.match(/,\n/)) {
            return `Number expected but '\\n' found at position ${stringOperation.search(/,\n/)+1}.`;} 
    if (stringOperation.match(/,,/)){
            return `Number expected but ',' found at position ${stringOperation.search(/,,/)+1}.`;}
    if (stringOperation.match(/\n,/)){
            return `Number expected but ',' found at position ${stringOperation.search(/,\n/)+2}.`;} 
    if (stringOperation.match(/\n\n/)){
            return `Number expected but '\\n' found at position ${stringOperation.search(/\n\n/)+2}.`;}

    // Don’t allow the input to end/start in a separator.
    else if ((/^[\,\n]/).test(stringOperation)) {
            return "Number expected but EOF found.";} 
    else if   ((/[\,\n]$/).test(stringOperation)) {
                return "Number expected but EOF found.";} 

    //Process the string and calculate the sum        
       else{
        const numbers = stringOperation.split(/,|\n/).map(Number);
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        return sum.toFixed(1).toString();
       } 
}    */

//STEP 5: Custom separators
/*function add(stringOperation)
{ 
    //returns "0" for empty string
    if (stringOperation === "") {return "0";}

    let delimiter = /,|\n/;
    let strNumbers = stringOperation;
    
    if((/^[//]/).test(stringOperation)){
    delimiter = (stringOperation.match(/\/\/(.*?)\n/))[1];
    strNumbers = (stringOperation.match(/\n(.*)/))[1]; 

    if(strNumbers.match(`[^0-9.${delimiter}]`, 'g')) {
        return `'${delimiter}' expected but '${cc[0]}' found at position ${cc.index}.`;} 
    
        //Process the string and calculate the sum        

    const numbers = strNumbers.split(delimiter).map(Number);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum.toFixed(1).toString();
        }    
}
 */

module.exports = { add };



