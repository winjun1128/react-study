import { useState } from "react";
function Practice02(){
       //useState -> state변수 : 재렌더링발생, 데이터값유지
        let textArr = ['하나','둘','셋'];
        //let [textArr,setTextArr] = useState(['하나','둘','셋']);
        const [index,setIndex] = useState(0);
        return(
            <div className="App">
                <p>{textArr[index]}</p>
                <button onClick={()=>{
                    //index++;
                    //setIndex(index%textArr.length);

                    let temp = index;
                    temp++; //0 1 2
                    if(temp==textArr.length)
                        temp=0;
                    setIndex(temp); // index = temp;    setIndex(매개변수) -> index = 매개변수
                }}>변경버튼</button>
            </div>
        );
        // V2
        //let [num,setNum] = useState(1); //num 1: 하나
        // if(num==1){
        //     return(
        //         <div className="App">
        //             <p>하나</p>
        //             <button onClick={()=>{
        //                 setNum(2);
        //             }}>변경버튼</button>
        //         </div>
        //     );
        // }
        // else if(num==2){
        //     return(
        //         <div className="App">
        //             <p>둘</p>
        //             <button onClick={()=>{
        //                 setNum(3);
        //             }}>변경버튼</button>
        //         </div>
        //     );
        // }
        // else{
        //     return(
        //         <div className="App">
        //             <p>하나</p>
        //             <button onClick={()=>{
        //               setNum(1);
        //             }}>변경버튼</button>
        //         </div>
        //     );
        // }
    // let [countArr, setCountArr] = useState(['하나',"둘","셋"]);
    // let count = 0;
    // return(
    //     <div>
    //         <span>{countArr[0]}</span>
    //         <button onClick={()=>{
    //             if(count%3==0){
    //                 setCountArr(countArr[count+1]);
    //                 count++;
    //             }
    //             else if(count%3==1){
    //                 setCountArr(countArr[count+1]);
    //                 count++;
    //             }
    //             else if(count%3==2){
    //                 count =0;
    //                 setCountArr(countArr[0]);
    //             }
                

    //         }}>변경버튼</button>
    //     </div>
    // );

    //버전1
//     return (
//         <div className="App">
//             <p>{text}</p>
//             <button onClick={()=>{
//                 if(text == '하나')
//                     setText('둘');
//                 else if(text=='둘')
//                     setText('셋');
//                 else if(text=='셋')
//                     setText('하나');
//             }}>변경버튼</button>
//         </div>
//     )
// }
}
export default Practice02;