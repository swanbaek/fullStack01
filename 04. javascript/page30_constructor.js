// page30_constructor.js
// 생성자 함수(constructor function) 를 이용해서 객체 생성
// => 함수명을 대문자로 시작해야 한다
//학생 : 학번,이름, 국어,영어 ==> 속성(field, property, attribute)
//       총점을 구하다 ==> 메서드(함수, method, function)
function Student(no, name, kor, eng) {
    //no,name ==> 매개변수(argument,parameter)
    //console.log(no, name);
    console.log(this); //자기 자신 객체를 의미 Student {}

    this.no = no;
    this.name = name;
    this.kor = kor;
    this.eng = eng;

    console.log(this);
    //return this;
    this.getSum = function () {
        return this.kor + this.eng;
    };
    this.getAvg = function () {
        return this.getSum() / 2;
    };
    this.toString = function () {
        return `${this.no}\t${this.name}\tKor:${this.kor}\tEng:${this.eng}`;
    };
}

let st1 = new Student(1, '홍길동', 95, 88); //생성자 함수를 호출할 때는 new 연산자와 같이 사용한다
console.log(st1.name); //name=>인스턴스(객체) 변수

//학생 객체 2개 생성해보기
let st2 = new Student(2, '김철수', 76, 69);
//let st3 = Student(3, '이영희', 100, 99); [권하지 않음]
console.log(st2.name);
//console.log(st3.name); //에러 발생
//st1의 각 메서드 호출하기
let info = st1.toString();
console.log(info);
console.log(`합계 점수: ${st1.getSum()}`);
console.log(`평균 점수: ${st1.getAvg()}`);

console.log('-----------------');
console.log(st2.toString());
//생성자 함수 내에 메서드를 구성하면
//객체마다 해당 메서드가 메모리에 올라간다

//객체들끼리 메서드를 공유하는 방법 => prototype을 사용하는 방법
function Teacher(name, subject) {
    this.name = name;
    this.subject = subject;
}

Teacher.prototype.toString = function () {
    return `
    ----교사 정보-----
    Name: ${this.name}
    Subject: ${this.subject}
    `;
};

let t1 = new Teacher('최교사', '국어');
let t2 = new Teacher('이교사', '영어');

console.log(t1.toString());

console.log(t2.toString());
