import { useState } from "react";
import './Renewsblog.css';
import './Remodal.css';
// import './NewsBlog.css';
import Remodal from "./Remodal";
function Renewsblog(){
    const[title,setTitle] = useState(['오늘의 뉴스','어제의 뉴스','내일의 뉴스']);
    const[count,setCount] = useState([0,0,0]);
    const[inputText,setInputText] = useState('');
    const[showModal,setShowModal] = useState(false);
    const[selectIndex,setSelectIndex] = useState(0);
    let[chkSelect,setChkSelect]=useState(false);
    return(
        <div>
            <div className="nav-bar">
                <h2>Blog Header</h2>
                <h1>React Study</h1>
            </div>
            <input type="text" value={inputText} onChange={(event)=>{
                setInputText(event.target.value);
            }} ></input>
            <button onClick={()=>{
                if(inputText.trim()=='')return;
                let temp = [...title];
                temp.push(inputText);
                setTitle(temp);

                let temp2 = [...count];
                temp2.push(0);
                setCount(temp2);
            }}>등록</button>
            {
                title.map((item,index)=>{
                    return(
                        <div>
                            <h2 onClick={()=>{
                                // 왜 모달이 안뜨는지?->원본 모달 스타일 적용 안 시켜서
                                if(showModal==false)setShowModal(!showModal);
                            
                                setSelectIndex(index);
                            }}>{title[index]}<span onClick={(event)=>{
                                //하트는 모달 안뜨게 이벤트 무시해버리도록 
                                // event.stopPropagation(); 
                                let temp = [...count];
                                temp[index]+=1;
                                setCount(temp);
                            }}>❤</span>{count[index]}</h2>
                            <h3>내용 무</h3>
                            <button onClick={()=>{
                                let temp = [...title];
                                temp.splice(index,1);
                                setTitle(temp);

                                let temp2 = [...count];
                                temp2.splice(index,1);
                                setCount(temp2);
                            }}>삭제</button>
                            <hr></hr>
                           
                       </div>
                    )
                })
              
            }
            {
                // 모달영역인데 안뜸
                showModal&&<Remodal title={title} count={count} index={selectIndex} bgColor='lightblue' setTitle={setTitle} />
            }
        </div>
    )
}
// function Renewsblog(){
//     const[title,setTitle] = useState(['오늘의 뉴스','어제의 뉴스','내일의 뉴스']);
//     const[count,setCount] = useState([0,0,0]);
//     const[inputText,setInputText] = useState('');
//     return(
//         <div>
//             <div className="nav-bar">
//                 <h2>Blog Header</h2>
//                 <h1>React Study</h1>
//             </div>
//             {/* <input type="text" value={inputText} onChange={(event)=>{
//                 setInputText(event.target.value);
//             }} ></input>
//             <button onClick={()=>{
//                 if(inputText.trim()=='')return;
//                 let temp = [...title];
//                 temp.push(inputText);
//                 setTitle(temp);

//                 let temp2 = [...count];
//                 temp2.push(0);
//                 setCount(temp2);
//             }}>등록</button> */}
//             {
//                 title.map((item,index)=>{
//                     return(
//                         <div>
//                             <h2>{title[index]}<span onClick={()=>{
//                                 let temp = [...count];
//                                 temp[index]+=1;
//                                 setCount(temp);
//                             }}>❤</span>{count[index]}</h2>
//                             <h3>내용 무</h3>
//                             <button onClick={()=>{
//                                 let temp = [...title];
//                                 temp.splice(index,1);
//                                 setTitle(temp);

//                                 let temp2 = [...count];
//                                 temp2.splice(index,1);
//                                 setCount(temp2);
//                             }}>삭제</button>
//                             <hr></hr>
                           
//                        </div>
//                     )
//                 })
              
//             }
//             <button>제목 변경</button>
//         </div>
//     )
// }
// function Renewsblog(){
//     const[title,setTitle] = useState(['오늘의 뉴스','어제의 뉴스','내일의 뉴스']);
//     const[count,setCount] = useState([0,0,0]);
//     const[inputText,setInputText] = useState('');
//     return(
//         <div>
//             <div className="nav-bar">
//                 <h2>Blog Header</h2>
//                 <h1>React Study</h1>
//             </div>
//             <input type="text" value={inputText} onChange={(event)=>{
//                 setInputText(event.target.value);
//             }} ></input>
//             <button onClick={()=>{
//                 if(inputText.trim()=='')return;
//                 let temp = [...title];
//                 temp.push(inputText);
//                 setTitle(temp);

