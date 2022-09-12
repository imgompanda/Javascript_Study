// 바뀌지 않는 값을 나타낼 때 const
// 바뀔수 있는 값을 나타낼 때 let
const a = 5;
let b = 2;

let myName = 'hyungwoo';
const veryLongVariableName = 'likeThis';

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log('hello' + myName);

// myName을 Const로 설정하면 값이 바뀌지않아 에러가 나고 let으로 설정해주면 새로운 값을 받아들인다.
myName = 'HerryPark';
console.log('your name is ' + myName);

// data type

// null 아무것도없음(절대로 자연적으로 일어나지 않음)
// undefined 값이 정의되지 않음
const amIfat = null;
let something;
console.log(something);
console.log(amIfat);

// 데이터 구조 part

//array []

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// Get item from Array
console.log(daysOfWeek[4]); // 컴퓨터는 0부터 센다

// Add one more day to the array
daysOfWeek.push('sun');
console.log(daysOfWeek);

const nonsens = [1, 2, 'hello', false];
console.log(nonsens);

// const playerName = 'park';
// const playerPoints = 121212;
// const playeHandsome = true;
// const playerFat = 'little bit';

// const player = ["nico", 1212, false, "little bit"]

// objects part
const player = {
  // object 안에서는 = 를 사용하지 않는다. : 사용
  name: 'Park',
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
console.log(player['name']);
player.fat = false; // const안의 무언가를 업데이트하는 경우에는 바꿀수 있다.
console.log(player);
player.lastName = 'potato';
player.points = player.points + 15;
console.log(player);

// Functions part

// Function = 계속 반복해서 사용할 수 있는 코드의 조각
// argument =  fucntion을 실행하는 동안 어떤 정보를 function에 보낼 수 있는 방법
function sayHello(nameOfPerson, age) {
  console.log(
    'hello my name is' + nameOfPerson + 'and I m' + age + 'years old'
  );
}

sayHello('park', 25);
sayHello('Chanell', 5);
sayHello('Hani', 3);

// 계산기

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

function divide(a, b) {
  console.log(a / b);
}
plus(8, 60);
divide(10, 3);

const player2 = {
  name: 'emma',
  sayHello2: function (otherPersonsName) {
    console.log(' hello! ' + otherPersonsName + ' nice to you ');
  },
};

console.log(player2.name);
player2.sayHello2('lynn');
player2.sayHello2('HyungWoo');
