import MyComp from './component/Ex02';
function App() {
    return (
        <div className="container py-5">
            <h1>함수형 App02 부모 컴포넌트</h1>
            <hr></hr>
            {/* props로 배경색과 텍스트를 전달해서 출력해보세요 */}
            <MyComp mycolor="navy" mybgcolor="beige">
                둘리
            </MyComp>
            <MyComp mycolor="maroon" mybgcolor="pink">
                또치
            </MyComp>
            <MyComp mycolor="#03f" mybgcolor="lightblue">
                고길동
            </MyComp>
            <hr />
            <MyComp />
        </div>
    );
}
export default App;
