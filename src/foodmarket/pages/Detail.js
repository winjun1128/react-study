import { useEffect, useState } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
import ColorBox from "../../practice/Practice05/ColorBox";

import './Detail.css';
function Detail({ foods }) {
  let { id } = useParams();

  let [orderCount, setOrderCount] = useState(0);

 

  let [showModal, setshowModal] = useState(false);

  let [viewClass, setviewClass] = useState('');


  // foods 전체정보 보유
  // id: 현재 페이지에서 표시해야하는 food의 id가 확인됨
  // foods에 들어있는 id값==주소 params에 들어있는 id값

  let food = foods.find((food) => {
    return food.id == id;
  })

  // console.log(food);


  // LifeCycle (생성mount, 수정update, 삭제unmount)
  // useEffect(실행할 함수, 의존성 배열)
  // useEffect(실행할 함수{return ()=>{clean up function}},의존성 배열)

   let [stockCount, setStockCount] = useState(food.stockCount);

  useEffect(() => {   //의존성 배열X -> 매번 렌더링시 실행 (로딩생성mount, 수정update)
    console.log('useEffect')
  })

  useEffect(() => {   //의존성 빈 배열O -> 로딩생성(mount)
    console.log('useEffect,[]')
  }, [])

  useEffect(() => {  //의존성 배열 -> 로딩생성mount, 배열내에 변수가 변경될떄(수정update) ->
    console.log('useEffect', [orderCount])
    console.log(orderCount);

    return () => { console.log('useEffect, [orderCount] 에 들어있는 return 함수 실행') }
  }, [orderCount])

  // useEffect(()=>{
  //   let cnt = 0;
  //   let intv =setInterval(()=>{
  //     console.log(cnt++);
  //   },1000)

  //   return()=>{             /* 다음번에 실행할때 삭제 / 써 있는 순서가 아닌 리턴이 먼저 실행 */
  //     clearInterval(intv);
  //   }
  // })

  //modal 창 가리기
  useEffect(() => {

    setTimeout(() => {
      setshowModal(false);
    }, 2000);

  }, [])

  //container opacity
  useEffect(() => {

    setTimeout(() => {
      setviewClass('end');   // '' -> 'end'
      // 'start' -> 'start end'
    }, 300);



  }, [])

  useEffect(()=>{

  },[stockCount])



  if (food == undefined) {  //잘못된 id값이 들어옴, 해당 id 상품 없음
    return (
      <div><h1>존재하지 않는 상품입니다. 잘못된 접근입니다.</h1></div>
    )
  }


  //style 객체 단위로 관리
  const tempStyle = {
    color: "orange",
    fontSize: '20px'
  };

  const blueTextStyle = {
    color: 'blue'
  }

  const styles = {
    redStyle: {
      color: "red"
    },
    blueStyle: {
      color: "blue"
    },
    fontBigBold: {           //styles.fontBigBold
      fontSize: "2rem",
      fontWeight: "bold"
    }
  }

  /*
      조건에 따라서 스타일 적용

      가격표시 {food.price}
          1만원 이상 -> 빨간색
          1만원 미만 -> 파란색

      food.price >= 10000
  */

  // 1) js 객체
  const priceTextStyle = {
    color: food.price >= 10000 ? 'red' : 'blue'
  }
  //<p style={tempStyle}>{food.content}</p> 
  //  <p style={{color: food.price >= 10000 ? 'red' : 'blue'}}>{food.price}</p>

  //  2) js 함수 형태

  const priceTextStyleFunc = (price) => {

    if (price >= 10000)
      return { color: 'red' }
    else
      return { color: 'blue' }
    //return {color:price>=10000?'red':'blue'}
  }
  // <p style={priceTextStyleFunc(food.price)}>{food.price}</p>

  // 3) css 클래스명 연계 활용
  // 단일 클래스 적용
  // <p className={food.price>=10000?'price-red':'price-blue'}>{food.price}</p>

  //다중 클래스 적용
  // <p className={food.price>=10000?'price-red text-strong':'price-blue text-strong'}>{food.price}</p>
  //+ 연산  <p className={'text-strong '+(food.price>=10000?'price-red':'price-blue')}>{food.price}</p>
  //join  
  // <p className={['text-strong',food.price>=10000?'price-red':'price-blue'].join(" ")}>{food.price}</p>

  //  변수
  //  const priceClassName = 'text-strong price-red';

  //  백틱문자 활용 `
  // <p className={ `text-strong ${food.price >= 10000 ? 'price-red ' : 'price-blue'} `}>{food.price}</p>


  return (
    // "start"
    <Container className={"start " + viewClass}>
      <Row>
        <Col md={6}>
          <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
        </Col>
        <Col md={6}>
          <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
          {/* <p style={tempStyle}>{food.content}</p> */}
          <p style={styles.fontBigBold}>{food.content}</p>

          <p className={['text-strong', food.price >= 10000 ? 'price-red' : 'price-blue'].join(" ")}>{food.price}</p>
          <p>
            <Button variant="dark" onClick={() => {
              if (orderCount > 0)
                setOrderCount(orderCount - 1);
            }}>-</Button>
            <span> {orderCount} </span>
            <Button variant="dark" onClick={() => {
              if(food.stockCount>=orderCount+1){
                setOrderCount(orderCount + 1);
              }
            }}>+</Button>
          </p>
          <p>{stockCount}</p>

          { 
            food.stockCount>0?
              <Button varient='primary'>주문하기</Button>
              :
              <Button varient='danger' disabled>품절</Button>
          }
        </Col>
      </Row>

      {
        // showModal &&
        // showModal == true ? :
      }

      <Modal show={showModal} onHide={() => { setshowModal(false) }}>
        <Modal.Header closeButton>
          <Modal.Title>환영합니다~</Modal.Title>
        </Modal.Header>
        <Modal.Body>어서오세요~ Food 구경하세요~</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => { setshowModal(false) }}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
}
// function Detail({ foods }) {
//   let { id } = useParams();

