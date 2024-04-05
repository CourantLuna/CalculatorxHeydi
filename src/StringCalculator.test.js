const {add} = require('./StringCalculator.js');

/*
 Step 1: Create a function add that takes a String and returns a String:

- An empty string will return “0”.
- for a single number input
- The method can take 0, 1 or 2 numbers separated by comma, and returns their sum.

Example of inputs: "", "1", "1.1,2.2".*/

describe('Step 1: Basic add function', () => {
    test('returns "0" for empty string', () => {
      expect(add("")).toBe("0");
    });
  
 test('returns the same number for a single number input', () => {
 
      expect(add("1")).toBe("1");
    });
  
    test('returns the sum of two numbers separated by comma', () => {
      expect(add("1.1,2.2")).toBe("3.3");
    });

  });

  /*
  Step 2: Many numbers
 - Allow the add method to handle an unknow number of arguments.
  */
describe('Step 2: Allow to add many numbers', () => {
    test('should correctly sum more than two numbers', () => {
        expect(add("1,4.2,4.6,7.5,5")).toBe("22.3");
    });
 });

 /*
 STEP 3: Newline as separator
Allow the add method to handle newlines as separators:
"1\n2,3" should return "6".
"175.2,\n35" is invalid and should return the message "Number expected but '\n' found at position 6."
 */
describe('Step 3: Allow the add method to handle newlines separator', () => {
  test('should handle newlines as separators', () => {
      expect(add("1\n2,3")).toBe("6.0");
    });
  
    test('An error message should be returned if the entry has more '+
    'than 1 separator followed by another and not a number.', () => {
      expect(add("175.2,\n35")).toBe("Number expected but '\\n' found at position 6.");
    });
}); 


/*
STEP 4: Missing number in last position
Don’t allow the input to end in a separator.

"1,3," is invalid and should return the message Number expected but EOF found.
 */
describe('Step 4: Missing number in last position', () => {
  test('should return the message Number expected but EOF found.', () =>{
      expect(add("1,3,")).toBe('Number expected but EOF found.');
  });

  test('should return "Number expected but EOF found." if the input ends with "\\n"', () => {
    expect(add('1,2,3\n')).toBe('Number expected but EOF found.');
  });

  test('should return "Number expected but EOF found." if the input starts with ","', () => {
    expect(add(',1,2,3')).toBe('Number expected but EOF found.');
  });

  test('should return "Number expected but EOF found." if the input starts with "\\n"', () => {
    expect(add('\n1,2,3')).toBe('Number expected but EOF found.');
  });
});


/*
STEP 5:Custom separators 
 */
describe('STEP 5: add custom separators', () => {
  test('handles custom delimiter ";"', () => {
    expect(add("//;\n1;2")).toBe("3.0");
  });

  test('handles custom delimiter "|"', () => {
    expect(add("//|\n1|2|3")).toBe("6.0");
  });

  test('handles custom delimiter "sep"', () => {
    expect(add("//sep\n2sep3")).toBe("5.0");
  });

});
