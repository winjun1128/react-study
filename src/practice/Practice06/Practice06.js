import { Link } from "react-router";
import { Route,Routes,useNavigate } from "react-router";
import Cart from './Cart';
function Practice06(){

    //생성한 프로젝ㅌ,
    //npm install react-router
    //index.js <BrowserRouter>설정

    //Link to
    //navigate

    let navigate = useNavigate();

    return(
        <div>
            {/* <button><Link to='/'>Main</Link></button>
            <button><Link to='/info'>/info</Link></button>
            <button><Link to='/mypage'>/mypage</Link></button>
            <button><Link to='/cart'>/cart</Link></button> */}
            <button onClick={()=>{navigate("/")}}>Main</button>
            <button onClick={()=>{navigate("/info")}}>/info</button>
            <button onClick={()=>{navigate("/mypage")}}>mypage</button>
            <button onClick={()=>{navigate("/cart")}}>/cart</button>
            <Routes>
                <Route path="/" element={<div>Main</div>}></Route>
                <Route path="/info" element={<div>info</div>}></Route>
                <Route path="/mypage" element={<div>mypage</div>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
        </div>
    )
}
// function Practice06(){
//     return(
//         <div>
//             <div style={{border:'1px solid black', display:'inline-block'}}>
//                 <Link to='/'>Home</Link>
//             </div>
//             <div style={{border:'1px solid black',display:'inline-block'}}>
//                 <Link to='/info'>Info</Link>
//             </div>
//             <div style={{border:'1px solid black',display:'inline-block'}}>
//                 <Link to='/mypage'>Mypage</Link>
//             </div>
//             <div style={{border:'1px solid black',display:'inline-block'}}>
//                 <Link to='/cart'>Cart</Link>
//             </div>
      
//             <Routes>
//                 <Route path='/' element={<h2 style={{backgroundColor:'lightblue'}}>Main</h2>}></Route>
//                 <Route path='/info' element={<h1 style={{backgroundColor:'lightblue'}}>info 공간입니다.</h1>}></Route>
//                 <Route path='/mypage' element={<h1 style={{backgroundColor:'lightblue'}}>mypage 공간입니다.</h1>}></Route>
//                 <Route path='/cart' element={<h1 style={{backgroundColor:'lightblue'}}>cart 공간입니다.</h1>}></Route>
//                 <Route path="*" element={<div><h1>잘못된 경로입니다. 주소를 확인하세요.</h1></div>}></Route>
//             </Routes>
            
//         </div>
//     )
// }
export default Practice06;