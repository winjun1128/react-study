//arr_func.js

//Javascript 에서 배열에 관련되어 사용하는 함수

let arr = [10,20,30,40];
console.log(arr);
// 1) forEach 함수
arr.forEach(()=>{
    console.log('forEach 반복');
})
arr.forEach((value)=>{
    console.log('forEach 반복 : '+value);
})

//2) map 함수 : 반복, return 가능
arr.map(()=>{           //배열의 길이 단순 반복
    console.log('map 반복');
})
arr.map((item)=>{       //item 매개변수에 arr 배열에 있는 값을 순차적으로 주입
    console.log('map 반복'+item);
})
arr.map((item,index)=>{     //item: 배열에 있는 값, index : 해당 순서 인덱스 주입
    console.log('map 반복>'+item+ ' 인덱스>'+index+' 배열[index]'+arr[index]);
})

//[10,20,30,40] -> [99,99,99,99]
let mapResult1 =  arr.map(()=>{
                        return 99;
                    })
console.log(mapResult1);                   

let mapResult2 = arr.map((item)=>{
                        console.log(item);
                    })
console.log(mapResult2);  //map에 return 이 없음

//[10,20,30,40] -> [0,0,0,0]
let mapResult3 = arr.map((item)=>{
                    return item + 100;
                })
console.log(mapResult3);

let mapResult4 = arr.map((item)=>{
                    return "가지고 있는 값은 : " + item + '입니다';
                })
console.log(mapResult4);

let menuArr = ['김밥','돈까스','우동'];
let mapResult5 = menuArr.map((item)=>{
            return '<p>' + item + '</p>';
        })
console.log(mapResult5);
                            // ()=>code    ()=>{ return code; }
let mapResult6 = menuArr.map((item)=>'<p>' + item + '</p>');
console.log(mapResult6);

// 3) filter

// 4) find

// 5) findIndex