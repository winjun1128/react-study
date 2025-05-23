import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';
function NewsBlog() {
    let title = "React study";

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);


    //       Today news
    let [likeCount, setLikeCount] = useState(0);
    let [likeCount2, setLikeCount2] = useState(0);
    let [likeCount3, setLikeCount3] = useState(0);
    let [likeCountAr, setLikeCountAr] = useState([0, 0, 0]);
    let [todayNewsTitle, setTodayNewsTitle] = useState(news[0]);
    let tempTitle;

    let [showModal, setShowModal] = useState(false);

    let [selectedTitle, setSelectedTitle] = useState('');
    let [selectedLikeCount,setSelectedLikeCount] = useState(0);

    //input 값을 저장할 변수
    let[inputText,setInputText] = useState('');
    return (
        <div>
            <div className='black-nav'>
                <h4>BLog Header</h4>
                <p style={{ color: "orange", fontSize: '20px' }}>{title}</p>
            </div>

            <div>
                <input type='text' id="input_news" value={inputText} onChange={(event)=>{
                    // console.log(event);
                    console.log(event.target.value);
                    setInputText(event.target.value);
                }}></input>
                <button onClick={()=>{
                    //입력된 값을 제목 배열에 추가
                    //입력된 값: input 요소에서 onChange가 발생할때 ->inputText state변수에 저장되어 있음.
                    //제목배열 news 배열변수에 추가 -> 리렌더링 -> news배열의 갯수만큼 반복(map) 화면에 표시
                   
                    //입력값이 있는 경우만~
                    //if(inputText.trim() != ''){
                    // if(inputText.trim().length >0){
                    //     let temp = [...news];
                    //     temp.push(inputText);
                    //     setNews(temp);

                    //     //배열state변수 바꾸는 법 : 배열 복사 -> 값 변경/추가/삭제 -> set함수로 원래 배열에 저장
                    //     setInputText('');   //공백 -> input value={inputText}
                    // }
                    // else{
                    //     alert("내용을 입력 후 등록하세요~");
                    //     setInputText('');
                    // }

                    //inputText = '     abc';

                    //if(inputText.trim().length == 0){

                    inputText = inputText.trim();
                    if(inputText.length == 0){
                        alert("내용을 입력 후 등록하세요~");
                        setInputText('');
                        return;
                    }
                    let temp = [...news];           //뉴스추가
                    temp.push(inputText);
                    setNews(temp);

                    likeCountAr.push(0);            //좋아요추가

                    //배열state변수 바꾸는 법 : 배열 복사 -> 값 변경/추가/삭제 -> set함수로 원래 배열에 저장
                    setInputText('');   //공백 -> input value={inputText}

                

                    /*
                    let title = document.getElementById('input_news').value;
                    let temp = [...news];
                    temp.push(title);
                    setNews(temp);

                    document.getElementById('input_news').value='';
                    */
                }}>등록</button>
            </div>
            {
                news.map((item, index) => {         //0 1 2    //아이템과 인덱스로 값과 인덱스추출
                    return (
                        <div className='post-list' key={index}>
                            <h4 onClick={() => {
                               setShowModal(!showModal);
                                setSelectedTitle(item);
                                setSelectedLikeCount(likeCountAr[index]);
                            }}>{item}<span onClick={(event) => {
                                event.stopPropagation();

                                let temp = [...likeCountAr];
                                temp[index] += 1;
                                setLikeCountAr(temp);          
                            }}>❤</span>{likeCountAr[index]}</h4>
                            <p>내용 무</p>
                            <button onClick={()=>{
                                let temp = [...news];
                                temp.splice(index,1);               //뉴스삭제
                                likeCountAr.splice(index,1);        //좋아요삭제
                                setNews(temp);

                            }}>삭제</button>
                        </div>
                    )
                })
            }

            {
                //showModal == true ? <Modal/> : null
                showModal && <Modal title={selectedTitle} likeCount={selectedLikeCount} news={news} setNews={setNews} bgColor='lightblue' />
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


//                         //       Today news
//     let [likeCount,setLikeCount]=useState(0);
//     let [likeCount2,setLikeCount2]=useState(0);
//     let [likeCount3,setLikeCount3]=useState(0);
//     let [likeCountAr,setLikeCountAr]=useState([0,0,0]);
//     let [todayNewsTitle,setTodayNewsTitle] = useState(news[0]);
//     let tempTitle;

//     let[showModal,setShowModal] = useState(false);

//     let[selectedTitle,setSelectedTitle] = useState('');
//     return(
//         <div>
//             <div className='black-nav'>
//                 <h4>BLog Header</h4>
//                 <p style={{color:"orange",fontSize:'20px'}}>{title}</p>
//             </div>

//             <div className='post-list'>
//                  <h4 onClick={()=>{
//                     if(showModal)
//                         setShowModal(false);
//                     else
//                         setShowModal(true);
//                     setSelectedTitle(news[0]);
//                 }}>{news[0]}<span onClick={()=>{
//                     let temp = [...likeCountAr];
//                     temp[0]+=1;
//                     //setLikeCount(likeCount+1);
//                     setLikeCountAr(temp);           //배열 요소를 바꿀떄 배열의 주소가 바껴야 렌더링 조건 성립
//                     // {likeCount}
//                 }}>❤</span>{likeCountAr[0]}</h4>
//                 <p>내용 무</p>

//                 {/* <button onClick={()=>{
//                     // setNews1('Today News');
//                     //['오늘의 뉴스','어제의 뉴스','내일의 뉴스'] -> ['Today News','어제의 뉴스','내일의 뉴스']

//                     //news[0]='Today News';
//                     let temp = [...news];
//                     temp[0] = 'Today News';
//                     setNews(temp);
//                 }}>제목 변경</button> */}
//             </div>

//              <div className='post-list'>
//                 <h4 onClick={()=>{
//                     setShowModal(!showModal);
//                      setSelectedTitle(news[1]);
//                 }}>{news[1]} <span onClick={()=>{
//                      let temp = [...likeCountAr];
//                     temp[1]+=1;
//                     //setLikeCount2(likeCount2+1);
//                     setLikeCountAr(temp);
//                     // {likeCount2}
//                 }}>❤</span>{likeCountAr[1]}</h4>
//                 <p>내용 무</p>
//             </div>

//              <div className='post-list'>
//                 <h4 onClick={()=>{
//                    setShowModal(!showModal);
//                      setSelectedTitle(news[2]);
//                 }}>{news[2]} <span onClick={(event)=>{
//                     event.stopPropagation();    //전파를 막겠다
//                     //속해있는 부모 요소의 이벤트 처리까지 전파되는걸 막겠다
//                     // <h4><span></span></h4>

//                    let temp = [...likeCountAr];
//                     temp[2]+=1;
//                     //setLikeCount3(likeCount3+1);
//                     setLikeCountAr(temp);
//                     // {likeCount3}
//                 }}>❤</span>{likeCountAr[2]}</h4>
//                 <p>내용 무</p>
//             </div>

//             {
//                 //showModal == true ? <Modal/> : null
//                 showModal && <Modal title={selectedTitle}/>
//             }
//         </div>
//     );
// }

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