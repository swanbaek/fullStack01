// JsxEx7.jsx
const wrapStyle = {
    textAlign: 'center',
    padding: '2em',
    border: '1px solid purple',
    height: '100vh',
};
// header스타일 변수 선언해서 주세요
const headerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '1em',
    margin: 10,
};

//div에 wrapStyle적용하기
//header headerStyle적용하기

export default function JsxEx7() {
    return (
        <div style={wrapStyle}>
            <header style={headerStyle}>
                <h1>Welcome to MyApp</h1>
            </header>
            <section style={{ backgroundColor: '#acd', padding: '1em' }}>
                React CSS - Inline Style 적용하는 방법
                <br />
                리액트에서는 style속성값으로 문자열이 아닌 자바스크립트 객체를 할당해야 해요
                <br />
                CSS속성명은 카멜 표기법(Camel Case)으로 작성해야 해요
            </section>
        </div>
    );
}
