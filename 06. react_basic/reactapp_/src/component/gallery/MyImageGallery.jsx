import { Container, Row, Col, Card, Button } from 'react-bootstrap';
//npm i --s react-bootstrap bootstrap
//부트스트랩 컴포넌트들을 React 스타일로 제공하는 라이브러리
//참고: https://react-bootstrap.netlify.app/docs/getting-started/introduction
//https://react-bootstrap.netlify.app/docs/components/cards

import { images } from '../../data/imageData';
import { useState } from 'react';

export default function MyImageGallery() {
    const [imgs, setImages] = useState(images);

    //Create
    const addImage = () => {
        let newSrc = window.prompt('새로 추가할 이미지명을 입력하세요', 'images/monstax.png');
        let newName = window.prompt('새로 추가할 아이돌 이름을 입력하세요', 'MonstaX');
        let newDesc = window.prompt('새로 추가할 아이돌 앨범 설명을 입력하세요', '힙한 뮤직입니다');
        //img.push({src:newSrc, name:newName,desc:newDesc, alt:newName }) ==>원본데이터를 수정  [x]
        //사본
        const tmpImgs = [...imgs, { src: newSrc, name: newName, desc: newDesc }];
        setImages(tmpImgs);
    };
    //Update
    const updateImage = (i) => {
        let newSrc = window.prompt('수정할 이미지명을 입력하세요', 'images/ive.PNG');
        let newName = window.prompt('수정할 아이돌 이름을 입력하세요', 'IVE');
        let newDesc = window.prompt('수정할 아이돌 앨범 설명을 입력하세요', '정말 힙한 뮤직입니다');
        const tmpImgs = [...imgs];
        tmpImgs[i] = { src: newSrc, name: newName, desc: newDesc }; //수정
        setImages(tmpImgs);
        //리액트에서는 불변성을 중요시함. 원본 객체나 배열을 직접 수정하면 안된다.
        //사본을 이용해서 수정. 가상의 dom을 효율적으로 사용하기 위함이다
    };
    //Delete
    const deleteImage = (i) => {
        //alert(i); //사본배열.splice(시작인덱스,count)  or 새배열=원본배열.filter(함수)
        // const tmpImg = [...imgs];
        // tmpImg.splice(i, 1);
        const tmpImg = imgs.filter((_, idx) => i !== idx);
        setImages(tmpImg);
    };

    return (
        <>
            <Container className="py-4">
                <Row>
                    <Col md={12}>
                        <Button variant="primary">All Images</Button>
                        <Button variant="warning" onClick={addImage}>
                            Add Image
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {/* Card시작 : Read  */}
                    {imgs.map((obj, i) => (
                        <Col key={i} md={4} xs={12} lg={3} className="mb-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={obj.src} alt={obj.name} />
                                <Card.Body>
                                    <Card.Title>{obj.name}</Card.Title>
                                    <Card.Text>
                                        {obj.desc}
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="info" mr={1} onClick={() => updateImage(i)}>
                                        Update
                                    </Button>
                                    <Button variant="danger" onClick={() => deleteImage(i)}>
                                        Delete
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
