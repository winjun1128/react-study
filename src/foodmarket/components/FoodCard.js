import { Nav, Navbar, Card, Button, Row, Col } from 'react-bootstrap';
//function FoodCard( {foods,index,food}){
function FoodCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={food1} /> */}
            <Card.Img variant='top' src={process.env.PUBLIC_URL+ props.food.imgPath} />
            <Card.Body>
                <Card.Title>{props.food.title}</Card.Title>
                <Card.Text>
                    {props.food.content}
                </Card.Text>
                <Card.Text>
                    {props.food.price}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
    // return (
    //     <Card style={{ width: '18rem' }}>
    //         {/* <Card.Img variant="top" src={food1} /> */}
    //         <Card.Img variant='top' src='/images/food1.jpg' />
    //         <Card.Body>
    //             <Card.Title>{props.food[props.index].title}</Card.Title>
    //             <Card.Text>
    //                 {props.food[props.index].content}
    //             </Card.Text>
    //             <Card.Text>
    //                 {props.food[props.index].price}
    //             </Card.Text>
    //             <Button variant="primary">Go somewhere</Button>
    //         </Card.Body>
    //     </Card>
    // );
}
// function FoodCard(props) {
//     return (
//         <Col md = { 4} sm = { 6} >
//             <Card style={{ width: '18rem' }}>
//                 {/* <Card.Img variant="top" src={food1} /> */}
//                 <Card.Img variant='top' src={props.img} />
//                 <Card.Body>
//                     <Card.Title>{props.title}</Card.Title>
//                     <Card.Text>
//                         {props.content}
//                     </Card.Text>
//                     <Card.Text>
//                         {props.price}
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//             </Card>
//         </Col >
//     );
// }
export default FoodCard;