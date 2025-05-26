import ColorBox from './ColorBox';
import './Practice05.css';
import { useState } from 'react';
function Practice05(){
    let [boxes,setBoxes] = useState([
      'red','blue','green','black'
    ]);
    return(
        <div>
            <div>
            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift('red');
                setBoxes(temp);
             }}>앞빨간박스추가</button>
            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift('blue');
                setBoxes(temp);
             }}>앞파란박스추가</button>
            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift('green');
                setBoxes(temp);
             }}>앞초록박스추가</button>

            <button onClick={() => {
                 let temp = [...boxes];
                temp.push('red');
                setBoxes(temp);
             }}>뒤빨간박스추가</button>
            <button onClick={() => {
                let temp = [...boxes];
                temp.push('blue');
                setBoxes(temp);
             }}>뒤파란박스추가</button>
            <button onClick={() => {
                let temp = [...boxes];
                temp.push('green');
                setBoxes(temp);
             }}>뒤초록박스추가</button>
             <button onClick={() => {
                let temp = [...boxes];
                temp.shift();
                setBoxes(temp);
             }}>앞 박스 삭제</button>
             <button onClick={() => {
                let temp = [...boxes];
                temp.pop();
                setBoxes(temp);
             }}>뒤 박스 삭제</button>
            </div>
        
            {
                // 'red', 'green', 'blue', 'black'
                boxes.map((item,index)=>{
                    // return (<div className='box' style={{backgroundColor:item}}>
                    //              <button onClick={()=>{
                    //                     //삭제

                    //                 //boxes,setBoxes,index
                    //                 //props.index
                    //                 let temp = [...boxes];
                    //                 temp.splice(index,1);
                    //                 props.setBoxes(temp);
                    //             }}>X</button>
                    // </div>)
                    return <ColorBox bgColor={item} index={index} boxes={boxes} setBoxes={setBoxes} />
                })

                //splice(위치,몇개지우겠다)
                //splice(2,1)
                //let[boxes,setBoxes] = useState(['red','blue','green','black']);
            }
        </div>
    );
}
export default Practice05;
// function Practice05(){
//     let [boxes,setBoxes] = useState([
//         <div className='box bg-red'></div>,
//         <div className='box'style={{backgroundColor:'blue'}}></div>,
//         <div className='box'style={{backgroundColor:'green'}}></div>,
//         <div className='box'style={{backgroundColor:'black'}}></div>
//     ]);
//     return(
//         <div>
//             <div>
//             <button onClick={() => {
//                 let temp = [...boxes];
//                 temp.unshift(<div className='box bg-red'></div>);
//                 setBoxes(temp);
//              }}>앞빨간박스추가</button>
//             <button onClick={() => {
//                 let temp = [...boxes];
//                 temp.unshift(<div className='box'style={{backgroundColor:'blue'}}></div>);
//                 setBoxes(temp);
//              }}>앞파란박스추가</button>
//             <button onClick={() => {
//                 let temp = [...boxes];
//                 temp.unshift(<div className='box'style={{backgroundColor:'green'}}></div>);
//                 setBoxes(temp);
//              }}>앞초록박스추가</button>

//             <button onClick={() => {
//                  let temp = [...boxes];
//                 temp.push(<div className='box bg-red'></div>);
//                 setBoxes(temp);
//              }}>뒤빨간박스추가</button>
//             <button onClick={() => {
//                 let temp = [...boxes];
//                 temp.push(<div className='box'style={{backgroundColor:'blue'}}></div>);
//                 setBoxes(temp);
//              }}>뒤파란박스추가</button>
//             <button onClick={() => {
//                 let temp = [...boxes];
//                 temp.push(<div className='box'style={{backgroundColor:'green'}}></div>);
//                 setBoxes(temp);
//              }}>뒤초록박스추가</button>
//              <button onClick={() => {
//                 let temp = [...boxes];
//                 temp.shift();
//                 setBoxes(temp);
//              }}>앞 박스 삭제</button>
//              <button onClick={() => {
//                 let temp = [...boxes];
//                 temp.pop();
//                 setBoxes(temp);
//              }}>뒤 박스 삭제</button>
//             </div>
        
//             {boxes}
//         </div>
//     );
// }
// export default Practice05;
//클릭했을때가 아닌 그냥 추가되어 버림
// import { useState } from "react";

// function addbox(boxColor) {
//     return (
//         <div className="box" style={{ backgroundColor: 'red' }}></div>
//     );
// }
// function Practice05() {
//     const [boxColor, setBoxColor] = useState(['red', 'blue', 'green', 'black']);
//     return (
//         <div>
//             <button onClick={() => {
//                 let temp = [...boxColor];
//                 temp.splice(0, 'red');
//                 setBoxColor(temp);
//             }}>앞빨간박스추가</button>
//             <button onClick={() => { setBoxColor('blue') }}>앞파란박스추가</button>
           
//             <button onClick={() => { }}>앞초록박스추가</button>

//             <button onClick={() => { }}>뒤빨간박스추가</button>
//             <button onClick={() => { }}>뒤파란박스추가</button>
//             <button onClick={() => { }}>뒤초록박스추가</button>
//             <div className="box" style={{ backgroundColor: 'red' }}></div>
//             <div className="box" style={{ backgroundColor: 'blue' }}></div>
//             <div className="box" style={{ backgroundColor: 'green' }}></div>
//             <div className="box" style={{ backgroundColor: 'black' }}></div>
//              {boxColor[0]==='red' && addbox(boxColor)}
//         </div>
//     );
// }
// export default Practice05;