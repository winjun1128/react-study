function ColorBox(props) {
    return (
        <div className='box' style={{ backgroundColor: props.bgColor }}>
            <button onClick={()=>{
               //삭제

               //boxes,setBoxes,index
               //props.index
               let temp = [...props.boxes];
               temp.splice(props.index,1);
               props.setBoxes(temp);
            }}>X</button>
        </div>
    );
}
export default ColorBox;