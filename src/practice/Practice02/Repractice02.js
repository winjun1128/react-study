import { useState } from "react";

function Repractice02(){
    // let count = 0;      //일반변수로 렌더링되면 0으로 초기화됨 따라서 상태변수 필요
    let [count,setCount] = useState(0);
    const [Text,setText] = useState('하나');
    return(
        <div style={{textAlign:'center'}}>
            <h4>{Text}</h4>
            <button onClick={()=>{
                if(count%3==0){
                    setText('둘');
                    setCount(count+1);
                }
                else if(count%3==1){
                    setText('셋');
                    setCount(count+1);
                }
                else if(count%3==2){
                    setText('하나');
                    setCount(0);
                }
            }}>변경버튼</button>
        </div>
    )
}
export default Repractice02;