//   let [orderCount, setOrderCount] = useState(0);

 

//   let [showModal, setshowModal] = useState(false);

//   let [viewClass, setviewClass] = useState('');


//   // foods 전체정보 보유
//   // id: 현재 페이지에서 표시해야하는 food의 id가 확인됨
//   // foods에 들어있는 id값==주소 params에 들어있는 id값

//   let food = foods.find((food) => {
//     return food.id == id;
//   })

//   // console.log(food);


//   // LifeCycle (생성mount, 수정update, 삭제unmount)
//   // useEffect(실행할 함수, 의존성 배열)
//   // useEffect(실행할 함수{return ()=>{clean up function}},의존성 배열)

//    let [stockCount, setStockCount] = useState(food.stockCount);

//   useEffect(() => {   //의존성 배열X -> 매번 렌더링시 실행 (로딩생성mount, 수정update)
//     console.log('useEffect')
//   })

//   useEffect(() => {   //의존성 빈 배열O -> 로딩생성(mount)
//     console.log('useEffect,[]')
//   }, [])

//   useEffect(() => {  //의존성 배열 -> 로딩생성mount, 배열내에 변수가 변경될떄(수정update) ->
//     console.log('useEffect', [orderCount])
//     console.log(orderCount);

//     return () => { console.log('useEffect, [orderCount] 에 들어있는 return 함수 실행') }
//   }, [orderCount])

//   // useEffect(()=>{
//   //   let cnt = 0;
//   //   let intv =setInterval(()=>{
//   //     console.log(cnt++);
//   //   },1000)

//   //   return()=>{             /* 다음번에 실행할때 삭제 / 써 있는 순서가 아닌 리턴이 먼저 실행 */
//   //     clearInterval(intv);
//   //   }
//   // })

//   //modal 창 가리기
//   useEffect(() => {

//     setTimeout(() => {
//       setshowModal(false);
//     }, 2000);

//   }, [])

//   //container opacity
//   useEffect(() => {

//     setTimeout(() => {
//       setviewClass('end');   // '' -> 'end'
//       // 'start' -> 'start end'
//     }, 300);



//   }, [])

