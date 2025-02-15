console.log('안녕하세요?');
//제어 문자 (escape문자)
console.log('JavaScript');
console.log('Java\nScript'); // \n : 줄바꿈  <br>
console.log('Java\rScript'); // \r : 캐리지 리턴. 커서를 앞으로 이동
console.log('Java\bScript'); // \b : 백스페이스
console.log('Java\tScript'); // \t : 탭키

//boolean (논리형): true, false
console.log(true, false);
// = : 대입연산자, 할당연산자
// == : 비교 연산자. 값이 같은지 비교함
// === : 비교 연산자. 값도 같고 자료형도 같으면  true
console.log('abc' == false); //false
console.log('' == false); //true
console.log(0 == false); //true
console.log(10 == false); //false
console.log(undefined == undefined); //true
console.log(null == null); //true

let num = 100; //number
let str = '100'; //string
let num2 = 100.0; //number
console.log('num == str: ', num == str); //true
console.log('num === str: ', num === str); //false
console.log('num === num2: ', num === num2); //true
