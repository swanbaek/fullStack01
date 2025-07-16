// src/ES6.js ==>2015
// ECMAScript => 자바스크립트 표준, 규격을 나타내는 용어
//var ==> 함수 스코프
//[1] let, const ==> 블럭 레벨 스코프

//[2] 템플릿 리터럴 사용: `${변수}`
//[3] 화살표 함수/람다식
console.log(myfunc(5)); //hoisting (끌어올림)
//console.log(myfunc2(5)); //[x] 리터럴 방식은 안된다
//ReferenceError: Cannot access 'myfunc2' before initialization
function myfunc(num) {
    let num2 = num * 3;
    return `num의 3배: ${num2}`;
}
const myfunc2 = function (num) {
    //hoisting x
    return `num: ${num}`;
};

console.log(myfunc2(100));
console.log(myfunc(100));

const myfunc3 = (num) => {
    return `화살표함수1 num: ${num}`;
};
console.log(myfunc3(300));

const myfunc4 = (num) => num * 2;

let val = myfunc4(50);
console.log(val); //100

const myfunc5 = (num) => `화살표함수2: ${num * 4}`;
console.log(myfunc5(50));

//[4] 구조 분해 할당(destructuring assignment)/비구조화 할당
//배열이나 객체의 속성을 쉽게 분해해서 변수에 할당하는 문법
const person = {
    name: '김영희',
    age: 20,
    tel: '010-2222-3333',
};
console.log(person.name, person.tel);

const { name, tel, age } = person;
console.log(name, age, tel);

//배열 구조분해 할당
const arr = [1, 2, 3];
console.log(arr[0]); //1

const [a, b, c] = arr;
console.log(a); //1
console.log(b); //2
console.log(c); //3

// 일부 요소만 할당
const [x, y] = arr;
console.log(x, y);
// ... : spread 연산자 (전개연산자, 나머지연산자)
const [first, ...rest] = arr;
console.log(first); //1
console.log(rest); //[2,3]

//기본값 할당
//arr = [1, 2, 3];
const [p, q, r, s = 4] = arr;
//배열 요소가 없을 경우 기본값 할당
console.log(s);

//속성명 변경
const obj = { name: 'Alice', age: 25, city: 'Seoul' };
const { name: nm, age: ag, city } = obj;
console.log(nm, city, ag);

//중첩 객체의 구조분해
const user = {
    id: 1,
    profile: {
        firstName: 'Alice',
        lastName: 'Ward',
    },
};
// user를 구조분해해서 id, firstName,lastName값을 출력
const { id, profile } = user;
console.log(id, profile);

const { firstName, lastName } = profile;
console.log(firstName);

const {
    id: no,
    profile: { firstName: fName, lastName: lName },
} = user;
console.log(no, firstName, lastName);

//매개변수 구조분해
//1.객체
function greet({ msg, name }) {
    console.log(`${msg} ${name}님`);
}
greet({ msg: '안녕하세요? 반갑습니다~', name: '이수진' });
//2. 배열
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sum([a1, a2, ...a3]) {
    console.log(`a1: ${a1}, a2: ${a2}, a3: ${a3}`);
    let total = a1 + a2;
    for (let i of a3) {
        total += i;
    }
    return total;
}
console.log(sum(nums));

//[5] Spread 연산자: ...  (배열이나 객체를 펼치는데 사용/나머지값을 받을 때 사용)
//Array
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;
console.log(arr1);
console.log(arr2); //얉은 복사
arr2[1] = 200;
console.log('----------------');

console.log(arr1);
console.log(arr2);
//배열의 사본을 만들어보자 (slice()/concat())
let arr3 = arr1.slice(); //사본을 반환
console.log(arr3);
arr3[1] = 2;
console.log('******************');
console.log(arr3);
console.log(arr1);
//spread연산자 이용해서 사본을 만들자
const array = [1, 2, 3, 4];
const newArray = [...array]; //사본
console.log(`array: ${array}`);
console.log(`newArray: ${newArray}`);

newArray[0] = 10;
console.log(`array: ${array}`);
console.log(`newArray: ${newArray}`);
const array2 = [-2, -1, 0, ...array, 5, 6, 7, 8];
console.log(array2);

//객체 복사
let user1 = { a: 1, b: 2 };
let userCopy = { ...user1, c: 3, a: 100 }; //객체 사본 (깊은 복사)
console.log(userCopy);
console.log(user1);

let merged = { ...user1, ...user }; //객체 병합
console.log(merged);

//string
let str1 = 'React js JavaScript';

let str2 = [...str1];
console.log(str2);
//str2를 다시 문자열로 만드세요
let str3 = str2.join('');
console.log(str3);
