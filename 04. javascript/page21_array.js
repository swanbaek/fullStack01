console.log('1. -------------');
const arr1 = [10, 20, 'JavaScript', { name: '홍길동', age: 22 }];
console.log(`arr1.length=${arr1.length}`);

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

console.log('2.-----------------');
let arr2 = new Array(100, 200, true, false, '홍길동');
/**
 * for( 변수  of 배열){}
 * 변수 ==> 배열에 저장된 요소
 *
 */
for (const data of arr2) {
    console.log(data);
}
const scores = [90, 85, 53, 78, 66, 100, 41];

/**
 * 배열.forEach( 콜백함수)
 *[1] scores배열에 저장된 값 중 최대값, 최소값을 구해 출력
  [2] 합계 점수와 평균 점수를 출력하세요
 */
let total = 0,
    avg = 0;
let max = scores[0],
    min = scores[0];
scores.forEach(function (value, i) {
    //value => 배열에 저장된 요소(데이터), i: 배열 index
    console.log(i + ': ' + value);
    total += value;
    if (max < value) max = value;
    if (min > value) min = value;
});
avg = total / scores.length;
console.log(`합계 점수: ${total} `);
console.log(`평균 점수: ${avg.toFixed(1)} `);
console.log(`최고 점수: ${max}`);
console.log(`최저 점수: ${min}`);
