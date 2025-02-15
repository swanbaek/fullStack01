let users = [
    { name: 'Adams', score: 90 },
    { name: 'Bob', score: 54 },
    { name: 'Peter', score: 60 },
    { name: 'James', score: 82 },
];
/* 
[1] map(콜백함수)
- 새배열 = 배열.map(콜백함수)
- 배열의 각 요소에 대해 지정된 콜백 함수를 실행하고
  그 결과를 새로운 배열로 반환한다.
- 원본 배열은 불변성을 유지. 새배열을 반환
*/
let str = `<ul>`;

const mapUsers = users.map(function (user, i) {
    return `<li id='${i}'>이름: ${user.name}, 성적: ${user.score}</li>`;
});
str += mapUsers.join('');
str += `</ul>`;

console.log(mapUsers);
console.log('---------------');
console.log(str);
console.log('***************');
console.log(users);
/* 
[2] 새배열 =배열.filter(콜백함수)
- 배열의 각 요소를 필터링하여 조건에 맞는 요소만 새배열에 담아 반환
- true를 반환하는 요소만 새 배열에 포함된다
*/
// users에서 70점 이상의 점수를 받은 학생들만 출력
let success = users.filter(function (obj) {
    if (obj.score >= 70) return true;
    return false;
});
console.log(success);
/**
 * [3] 배열.find(콜백함수) : 배열에 주어진 조건을 만족하는 첫 번째 요소를 반환
 * [4] 배열.findIndex(콜백함수): 조건을 만족하는 첫 번째 요소의 인덱스를 반환
 */
//학생 이름중 Peter라는 이름을 가진 학생정보를 출력하세요
users.push({ name: 'Peter', score: 100 });
console.log(users);
console.log('------------------------');

let man = users.find(function (obj) {
    return obj.name === 'Peter';
});
console.log(man);

//[5] 배열.some(콜백함수) : 조건을 하나라도 만족하면 true반환
//[6] 배열.every(콜백함수) : 조건을 모두 만족하면 true반환
let exists = users.some(function (obj) {
    return obj.score === 100;
});
console.log(`만점자가 있나요? ${exists}`);

let exists2 = users.every(function (obj) {
    return obj.score === 100;
});
console.log(`모두 만점인가요? ${exists2}`);

//[7] 변수=배열.reduce(콜백함수, 초기값)
//모든 학생의 합계 점수를 구하세요
const sum = users.reduce(function (prev, user) {
    return prev + user.score;
}, 0);
console.log(`합계 점수: ${sum} `);

//reduce() 이용해서 최고 점수를 구하세요
const max = users.reduce(function (prev, user) {
    return prev < user.score ? user.score : prev;
}, 0);
console.log(`최고 점수: ${max}`);

//reduce() 이용해서 최저 점수를 구하세요
const min = users.reduce((prev, user) => (prev > user.score ? user.score : prev), users[0].score);
console.log(`최저 점수: ${min}`);
