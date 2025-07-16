import MyComp from './component/Ex03_1';
import YourComp from './component/Ex03_2';
function App() {
    return (
        <div className="container py-4 text-center">
            <h1>App03- props, state 사용</h1>
            <hr></hr>
            <MyComp bgcolor="yellow" fntcolor="blue"></MyComp>
            {/* <MyComp bgcolor="skyblue" fntcolor="gray"></MyComp>
            <MyComp bgcolor="purple" fntcolor="#fff"></MyComp> */}
            <hr></hr>
            <YourComp fntcolor="green" bgcolor="yellow" />
            <YourComp fntcolor="#fff" bgcolor="maroon" />
        </div>
    );
}
export default App;
