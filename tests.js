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
