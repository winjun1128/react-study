import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";

function Detail({foods}) {
    let {id} = useParams();
    let food = foods.find(f => f.id==id);

    //foods 전체 정보 보유
    //id : 현재 페이지에서 표시해야하는 food의 id가 확인됨
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
        </Col>
        <Col md={6}>
          <h4 style={{paddingTop:'30px'}}>{food.title}</h4>
          <p>{food.content}</p>
          <p>{food.price}</p>
          <p>
            <Button variant="dark">-</Button>
            <span> 0 </span>
            <Button variant="dark">+</Button>
          </p>

          <Button variant="primary">주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
}
export default Detail;