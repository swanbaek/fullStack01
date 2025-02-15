//배열의 주요 인스턴스 메서드(함수)
let scores = [55, 86, 99, 68, 77];
//배열.join('구분자') => 배열 요소들을 구분자로 결합하여 문자열로 반환
let str = scores.join('@');
console.log(str);
//split('구분자')=>문자열을 구분자로 분리하여 배열로 반환

let arr = str.split('@');
console.log(arr.length);
console.log(arr);

//배열.concat(값|배열) : 존재하는 배열에 새로운 배열을 합쳐 반환함
let newArray = scores.concat(100, 60, [50, 40]);
console.log(newArray);
console.log(scores);

//slice(start, end) : 배열의 일부를 가져올 때 사용. 원본 배열을 유지함
//start인덱스에서 시작하여 end-1까지 조각내서 반환
arr = scores.slice(2, 4); //99,68
console.log(arr);

let copy = scores.slice(); //원본 배열을 복사
console.log(copy);
copy[0] = 100;

console.log(copy);
console.log(scores);

//splice(start, deleteCount, [item1, item2,...])
//scores에서
let arr2 = scores.splice(2, 1, 90); //원본 배열을 직접 변경함
console.log(arr2); //삭제한 요소를 배열로 반환
console.log(scores);

scores.splice(2, 2);
console.log(scores);
//push() /unshift()
scores.push(92); //배열 끝에 새요소 추가
console.log(scores);
scores.unshift(62, 77); //배열 앞에 새요소 추가
console.log(scores); //

//pop() : 배열 끝의 요소를 삭제
//shift(): 배열 앞 요소를 삭제
scores.pop();
console.log(scores);
scores.shift();
console.log(scores);

scores = [90, 80, 78, 69, 100];
//indexOf(값) :배열에 값이 있는지 검색해서 있으면 해당 인덱스번호 반환
//              없으면 -1을 반환
let index = scores.indexOf(69);
console.log(`69점의 인덱스번호: ${index}`);

//includes(값) : 값이 있는지 여부를 반환. 있으면 true반환

let b = scores.includes(100);
console.log(b ? '만점자가 있어요' : '만점자는 없네요');

//Array.from() : 유사배열 객체를 배열로 변환하는 정적(static) 메서드
//              length속성이 있는 객체는 배열로 변환가능
let string = '12345';
let arr3 = Array.from(string);
console.log(arr3);
console.log(typeof arr3); //object
//Array.isArray(변수)
console.log(Array.isArray(arr3)); //true
let tot = 0;
for (const s of arr3) {
    tot += Number(s); //parseInt(s)
}
console.log(tot);
