import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Side from './component/Side';
import Home from './component/Home';
import MyComp1 from './component/MyComp1';
import './App.css';
import MyComp2 from './component/MyComp2';
import { Container, Row, Col } from 'react-bootstrap';
export default function TestApp() {
    return (
        // 자바스크립트 영역. 루트 엘리먼트는 반드시 1개
        <div className="container py-5">
            <BrowserRouter>
                <Container>
                    <Row>
                        <Col>
                            <Header />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={3} md={4} lg={4} className="d-none d-sm-block mt-3">
                            {/* d-none : 모두 안보이게 한뒤, d-sm-block 하면 small사이즈 부터는 보여짐 */}
                            <Side />
                        </Col>
                        <Col xs={12} sm={9} md={8} lg={8}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/comp1" element={<MyComp1 />} />
                                <Route path="/comp2" element={<MyComp2 />} />

                                <Route />
                            </Routes>
                        </Col>
                    </Row>
                </Container>
            </BrowserRouter>
        </div>
    );
}
