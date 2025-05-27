import { useState } from "react";

function Repractice04(){
    const [boxes,setBoxes] = useState([<div className="box">박스</div>,<div className="box">박스</div>]);
    return(
        <div>
            <button onClick={()=>{
                let temp = [...boxes];
                temp.push(<div className="box">박스</div>);
                setBoxes(temp);
            }}>추가</button>
            <br></br>
            <br></br>
            {boxes}
        </div>
    )
}
export default Repractice04;