import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';
function NewsBlog(){
    let title = "React study";

    let [news1,setNews1] = useState('오늘의 뉴스');
    let [news2,setNews2] = useState('어제의 뉴스');
    let [news3,setNews3] = useState('내일의 뉴스');

    let [news,setNews]=useState(['오늘의 뉴스','어제의 뉴스','내일의 뉴스']);
                        //       Today news
    let [likeCount,setLikeCount]=useState(0);
    let [likeCount2,setLikeCount2]=useState(0);
    let [likeCount3,setLikeCount3]=useState(0);
    let [likeCountAr,setLikeCountAr]=useState([0,0,0]);
    let [todayNewsTitle,setTodayNewsTitle] = useState(news[0]);
    let tempTitle;

    let[showModal,setShowModal] = useState(false);

    let[selectedTitle,setSelectedTitle] = useState('');
    return(
        <div>
            <div className='black-nav'>
                <h4>BLog Header</h4>
                <p style={{color:"orange",fontSize:'20px'}}>{title}</p>
            </div>

            <div className='post-list'>
                 <h4 onClick={()=>{
                    if(showModal)
                        setShowModal(false);
                    else
                        setShowModal(true);
                    setSelectedTitle(news[0]);
                }}>{news[0]}<span onClick={()=>{
                    let temp = [...likeCountAr];
                    temp[0]+=1;
                    //setLikeCount(likeCount+1);
                    setLikeCountAr(temp);           //배열 요소를 바꿀떄 배열의 주소가 바껴야 렌더링 조건 성립
                    // {likeCount}
                }}>❤</span>{likeCountAr[0]}</h4>
                <p>내용 무</p>

                {/* <button onClick={()=>{
                    // setNews1('Today News');
                    //['오늘의 뉴스','어제의 뉴스','내일의 뉴스'] -> ['Today News','어제의 뉴스','내일의 뉴스']

                    //news[0]='Today News';
                    let temp = [...news];
                    temp[0] = 'Today News';
                    setNews(temp);
                }}>제목 변경</button> */}
            </div>

             <div className='post-list'>
                <h4 onClick={()=>{
                    setShowModal(!showModal);
                     setSelectedTitle(news[1]);
                }}>{news[1]} <span onClick={()=>{
                     let temp = [...likeCountAr];
                    temp[1]+=1;
                    //setLikeCount2(likeCount2+1);
                    setLikeCountAr(temp);
                    // {likeCount2}
                }}>❤</span>{likeCountAr[1]}</h4>
                <p>내용 무</p>
            </div>

             <div className='post-list'>
                <h4 onClick={()=>{
                   setShowModal(!showModal);
                     setSelectedTitle(news[2]);
                }}>{news[2]} <span onClick={(event)=>{
                    event.stopPropagation();    //전파를 막겠다
                    //속해있는 부모 요소의 이벤트 처리까지 전파되는걸 막겠다
                    // <h4><span></span></h4>

                   let temp = [...likeCountAr];
                    temp[2]+=1;
                    //setLikeCount3(likeCount3+1);
                    setLikeCountAr(temp);
                    // {likeCount3}
                }}>❤</span>{likeCountAr[2]}</h4>
                <p>내용 무</p>
            </div>

            {
                //showModal == true ? <Modal/> : null
                showModal && <Modal title={selectedTitle}/>
            }
        </div>
    );
}

// function NewsBlog(){
//     let title = "React study";

//     let [news1,setNews1] = useState('오늘의 뉴스');
//     let [news2,setNews2] = useState('어제의 뉴스');
//     let [news3,setNews3] = useState('내일의 뉴스');

//     let [news,setNews]=useState(['오늘의 뉴스','어제의 뉴스','내일의 뉴스']);
//     let [heartcount,setHeartCount]=useState(0);
//     return(
//         <div>
//             <div className='black-nav'>
//                 <h4>BLog Header</h4>
//                 <p style={{color:"orange",fontSize:'20px'}}>{title}</p>
//             </div>

//             <div className='post-list'>
//                 <h4>{news[0]}<span onClick={()=>{
//                     setHeartCount(heartcount+1);
//                 }}>❤</span>{heartcount}</h4>
//                 <p>내용 무</p>
//             </div>

//              <div className='post-list'>
//                 <h4>{news[1]}</h4>
//                 <p>내용 무</p>
//             </div>

//              <div className='post-list'>
//                 <h4>{news[2]}</h4>
//                 <p>내용 무</p>
//             </div>
//         </div>
//     );
// }

// function NewsBlog(){
//     let title = "React study";
//     let [titleArr, setTitleArr] = useState(['오늘의 뉴스',"어제의 뉴스","내일의 뉴스"]);
//     return(
//         <div>
//             <div className='black-nav'>
//                 <h4>BLog Header</h4>
//                 <p style={{color:"orange",fontSize:'20px'}}>{title}</p>
//             </div>

//             <div className='post-list'>
//                 <h4>{titleArr[0]}</h4>
//                 <p>글 내용</p>
//             </div>

//              <div className='post-list'>
//                 <h4>{titleArr[1]}</h4>
//                 <p>글 내용</p>
//             </div>

//              <div className='post-list'>
//                 <h4>{titleArr[2]}</h4>
//                 <p>글 내용</p>
//             </div>
//         </div>
//     );
// }
export default NewsBlog;