import './Remodal.css'
function Remodal(props){
    
    return(
        // <>
        //     <h1>안녕</h1>
        // </>
        <div className="mmodal" style={{backgroundColor:props.bgColor}}>
            <h2>{props.title[props.index]}<span>❤</span>{props.count[props.index]}</h2>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={()=>{
                let temp = [...props.title];
                temp[0] = 'Today News';
                props.setTitle(temp);
            }}>제목변경</button>
        </div>
        
    )
}
export default Remodal;