'use strict';

describe('fizbuzzwhizz', () => {

  // write your tests here...
it("should console 'Fizz' when 'special a is b the same time'", () => {
       //GIVEN
    let a = 3;
    let b = 5;
    let c = 7;
    let i = 30;
    //WHEN
    let result = fizBuzzwhizz(a,b,c,i);
     //THEN
    expect(result).toEqual('Fizz');
  })
it("should console 'Fizz' when 'normal a times'", () => {
    //GIVEN
    let a = 3;
    let b = 5;
    let c = 7;
    let i = 6;
    //WHEN
    let result = fizBuzzwhizz(a,b,c,i);
    //THEN
    expect(result).toEqual('Fizz');
  });
  it("should console 'Buzz' when 'b times'", () => {
      //GIVEN
    let a = 3;
    let b = 5;
    let c = 7;
    let i = 10;
    //WHEN
    let result = fizBuzzwhizz(a,b,c,i);
     //THEN
    expect(result).toEqual('Buzz');
  });
   it("should console 'Whizz'when 'c times'", () => {
       //GIVEN
    let a = 3;
    let b = 5;
    let c = 7;
    let i = 14;
    //WHEN
    let result = fizBuzzwhizz(a,b,c,i);
     //THEN
    expect(result).toEqual('Whizz');
  })
     it("should console 'FizzBuzz' when 'a and b the same times'", () => {
       //GIVEN
    let a = 3;
    let b = 5;
    let c = 7;
    let i = 15;
    //WHEN
    let result = fizBuzzwhizz(a,b,c,i);
     //THEN
    expect(result).toEqual('FizzBuzz');
  })
   it("should console 'BuzzWhizz' when 'b and c the same times'", () => {
       //GIVEN
    let a = 3;
    let b = 5;
    let c = 7;
    let i = 70;
    //WHEN
    let result = fizBuzzwhizz(a,b,c,i);
     //THEN
    expect(result).toEqual('BuzzWhizz');
  })
     it("should console 'FizzWhizz' when 'a and c the same times'", () => {
       //GIVEN
    let a = 3;
    let b = 5;
    let c = 7;
    let i = 21;
    //WHEN
    let result = fizBuzzwhizz(a,b,c,i);
     //THEN
    expect(result).toEqual('FizzWhizz');
  })
   it("should console 'FizzBuzzWhizz' when 'a , b , c the same times'", () => {
       //GIVEN
    let a = 2;
    let b = 3;
    let c = 5;
    let i = 60;
    //WHEN
    let result = fizBuzzwhizz(a,b,c,i);
     //THEN
    expect(result).toEqual('FizzBuzzWhizz');
  })
  it("should console i when 'else'", () => {
       //GIVEN
    let a = 3;
    let b = 5;
    let c = 7;
    let i = 2;
    //WHEN
    let result = fizBuzzwhizz(a,b,c,i);
     //THEN
    expect(result).toEqual(i);
  })

