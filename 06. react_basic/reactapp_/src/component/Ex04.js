//[1] useState훅을 사용해서 count 상태 추가하세요
//[2]  count 값을 "현재 카운트: 0" 출력
//[3] 증가/감소 버튼 클릭하면 이벤트 처리할 핸들러 함수 구성 : increment / decrement
//[4] 증가버튼 클릭=> count값을 1씩 증가
//[5] 감소버튼 클릭=> count값을 1씩 감소
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); //state 데이터
    let cnt = 100; //일반 변수=> 그냥 데이터

    const increment = () => {
        //alert('a');
        setCount(count + 1);
        cnt++;
        console.log('cnt: ', cnt);
    };
    const decrement = () => {
        setCount(count - 1);
        cnt = cnt - 1;
    };

    return (
        <>
            {/* fragment 축약 */}
            <h2>카운터</h2>
            <div>
                현재 카운트: <span style={{ color: 'red', fontSize: '2em', fontWeight: 'bold' }}>{count}</span>
            </div>
            <div>
                현재 cnt : <span style={{ color: 'blue' }}>{cnt}</span>
            </div>
            <button onClick={increment} className="btn btn-info my-4 mx-1">
                증가
            </button>
            <button onClick={decrement} className="btn btn-warning my-4 mx-1">
                감소
            </button>
        </>
    );
};

export default Counter;