//   useEffect(()=>{

//   },[stockCount])



//   if (food == undefined) {  //잘못된 id값이 들어옴, 해당 id 상품 없음
//     return (
//       <div><h1>존재하지 않는 상품입니다. 잘못된 접근입니다.</h1></div>
//     )
//   }


//   //style 객체 단위로 관리
//   const tempStyle = {
//     color: "orange",
//     fontSize: '20px'
//   };

//   const blueTextStyle = {
//     color: 'blue'
//   }

//   const styles = {
//     redStyle: {
//       color: "red"
//     },
//     blueStyle: {
//       color: "blue"
//     },
//     fontBigBold: {           //styles.fontBigBold
//       fontSize: "2rem",
//       fontWeight: "bold"
//     }
//   }

//   /*
//       조건에 따라서 스타일 적용

//       가격표시 {food.price}
//           1만원 이상 -> 빨간색
//           1만원 미만 -> 파란색

//       food.price >= 10000
//   */

//   // 1) js 객체
//   const priceTextStyle = {
//     color: food.price >= 10000 ? 'red' : 'blue'
//   }
//   //<p style={tempStyle}>{food.content}</p> 
//   //  <p style={{color: food.price >= 10000 ? 'red' : 'blue'}}>{food.price}</p>

//   //  2) js 함수 형태

//   const priceTextStyleFunc = (price) => {

//     if (price >= 10000)
//       return { color: 'red' }
//     else
//       return { color: 'blue' }
//     //return {color:price>=10000?'red':'blue'}
//   }
//   // <p style={priceTextStyleFunc(food.price)}>{food.price}</p>

//   // 3) css 클래스명 연계 활용
//   // 단일 클래스 적용
//   // <p className={food.price>=10000?'price-red':'price-blue'}>{food.price}</p>

//   //다중 클래스 적용
//   // <p className={food.price>=10000?'price-red text-strong':'price-blue text-strong'}>{food.price}</p>
//   //+ 연산  <p className={'text-strong '+(food.price>=10000?'price-red':'price-blue')}>{food.price}</p>
//   //join  
//   // <p className={['text-strong',food.price>=10000?'price-red':'price-blue'].join(" ")}>{food.price}</p>

//   //  변수
//   //  const priceClassName = 'text-strong price-red';

//   //  백틱문자 활용 `
//   // <p className={ `text-strong ${food.price >= 10000 ? 'price-red ' : 'price-blue'} `}>{food.price}</p>


//   return (
//     // "start"
//     <Container className={"start " + viewClass}>
//       <Row>
//         <Col md={6}>
//           <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
//         </Col>
//         <Col md={6}>
//           <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
//           {/* <p style={tempStyle}>{food.content}</p> */}
//           <p style={styles.fontBigBold}>{food.content}</p>

//           <p className={['text-strong', food.price >= 10000 ? 'price-red' : 'price-blue'].join(" ")}>{food.price}</p>
//           <p>
//             <Button variant="dark" onClick={() => {
//               if (orderCount > 0)
//                 setOrderCount(orderCount - 1);
//             }}>-</Button>
//             <span> {orderCount} </span>
//             <Button variant="dark" onClick={() => {
//               if(orderCount<food.stockCount){
//                 setOrderCount(orderCount + 1);
//               }
//             }}>+</Button>
//           </p>
//           <p>{stockCount}</p>

//           { 
//             food.stockCount>0?<Button variant="primary" onClick={()=>{
//               setStockCount(food.stockCount-orderCount);
//             }}>주문하기</Button>:<Button variant="primary">품절</Button>
//           }
//         </Col>
//       </Row>

//       {
//         // showModal &&
//         // showModal == true ? :
//       }

//       <Modal show={showModal} onHide={() => { setshowModal(false) }}>
//         <Modal.Header closeButton>
//           <Modal.Title>환영합니다~</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>어서오세요~ Food 구경하세요~</Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={() => { setshowModal(false) }}>
//             확인
//           </Button>
//         </Modal.Footer>
//       </Modal>

//     </Container>
//   );
// }
export default Detail;