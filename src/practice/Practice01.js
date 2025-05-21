import './Practice01.css';
import { useState } from "react";
function Practice01() {
    let [cnt2, setCnt2] = useState(0);
    return (
        <div className='container'>
            <br />
            <button onClick={() => {
                setCnt2(cnt2 + 2);
            }}>짝수출력</button>
            <span>{cnt2}</span>
        </div>
    );
}
export default Practice01;