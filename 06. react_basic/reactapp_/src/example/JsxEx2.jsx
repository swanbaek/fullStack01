// JsxEx2.jsx
export function JsxEx2() {
    return (
        <fragment>
            <label htmlfor="userName">이 름</label>
            <input className="form-control" type="text" id="userName" name="name" placeholder="Name"></input>
        </fragment>
    );
}

export function Ex3() {
    return (
        <>
            {/* fragment를 축약해서 사용가능 <></> */}
            <h2 className="text-danger my-3">반가워요 리액트~</h2>
        </>
    );
}
//default로는 1개만 내보낼 수 있다.
//export default JsxEx2;
//export default Ex3;
