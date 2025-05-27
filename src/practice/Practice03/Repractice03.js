import Repractice03Box from "./Repractice03Box";

function Repractice03() {
    let titlear = ['하나','둘','셋','넷','다섯'];
    let contentar = ['하나','둘','셋','넷','다섯'];
    return (
        <div className="App">
            {
                titlear.map((item)=>{
                    return (
                        <>
                            <Repractice03Box title={item} content={item}></Repractice03Box>
                            <hr></hr>
                        </>
                    )
                })
            }
        </div>
    )
}
export default Repractice03;