import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Nav, Navbar, Card, Button, Row, Col } from 'react-bootstrap';

import { useState } from 'react';

import banner_bg from '../images/banner_bg.jpg';
import food1 from '../images/food1.jpg';
import food2 from '../images/food2.jpg';
import food3 from '../images/food3.jpg';

import foodsData from '../data/foods.Data';
import './FoodMarket.css';

import FoodCard from '../components/FoodCard';
function FoodMarket() {
    // foodsData는 배열
    let [foods,setFoods] = useState(foodsData); 
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <div className="container">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </div>
            </Navbar>
            { /* 
                이미지 사용
                1)css 처리 : 이미지 경로
                2)js  처리 : import 한 이후에 사용
                3) public 폴더에 이미지 저장 후, 서버 경로로 접근해서 사용

                src='/images/food1.jpg'

                *권장 방식
                src={process.env.PUBLIC_URL+'/images/food2.jpg'}

                *기본 서비스 경로 루트 경로
                서버주소:포트번호/

                package.json > hompage 필드 설정
                "homepage":"/foodmarket"
            */}
            {/* <img src={banner_bg}></img> */}
            {/* <div className='main-bg' style={{backgroundImage:'url('+banner_bg+')'}}></div> */}
            <div className='main-bg'></div>
            <Container>
                <Row>
                    {
                        foods.map((food,index)=>{
                            return(
                                <Col md={4} sm={6}>
                                    <FoodCard foods={foods} index={index} food={food}/>
                                    {/* <FoodCard /> */}
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>



        </div>
    );
// function FoodMarket() {

//     let [foods,setFoods] = useState(foodsData);
//     return (
//         <div>
//             <Navbar bg="light" data-bs-theme="light">
//                 <div className="container">
//                     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//                     <Nav className="me-auto">
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#features">Features</Nav.Link>
//                         <Nav.Link href="#pricing">Pricing</Nav.Link>
//                     </Nav>
//                 </div>
//             </Navbar>
//             { /* 
//                 이미지 사용
//                 1)css 처리 : 이미지 경로
//                 2)js  처리 : import 한 이후에 사용
//                 3) public 폴더에 이미지 저장 후, 서버 경로로 접근해서 사용

//                 src='/images/food1.jpg'

//                 *권장 방식
//                 src={process.env.PUBLIC_URL+'/images/food2.jpg'}

//                 *기본 서비스 경로 루트 경로
//                 서버주소:포트번호/

//                 package.json > hompage 필드 설정
//                 "homepage":"/foodmarket"
//             */}
//             {/* <img src={banner_bg}></img> */}
//             {/* <div className='main-bg' style={{backgroundImage:'url('+banner_bg+')'}}></div> */}
//             <div className='main-bg'></div>
//             <Container>
//                 <Row>
//                     {/* 맵에서 매개변수하나만 넣으면 item으로 인식 */}
//                     {
//                         foods.map((food,i)=>{
//                             return(
//                                 <FoodCard img={'/images/food1.jpg'} title={foods[i].title} content={foods[i].content} price={foods[i].price}/>
//                             );
//                         })
//                     }
//                     {/* <FoodCard img={'/images/food1.jpg'} title={foods[0].title} content={foods[0].content} price={foods[0].price}/> */}
                    
//                     {/* <Col md={4} sm={6}>
//                         <Card style={{ width: '18rem' }}>
                            
//                             <Card.Img variant='top' src='/images/food1.jpg'/>
//                             <Card.Body>
//                                 <Card.Title>{foods[0].title}</Card.Title>
//                                 <Card.Text>
//                                   {foods[0].content}
//                                 </Card.Text>
//                                 <Card.Text>
//                                   {foods[0].price}
//                                 </Card.Text>
//                                 <Button variant="primary">Go somewhere</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col> */}
//                     {/* <FoodCard img={'/images/food1.jpg'} title={foods[1].title} content={foods[1].content} price={foods[1].price}/> */}
//                     {/* <Col md={4} sm={6}>
//                         <Card style={{ width: '18rem' }}>
                            
//                             <Card.Img variant='top' src={process.env.PUBLIC_URL+'/images/food2.jpg'}/>
//                             <Card.Body>
//                                <Card.Title>{foods[1].title}</Card.Title>
//                                 <Card.Text>
//                                   {foods[1].content}
//                                 </Card.Text>
//                                 <Card.Text>
//                                   {foods[1].price}
//                                 </Card.Text>
//                                 <Button variant="primary">Go somewhere</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col> */}
//                     {/* <FoodCard img={'/images/food1.jpg'} title={foods[2].title} content={foods[2].content} price={foods[2].price}/> */}
//                     {/* <Col md={4} sm={6}>
//                         <Card style={{ width: '18rem' }}>
//                             <Card.Img variant="top" src={food3} />
//                             <Card.Body>
//                                 <Card.Title>{foods[2].title}</Card.Title>
//                                 <Card.Text>
//                                   {foods[2].content}
//                                 </Card.Text>
//                                 <Card.Text>
//                                   {foods[2].price}
//                                 </Card.Text>
//                                 <Button variant="primary">Go somewhere</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col> */}
//                 </Row>
//             </Container>



//         </div>
//     );
}
export default FoodMarket;