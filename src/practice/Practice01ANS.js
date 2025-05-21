import './Practice01ANS.css';
import { useState } from "react";
function Practice01ANS() {
    const [eventNum,setEvenNum] = useState(0);
    return (
        <div>
            <button onClick={()=>{
                //숫자값 2 4 6 +2
                setEvenNum(eventNum+2);
            }}>짝수출력</button>
            {/* <span style={ {color:'red'} }>{eventNum}</span> */}
            <span className='even-red'>{eventNum}</span>
        </div>
    );
}
export default Practice01ANS;