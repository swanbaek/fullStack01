// 부모(App06-게시글)   자식(Comment-댓글)
// state (reply:배열)
import { useState } from 'react';
import Comment from './component/Ex06';

export default function App06() {
    const data = [
        { name: '홍길동', title: '반가워요~~', profile: 'images/person1.png', wdate: '25-02-10' },
        { name: '김영희', title: '오늘 날씨가 여전히 추워요', profile: 'images/person2.png', wdate: '25-02-10' },
        { name: '이철수', title: '감기 조심하세요~~', profile: 'images/person3.png', wdate: '25-02-09' },
    ];

    const [reply, setReply] = useState(data);

    return (
        <div className="container py-5 text-center">
            <div className="alert alert-danger">
                <h2>오늘 쓴 게시글 ... 즐거운 하루 되세요</h2>
            </div>
            <hr />
            <h2>Reply</h2>
            {/* 배열.map(function(value, index){ return value*2  }) */}
            {reply.map((item, index) => {
                // return <Comment name={item.name} title={item.title} wdate={item.wdate} profile={item.profile} />;
                return <Comment key={index} {...item} />;
                // 반복문 이용해서 컴포넌트를 렌더링할 때는 해당 컴포넌트를 식별할 수 있는 key 속성을 기술하고
                // unique한 값을 할당해야 한다
            })}
        </div>
    );
}
