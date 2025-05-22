import './Practice03.css';
function Practice03Box(props){
    return(
        <div className='textItem'>
            <p>{props.title}</p>
            <p>{props.content}</p>
        </div>
    );
}
export default Practice03Box;