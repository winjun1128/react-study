import './Basic01.css';

function Basic01() {

    let msg = "안녕~";
    let state = "배가 고프다";
    let flag = false;

    let hi = "";
    for (let i = 0; i < 5; i++) {
        hi += "hi~";
    }
    return (
        <div className="App">
            <h1>리액트 Basic01</h1>
            <p className="font-red">아무거나 글씨</p>
            <p id="pid">p태그 글자</p>
            {
                //삼항연산자
                //flag == true ? <h3>{msg}</h3> : <h3>{state}</h3>
            }
            {
                //&& 연산자
                flag && <h3>{msg}</h3>
            }
            {
                //flag == false && <h3>{state}</h3>
                !flag && <h3>{state}</h3>
            }
            <h4 style={{ color: 'green', fontStyle: 'italic' }}>{hi}</h4>
        </div>
    );

    //if else로 return을 구분
    // if (flag) {
    //     return (
    //         <div className="App">
    //             <h1>리액트 Basic01</h1>
    //             <p className="font-red">아무거나 글씨</p>
    //             <p id="pid">p태그 글자</p>

    //             <h3>{msg}</h3>
    //             <h4 style={{ color: 'green', fontStyle: 'italic' }}>{hi}</h4>
    //         </div>
    //     );
    // }
    // else {
    //     return(
    //        <div className="App">
    //             <h1>리액트 Basic01</h1>
    //             <p className="font-red">아무거나 글씨</p>
    //             <p id="pid">p태그 글자</p>

    //             <h3>{state}</h3>
    //             <h4 style={{ color: 'green', fontStyle: 'italic' }}>{hi}</h4>
    //         </div>
    //     );
    // }


    //리엑트 컴포넌트에서 return은 최상위 1개 요소로 리턴
    // return(
    //     <>
    //         <div>
    //             <p></p>
    //         </div>
    //         <div>
    //             <span></span>
    //         </div>
    //     </>
    // );

    //  return(
    //     <div>
    //         <div>
    //             <p></p>
    //         </div>
    //         <div>
    //             <span></span>
    //         </div>
    //     </div>
    // );
}
export default Basic01;