import { useState } from "react";           // export { useState };
function State02(){
    //let v = [] {key:value}
    //JSON -> Javascript Object

    let text = ""     //문자형 변수
    let textArr = []; //배열변수
    for(let i=0;i<5;i++){
        text += "<p>안녕하세요~</p>";
        textArr.push(<p>안녕하세요~</p>);
    }

    return(
        <div>
            <p>안녕하세요~</p>
            <p>안녕하세요~</p>
            <p>안녕하세요~</p>
            <p>안녕하세요~</p>
            <p>안녕하세요~</p>
            <hr></hr>
            {textArr}
            <hr></hr>
            {text}
        </div>
    );
}
export default State02;