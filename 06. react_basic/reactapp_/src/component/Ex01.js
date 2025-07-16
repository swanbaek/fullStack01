// Ex01.js  - class형 컴포넌트
import React from 'react';

class MyComp extends React.Component {
    static defaultProps = {
        mycolor: '#fff',
        mybgcolor: 'red',
        children: '기본 텍스트',
    };

    render() {
        const { mybgcolor, mycolor, children } = this.props;
        // <MyComp>안녕</MyComp> ==> this.props.children으로 접근가능
        let mystyle = {
            // backgroundColor: this.props.mybgcolor,
            backgroundColor: mybgcolor,
            padding: '1em',
            margin: '1em',
        };

        return (
            <div style={mystyle}>
                <h2 style={{ color: mycolor }}>자식 컴포넌트 MyComp: {children} </h2>
            </div>
        );
    }
}
export default MyComp;
