// 외부스크립트 slide.js

// 1. 변수선언
const slide = document.querySelector('.slide');
// 상품목록의 부모요소
const slide_img = document.querySelectorAll('.slide li');
// 상품목록
const p_btn = document.getElementById('l_btn');
// 이전버튼
const n_btn = document.getElementById('r_btn');
// 다음버튼
const img_n = slide_img.length; //li의 개수를 변수에 담음
console.log(img_n);

const stop_btn = document.querySelector('.fa-stop');
const play_btn = document.querySelector('.fa-play');

const img_w = 360; //이미지 너비
const m = 60; //여백
const s_count = 3; //한 페이지에 보여질 이미지 개수

let count = 0; //이전, 다음 클릭시 사용할 변수값 설정

slide.style.width = (img_w+m)*img_n-m+'px';

// 왼쪽으로 움직이는 슬라이드 함수 작성하기
function mslide(n){
    slide.style.left = (img_w+m)*-n+'px';
    count=n;
    console.log(count);
    console.log(slide.style.left);
}
p_btn.addEventListener('click', function(){
    if(count>0){ //만약에 카운트 값이 0보다 크면
        mslide(count-1); //카운트값에 1을 빼서 mslide에 넘긴다
    }else{ 
        mslide(img_n-s_count); //li개수 - 3
    } //2,1,0 순으로 반복
});
n_btn.addEventListener('click', function(){
    if(count<img_n-s_count){ //만약에 카운트 값이 2보다 작으면
        mslide(count+1); //카운트값에 1을 더해서 mslide에 넘긴다
    }else{ //그렇지 않다면
        mslide(0); //mslide에 0을 대입함.
    }
});

//3초마다 자동으로 슬라이드 움직이게 하기
//시각객체 = setInterval(함수명, 반복시간)


// setInterval은 JavaScript에서 사용되는 함수로, 일정한 시간 간격으로 함수를 주기적으로 실행하는 데에 활용
let Timer = setInterval(function(){
    console.log('반복호출실행');
    if(count==2){
        count=0;
    }else{
        count++;
    }
    mslide(count);
    //mslide에 count값을 넘겨서 자동으로 움직이게 한다.
},3000);

// 스탑 버튼 클릭시 시간을 제거하여 멈추게함
stop_btn.addEventListener('click',function(){
    clearInterval(Timer);
});

play_btn.addEventListener('click',function(e){
    //기존 자동재생이 되고 있다면 제거하고
    clearInterval(Timer);
    // 3초마다 움직이게 함
    Timer = setInterval(function(){
        if(count==2){
            count=0;
        }else{
            count++;
        }
        mslide(count);
        //mslide에 count값을 넘겨서 자동으로 움직이게 한다.
    }, 3000);
    e.preventDefault(); //이벤트 중복현상을 제거한다
});