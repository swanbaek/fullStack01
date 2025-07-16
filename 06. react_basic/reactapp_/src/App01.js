// App01.js
// 1. class형으로 컴포넌트 작성하기
import React, { Component } from 'react';
// MyComp import해서 띄우기
import MyComp from './component/Ex01';
class App extends Component {
    render() {
        return (
            <div className="container py-5">
                <h1>App01 컴포넌트 (부모)</h1>
                <hr></hr>
                <MyComp mycolor="blue" mybgcolor="lightblue">
                    반가워요
                </MyComp>
                <MyComp mycolor="tomato" mybgcolor="yellow">
                    안녕하세요
                </MyComp>
                <MyComp mycolor="darkcyan" mybgcolor="lightgreen">
                    잘가세요~~
                </MyComp>
                <hr></hr>
                <MyComp />
                {/* props를 전달하지 않을 경우 자식(MyComp)에서
                defaultProps를 설정하면 해당 값들이 적용된다
                */}
            </div>
        );
    }
}
export default App;
