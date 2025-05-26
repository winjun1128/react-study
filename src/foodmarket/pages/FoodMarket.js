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
import { Routes, Route, Link,useNavigate } from 'react-router';
// import { Link } from 'react-router';
import Home from './Home';
import Detail from './Detail';
function FoodMarket() {
    // foodsData는 배열
    let [foods,setFoods] = useState(foodsData); 

    let navigate = useNavigate();

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <div className="container">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/detail">detail</Link></Nav.Link>
                        <Nav.Link><Link to="/info">info</Link></Nav.Link> */}
                        <Nav.Link onClick={()=>{navigate("/")}}>Home</Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/detail")}}>detail</Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/info")}}>info</Nav.Link>
                    </Nav>
                </div>
            </Navbar>

    

           

            {/* react-router : 접속한 경로별로 보여줄 화면을 설정하는데 도움을 주는 라이브러리
                                + 기타 URL 주소에 관한 각종 처리
                 페이지 이동 처리
                 1) Link    (=a태그)
                    >내부 요소를 눌렸을때 페이지 이동
                    <Link to="이동할경로"></Link>

                 2) useNavigate (=location.href 비슷)
                    함수형태로 호출해서 이동 처리

                    경로처리 객체를 생성
                    let navigate = useNavigate();

                    이동할 경로를 매개변수로 전달하면서 함수 사용
                    navigate("이동할 경로");

                주소창에 포함되어있는 값을 활용
                    /경로/:경로상에서 인식할 위치변수명
                    path='/detail/:id'

                    경로파라미터 인식-> useParams();
            */}
            <Routes>
                <Route path='/' element={<Home foods={foods} />}></Route>
                <Route path='/home' element={<Home foods={foods} />}></Route>
                <Route path='/detail/:id' element={<Detail foods={foods}/>}></Route>
                {/* localhost:3000/detail/fd001
                localhost:3000/detail/fd002
                localhost:3000/detail/fd003
                localhost:3000/detail/fd004 */}

                {/* <Route path='/info/company' element={<h1>/info company</h1>}></Route>
                <Route path='/info/contact' element={<h1>/info contact</h1>}></Route> */}
                {/* 서브경로 */}
                <Route path='/info'>
                    <Route path='company' element={<h1>/info company</h1>}></Route>
                    <Route path='contact' element={<h1>/info contact</h1>}></Route>
                </Route>


                <Route path="*" element={<div><h1>잘못된 경로입니다. 주소를 확인하세요.</h1></div>}></Route>

            </Routes>



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