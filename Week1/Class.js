class Animal {
  constructor(name, legCount, speak) {
    this.name = name;
    this.legCount = legCount;
    this.speak = speak;
  }
  static species() {
    console.log("I am an Animal.");
  }
  /* 
  Template Literals: Template literals are enclosed by backticks (`) instead of single quotes (') or double quotes ("). They allow for multi-line strings and string interpolation.

  String Interpolation: Within a template literal, you can embed expressions using ${...}. These expressions are evaluated and then included in the resulting string.
*/
  describe() {
    return `The ${this.name} has ${this.legCount} legs`;
  }
  noise() {
    return `The ${this.name} is speaking ${this.speak} ${this.speak}`;
  }
}
let dog = new Animal("dog", 4, "bhow");
console.log(dog.describe());
console.log(dog.noise());

// static method is method of class
Animal.species();
