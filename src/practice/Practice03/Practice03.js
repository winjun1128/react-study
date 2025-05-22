import './Practice03.css';
import Practice03Box from './Practice03Box';
function Practice03(){
    let titleArr = ['제목 : 하나','제목 : 둘','제목 : 셋','제목 : 넷','제목 : 다섯'];
    let contentArr = ['내용 : 내용하나','내용 : 내용둘','내용 : 내용셋','내용 : 내용넷','내용 : 내용다섯'];
    return (
        <div className="App">
             <Practice03Box title={titleArr[0]} content={contentArr[0]} /> 
             <Practice03Box title={titleArr[1]} content={contentArr[1]} /> 
             <Practice03Box title={titleArr[2]} content={contentArr[2]} /> 
             <Practice03Box title={titleArr[3]} content={contentArr[3]} /> 
             <Practice03Box title={titleArr[4]} content={contentArr[4]} /> 
        </div>
    );

}
export default Practice03;