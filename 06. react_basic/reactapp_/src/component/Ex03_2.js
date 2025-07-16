// 함수형 컴포넌트로 props, state를 다뤄보자
// 함수형 컴포넌트에서 state를 사용하기 위해서는 useState() 훅을 사용해야 한다
import { useState } from 'react';

function YourComp({ fntcolor, bgcolor }) {
    //const {fntcolor,bgcolor}=props;

    const [name, setName] = useState('Tom');
    //const [변수, setter함수명] = useState(초기값);
    //변수에는 초기값이 할당된다
    const [isLogin, setLogin] = useState(false);

    const onButtonHander = () => {
        //이름을 변경
        setName('Richard');
        //setLogin(!isLogin); //toggle 기능
        //비동기 방식으로 이뤄짐=> 이전 상태값이 정확하지 않을 수도 있다
        setLogin((prev) => !prev);
        //리액트는 현재 상태값(prev)을 인자로 전달하고, 이 값을 기반으로 새로운 상태값을 설정한다
        //state업데이트가 이전 상태값에 따라 정확하게 이뤄질 수 있다
    };

    return (
        <div className="my-3">
            {isLogin ? (
                <h1 style={{ color: fntcolor, background: bgcolor }}>Hello {name} !! </h1>
            ) : (
                <h1>로그인을 하세요</h1>
            )}
            <button className="btn btn-primary" onClick={onButtonHander}>
                이름 변경
            </button>
        </div>
    );
}
export default YourComp;
