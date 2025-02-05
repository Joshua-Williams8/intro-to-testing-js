// Unit tests for the helloWorld function
// describe takes in a STRING, as a DESCRIPTION
// 2nd input is a function that houses each INDIVIDUAL TEST
describe('helloWorld', function() {
  //Each individual test is defined with IT
  //It takes in a STRING to ...
  //the 2nd part is a function
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
      //expect function is a a call to the typeof, and the .tobe is what I expect the output to be.
      //output as in what I expect to happen and return this.
    });
    it('should return a string when called', function() {
      //expecting the type of helloWorld() function toBe returned is "string"
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    //.not.toBe would not return undefined.
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function() {
  it("Should be a defined function", function(){
    expect(typeof sayHello).toBe("function");
  });
  it("should return a string", function() {
    expect(typeof sayHello("")).toBe("string");
  });
  it("should never return 'undefined' when called", function() {
    expect(sayHello("")).not.toBe(undefined);
  });
  it('should return the string "Hello, Jane!" when executed', function() {
    expect(sayHello("Jane")).toBe("Hello, Jane!");
  });
  it('should return the string "Hello, Josh!" when executed', function() {
    expect(sayHello("Josh")).toBe("Hello, Josh!");
  });
  it('should return the string Hello, Alex!" when executed', function() {
    expect(sayHello("Alex")).toBe("Hello, Alex!");
  });
  it('should return the string "Hello, Pat!" when executed', function() {
    expect(sayHello("Pat")).toBe("Hello, Pat!");
  });
  it('undefined should return the string "Hello, World!" when executed', function() {
    expect(sayHello()).toBe("Hello, World!");
  });
  it("true should return \"Hello, World!\" when executed", function() {
    expect(sayHello(true)).toBe("Hello, World!");
  });
  it('false should return "Hello, World!" when executed', function() {
    expect(sayHello(false)).toBe("Hello, World!");
  });
  it('null should return "Hello, World!" when executed', function() {
    expect(sayHello(null)).toBe("Hello, World!");
  });
  it('"" should return "Hello, World!" when executed', function() {
    expect(sayHello("")).toBe("Hello, World!");
  });
  it('2.3 should return "Hello, World!" when executed', function() {
    expect(sayHello(2.3)).toBe("Hello, World!");
  });
  it('"5" should return "Hello, World!" when executed', function() {
    expect(sayHello("5")).toBe("Hello, World!");
  });
  it('an array should return "Hello, World!" when executed', function() {
    expect(sayHello([1,2])).toBe("Hello, World!");
  });
  it('a function should return "Hello, World!" when executed', function() {
    expect(sayHello(helloWorld)).toBe("Hello, World!");
  });
});
//My stuff below test
//When writing code for test, try to get away with bare minimum, so you can make sure you get the
//outputs you want, without changing too much of the code. in a project, cause changing too much
//could cause more problems than it will fix.
describe("isFive", function() {
  it("should be a defined function", function() {
    expect(typeof isFive).toBe("function");
  });
  it('should return a boolean when called', function() {
    //expecting the type of helloWorld() function toBe returned is "string"
    expect(typeof isFive()).toBe("boolean");
  });
  it("number 5 input should return true",function() {
    expect(isFive(5)).toBe(true);
  });
  it("number 1 input should return false",function() {
    expect(isFive(1)).toBe(false);
  });
  it("-8 input should return false", function() {
    expect(isFive(-8)).toBe(false);
  });
  it('string "5" input should return true',function() {
    expect(isFive("5")).toBe(true);
  });
});

describe("isEven", function() {
  it("should be a defined function", function() {
    expect(typeof isEven).toBe("function");
  });
  it('should return a boolean when called', function() {
    //expecting the type of helloWorld() function toBe returned is "string"
    expect(typeof isEven()).toBe("boolean");
  });
  it('number 2 input should return true',function() {
    expect(isEven(2)).toBe(true);
  });
  it('-4 input should return true', function() {
    expect(isEven(-4)).toBe(true);
  });
  it('number 3 input should return false',function() {
    expect(isEven(3)).toBe(false);
  });
  it('"banana" input should return false',function() {
    expect(isEven("banana")).toBe(false);
  });
  it('string "8" input should return true',function() {
    expect(isEven("8")).toBe(true);
  });
  it('Infinity input should return false',function() {
    expect(isEven(Infinity)).toBe(false);
  });
  it('false input should return false',function() {
    expect(isEven(false)).toBe(false);
  });
  it('a blank input should return false',function() {
    expect(isEven()).toBe(false);
  });
});

describe("isVowel", function() {
  it("should be a defined function", function() {
    expect(typeof isVowel).toBe("function");
  });
  it('should return a boolean when called', function() {
    //expecting the type of helloWorld() function toBe returned is "string"
    expect(typeof isVowel()).toBe("boolean");
  });
  it('string "a" input should return true',function() {
    expect(isVowel("a")).toBe(true);
  });
  it('string "A" input should return true', function() {
    expect(isVowel("A")).toBe(true);
  });
  it('string "y" input should return false',function() {
    expect(isVowel("y")).toBe(false);
  });
  it('4 input should return false',function() {
    expect(isVowel(4)).toBe(false);
  });
  it('true input should return true',function() {
    expect(isVowel(true)).toBe(false);
  });
  it('false input should return false',function() {
    expect(isVowel(false)).toBe(false);
  });
  it('string "banana" input should return false',function() {
    expect(isVowel("banana")).toBe(false);
  });
  it('a blank input should return false',function() {
    expect(isVowel()).toBe(false);
  });
});

describe("add", function() {
  it("should be a defined function", function() {
    expect(typeof add).toBe("function");
  });
  it('should return a number when called', function() {
    //expecting the type of helloWorld() function toBe returned is "string"
    expect(typeof add()).toBe("number");
  });
  it('2,3 input should return 5',function() {
    expect(add(2,3)).toBe(5);
  });
  it('string -3,-9 input should return -12', function() {
    expect(add(-3,-9)).toBe(-12);
  });
  it('string "5",6 input should return 11',function() {
    expect(add("5",6)).toBe(11);
  });
  it('"-4","10" input should return 6',function() {
    expect(add("-4",10)).toBe(6);
  });
  it('"banana","split" input should return NaN',function() {
    expect(Number.isNaN(add("banana","split"))).toBe(true);
  });
  it('2,"apples" input should return NaN',function() {
    expect(Number.isNaN(add(2,"apples"))).toBe(true);
  });
  it('a blank input should return NaN',function() {
    expect(Number.isNaN(add())).toBe(true);
  });
});
