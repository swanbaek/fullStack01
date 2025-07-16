// JsxEx1.jsx
import React from 'react';
function JsxEx1() {
    // 상수 선언
    const message = '즐거운 하루 되세요~';
    const mystyle = {
        backgroundColor: '#ccc',
        padding: '1em',
        border: '2px dashed hotpink',
    };

    return (
        // 스크립트 영역

        <div>
            {/* root 안이 jsx영역 */}
            <h1>JSX규칙 - root는 1개여야 함</h1>
            <h2 style={{ color: 'red', backgroundColor: 'beige', padding: '1em' }}>
                시작태그와 종료태그가 쌍으로 있어야 한다
            </h2>
            <br />
            <h2 style={mystyle} className="text-success">
                {message}
            </h2>
            <img src="logo192.png" alt="react logo" style={{ width: '20%' }}></img>
            {/*  jsx주석: 
                멀티라인 주석
            */}
            {
                // 단문주석
            }
        </div>
    );
}
export default JsxEx1;