//                 let temp2 = [...count];
//                 temp2.push(0);
//                 setCount(temp2);
//             }}>등록</button>
//             {
//                 title.map((item,index)=>{
//                     return(
//                         <div>
//                             <h2>{title[index]}<span onClick={()=>{
//                                 let temp = [...count];
//                                 temp[index]+=1;
//                                 setCount(temp);
//                             }}>❤</span>{count[index]}</h2>
//                             <h3>내용 무</h3>
//                             <hr></hr>
                           
//                        </div>
//                     )
//                 })
              
//             }
//             <button>제목 변경</button>
//         </div>
//     )
// }
// function Renewsblog(){
//     const[title,setTitle] = useState(['오늘의 뉴스','어제의 뉴스','내일의 뉴스']);
//     const[count,setCount] = useState([0,0,0]);
//     return(
//         <div>
//             <div className="nav-bar">
//                 <h2>Blog Header</h2>
//                 <h1>React Study</h1>
//             </div>
//             {
//                 title.map((item,index)=>{
//                     return(
//                         <div>
//                             <h2>{title[index]}<span onClick={()=>{
//                                 let temp = [...count];
//                                 temp[index]+=1;
//                                 setCount(temp);
//                             }}>❤</span>{count[index]}</h2>
//                             <h3>내용 무</h3>
//                             <hr></hr>
                           
//                        </div>
//                     )
//                 })
              
//             }
//             <button>제목 변경</button>
//         </div>
//     )
// }
// function Renewsblog(){
//     const[title,setTitle] = useState(['오늘의 뉴스','어제의 뉴스','내일의 뉴스']);
//     const[count,setCount] = useState([0,0,0]);
//     return(
//         <div>
//             <div className="nav-bar">
//                 <h2>Blog Header</h2>
//                 <h1>React Study</h1>
//             </div>
//             {
//                 title.map((item,index)=>{
//                     return(
//                         <div>
//                             <h2>{title[index]}<span onClick={()=>{
//                                 let temp = [...count];
//                                 temp[index]+=1;
//                                 setCount(temp);
//                             }}>❤</span>{count[index]}</h2>
//                             <h3>내용 무</h3>
//                             {
//                                 index==0&&(()=>{
//                                     return(
//                                         <button onClick={()=>{
//                                         let temp = [...title];
//                                         temp[0]='Today News';
//                                         setTitle(temp);
//                                         }}>제목 변경</button>
//                                     )
//                                     // 함수를 선언할떄는 (()=>{})으로
//                                     /* 함수를 실행시키려면()해주기 */
//                                 })()    
//                             }
//                             <hr></hr>
                           
//                        </div>
//                     )
//                 })
              
//             }
//         </div>
//     )
// }
// function Renewsblog(){
//     const[title,setTitle] = useState(['오늘의 뉴스','어제의 뉴스','내일의 뉴스']);
//     const[count,setCount] = useState([0,0,0]);
//     return(
//         <div>
//             <div className="nav-bar">
//                 <h2>Blog Header</h2>
//                 <h1>React Study</h1>
//             </div>
//             {
//                 title.map((item,index)=>{
//                     return(
//                         <div>
//                             <h2>{item}<span onClick={()=>{
//                                 let temp = [...count];
//                                 temp[index]+=1;
//                                 setCount(temp);
//                             }}>❤</span>{count[index]}</h2>
//                             <h3>내용 무</h3>
//                             <hr></hr>
//                        </div>
//                     )
//                 })
              
//             }
//         </div>
//     )
// }
// function Renewsblog(){
//     const[title,setTitle] = useState(['오늘의 뉴스','어제의 뉴스','내일의 뉴스']);
//     return(
//         <div>
//             <div className="nav-bar">
//                 <h2>Blog Header</h2>
//                 <h1>React Study</h1>
//             </div>
//             {
//                 title.map((item)=>{
//                     return(
//                         <div>
//                             <h2>{item}</h2>
//                             <h3>내용 무</h3>
//                             <hr></hr>
//                        </div>
//                     )
//                 })
              
//             }
//         </div>
//     )
// }
export default Renewsblog;