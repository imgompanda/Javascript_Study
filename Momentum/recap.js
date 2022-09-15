// Recap

// always use const
// sometimes use let
// never use var

const toBuy = ['potato', 'tomato', 'pizza'];

console.log(toBuy);
toBuy[2] = 'water';
console.log(toBuy);
toBuy.push('one');
console.log(toBuy);

const player = {
  name: 'HyungWoo',
  age: 25,
};

player.name = 'Park';
console.log(player.name);
player.sexy = 'soon';
console.log(player);

// Fucntion

function plus(a, b) {
  console.log(a + b);
}

plus(3, 5);

const calculator = {
  add: function (a, b) {
    return a + b;
  },

  minus: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },

  divde: function (a, b) {
    return a / b;
  },

  squared: function (a, b) {
    return a ** b;
  },
};

calculator.add(5, 2);
calculator.multiply(5, 2);
calculator.minus(5, 2);
calculator.divde(5, 2);
calculator.squared(5, 2);

const addResult = calculator.add(5, 2);
const minusResult = calculator.minus(addResult, 10);
const multiplyResult = calculator.multiply(10, minusResult);
const divideResult = calculator.divde(multiplyResult, addResult);
const squaredResult = calculator.squared(divideResult, minusResult);

const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);
console.log(KrAge);
// 위 아래 둘의 차이점을 유심히 봐보자
const age2 = 96;
function calculateKrAge2(ageOfForeigner2) {
  ageOfForeigner2 + 2;
  return 'hello!';
}

const KrAge2 = calculateKrAge2(age2);
console.log(KrAge2);
