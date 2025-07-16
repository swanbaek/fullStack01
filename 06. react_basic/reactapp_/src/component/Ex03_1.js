// Ex03_1.js
// React컴포넌트 구성 (1. class   2. 함수형)
import React, { Component } from 'react';
class MyComp extends Component {
    //this.state ==> 변경 가능한 데이터

    constructor(props) {
        super(props); //생성자에서 반드시 super(props)를 호출해야 한다
        console.log(this);

        this.state = {
            name: 'Hong',
            isLogin: false,
        };
        this.onButtonClick = this.onButtonClick.bind(this);
        //리액트의 이벤트핸들러는 일반적인 DOM이벤트 핸들러와 다르게 이벤트핸들러에 this를 bind해줘야 해당 핸들러 함수에서
        //this를 사용할 수 있다
        //리액트에서 일반 함수를 이벤트 핸들러로 사용하면 this가 자동으로 바인드되지 않는다
    }

    //화살표 함수를 사용하면 this를 bind()하지 않아도 된다. 화살표함수에서는 this를 자동 유지한다
    onButtonClick2 = () => {
        console.log('onButtonClick2에서 this: ', this);
        //this.setState({ name: 'Kim' });
        //this.state.name = 'Lee'; //[x]
        this.setState({ isLogin: !this.state.isLogin });
    }; //----------------------------------

    onButtonClick() {
        console.log('onButtonClick에서 this: ', this);

        //리액트 일반함수에서는 this를 bind()해주어야 this를 사용할 수 있다
        // 버튼을 누르면 state의 isLogin값을 변경해보자
        //this.state.name = 'Choi'; //[x] state의 데이터를 변경하고자 할 때는 this.setState() 함수를 사용해야 한다
        this.setState({ name: 'Choi' });
    }

    render() {
        // let cr = this.props.fntcolor;
        // let bgcolor = this.props.bgcolor;
        //this.props.fntcolor = 'red';[x] 수정 불가
        const { fntcolor: cr, bgcolor } = this.props;
        //this.props 는 읽기 전용. 수정하면 안된다

        const mystyle = {
            color: cr,
            backgroundColor: bgcolor,
            marginBottom: '1em',
        };
        return (
            <div>
                {/* root 엘리먼트 안은 jsx영역 */}
                <button style={mystyle} onClick={this.onButtonClick2}>
                    {/* 함수호출하는 문장이 아니라 함수를 전달해야 한다 */}
                    Click Me
                </button>
                {/* if(isLogin){}else{}  jsx에서는 if~else/for루프 제어문을 사용하라 수 없다
                    ==> [1] 삼항연산자를 사용하던지 
                        [2] && 연산자를 사용해야 한다
                */}
                {this.state.isLogin ? <h3>{this.state.name}님 로그인 중...</h3> : <h3>로그인 하세요</h3>}
                <hr></hr>
                {this.state.isLogin && <h3 style={{ color: 'red' }}>{this.state.name}님 로그인 중...</h3>}
                {!this.state.isLogin && <h3>로그인을 먼저 하세요</h3>}
            </div>
        );
    }
}
export default MyComp;
