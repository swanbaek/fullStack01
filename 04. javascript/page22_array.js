const students = [];
students.push({ name: '김학생', kor: 69 });
students.push({ name: '최성현', kor: 81 });
students.push({ name: '이현아', kor: 73 });
students.push({ name: '홍길동', kor: 91 });
students.push({ name: '정은정', kor: 58 });

//학생의 이름과 국어 점수를 출력하는 함수 구성하세요
function printStudents(array) {
    array.push({ name: '아무개', kor: 88 });
    console.log(`학생명\t국어점수`);
    console.log(`-------------------------`);

    for (const st of array) {
        console.log(`${st.name}\t${st.kor}`);
    }
}
//console.log();
//이름을 매개변수로 받아 학생배열에 해당 이름의 학생이 있는지
//검색하는 함수를 구성하세요 있으면 해당 학생객체를 반환하세요
//함수명 findByName
const findByName = function (name) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === name) {
            return students[i];
        }
    }
    return undefined;
};

//함수 호출하기
//printStudents(students); //원본 배열이 변경될 수 있다. => 사본을 전달하자
//배열의 사본을 만들어서 전달해보자
printStudents([...students]); //spread연산자를 이용해서 배열 사본을 만들어서 전달
console.log(students);

const findPerson = findByName('이현아');
//console.log(findPerson);
if (findPerson) {
    console.log(findPerson.name, ' ', findPerson.kor);
} else {
    console.log(`해당 학생은 없습니다`);
}
