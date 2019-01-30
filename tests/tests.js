const test = QUnit.test;
import fizzBuzz from '../src/myfunction.js';

test('if number is divisible by 3, Fizz', function(assert){
    const input = 6;
    const output = fizzBuzz(input);
    assert.equal(output, 'Fizz');
});

test('if number is divisible by 5, Buzz', function(assert){
    const input = 10;
    const output = fizzBuzz(input);
    assert.equal(output, 'Buzz');
});

test('if number is divisible by 15 (3 and 5) , FizzBuzz', function(assert){
    const input = 30;
    const output = fizzBuzz(input);
    assert.equal(output, 'FizzBuzz');
});

test('if number is not divisible by 15 (3 or 5)', function(assert){
    const input = 7;
    const output = fizzBuzz(input);
    assert.equal(output, input);
});
