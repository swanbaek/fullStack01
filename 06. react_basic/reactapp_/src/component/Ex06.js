// Ex06.js
import React from 'react';
import '../style/Comment.css';
export default function Comment(props) {
    // console.log(props);

    const { name, title, wdate, profile } = props;

    return (
        <div className="commentWrap">
            <div className="imgWrap">
                <img src={profile} alt="사람1"></img>
            </div>
            <div className="contentWrap">
                <span className="name">
                    {name} [ {wdate} ]
                </span>
                <span className="title">{title}</span>
            </div>
        </div>
    );
}
