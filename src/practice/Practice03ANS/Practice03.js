import './Practice03.css';
import TextItem from './TextItem';
function Practice03() {

    let titleArr = ['하나','둘','셋','넷','다섯'];
    let contentArr = ['내용하나','내용둘','내용셋','내용넷','내용다섯'];
    return (
        <div className='App'>
            {
                titleArr.map((item,index)=>{
                    return <TextItem title={titleArr[index]} content={contentArr[index]}/>;
                })
            }
            {/* <TextItem title={titleArr[0]} content={contentArr[0]} />
            <TextItem title={titleArr[1]} content={contentArr[1]} />
            <TextItem title={titleArr[2]} content={contentArr[2]} />
            <TextItem title={titleArr[3]} content={contentArr[3]} />
            <TextItem title={titleArr[4]} content={contentArr[4]} /> */}
        </div>
    );
}
export default Practice03;