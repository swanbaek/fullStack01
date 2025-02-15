// page31_class.js
class Person {
    //생성자
    constructor(id, name) {
        console.log(this); //this ={} 동일

        this.id = id;
        this.name = name;
    }

    //인스턴스 메서드
    toString() {
        return `${this.id}\t${this.name}`;
    }

    //static 메서드 => 공유
    static commonMethod() {
        return '대한민국';
    }
} //////////////////////////////////
//is a 관계 : Student is a Person
//상속받을 때는 extends 키워드를 이용
class Student extends Person {
    constructor(id, name, score) {
        super(id, name); //부모(Person)의 생성자를 호출
        this.score = score;
    }

    //메서드 재정의(override)
    toString() {
        return `---학생 정보 --\n${super.toString()}\t학점: ${this.score}`;
    }
} //////////////////////////
class Teacher extends Person {
    //생성자 구성 (id,name, subject)
    constructor(id, name, subject) {
        super(id, name);
        this.subject = subject;
    }
    //toString()재정의
    toString() {
        return `---교사 정보 --\n${super.toString()}\t과목: ${this.subject}`;
    }
}

//객체 생성
let p1 = new Person(100, '홍길동');
let p2 = new Person(101, '김철수');
// p1.id=900;
// p1.name='이길동';
//인스턴스 메서드 => 객체명.메서드()
//static 메서드 => 클래스명.메서드()
console.log(p1.toString());
console.log(p2.toString());
//console.log(p1.commonMethod());//error
console.log(Person.commonMethod());

let s1 = new Student(200, '정현수', 85);
let s2 = new Student(201, '김연아', 100);

console.log(s1.toString());
console.log(s2.toString());

let t1 = new Teacher(300, '이교사', '자바스크립트');
console.log(t1.toString());
