import { useState } from 'react';
export default function Profile() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');

    const onChangeAgeHandler = (e) => {
        console.log(e.target.value, typeof e.target.value); //string
        setAge(parseInt(e.target.value));
    };

    return (
        <div className="container py-5">
            <input
                type="text"
                placeholder="Name"
                onChange={(evt) => {
                    //console.log('evt.target: ', evt.target); //input
                    //console.log('evt.target.value: ', evt.target.value);
                    setName(evt.target.value);
                }}
                value={name}
            ></input>
            {/* 
            [1] 상태값과 입력값을 일치시키기 위해 value에 state값을 할당
            [2] 이벤트는 onChange이벤트.
            [3] event.target : 이벤트 소스
                event.target.value : 사용자가 입력한 값
            */}
            <br></br>
            <input type="number" placeholder="Age" onChange={onChangeAgeHandler} value={age}></input>
            <br></br>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
            <br></br>
            <hr></hr>
            <div className="alert alert-danger">
                <h3>이름: {name} </h3>
                <h3>나이: {age}</h3>
                <h3>이메일: {email} </h3>
            </div>
        </div>
    );
}
