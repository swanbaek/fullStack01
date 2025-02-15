// 2차원 배열 (4행 5열)
const array = [
    [90, 67, 88, 55, 79],
    [50, 72, 98, 65, 91],
    [100, 46, 48, 95, 89],
    [29, 73, 58, 85, 70],
];
console.log(array.length); //행의 크기: 4
console.log(array[0].length); //열의 크기: 5
console.log(array[3].length); //열의 크기: 5

//중첩 반복문 이용해서
// 1 반: 90, 67, 88, 55, 79
// 총점:     평균:

// 2 반: 90, 67, 88, 55, 79
// 총점:     평균:

let str = ``;
for (let i = 0; i < array.length; i++) {
    str = `${i + 1} 반: `;
    let scores = array[i];
    let total = 0;
    for (const su of scores) {
        str += `${su}, `;
        total += su; //총점
    }//for----

    console.log(str);
    console.log(`총점: ${total}, 평균 점수: ${total / scores.length}`);
    console.log('-----------------------------------------------');
} //for-----------
