(function (window, document) { // 마지막 줄의 인수를 전달
    'use strict'; // 이 범위 안에는 js 문법을 이용해 작성하겠다는 뜻
    // 변수는 요소를 담고 있기 때문에 $를 붙임
    const $toggles = document.querySelectorAll('.toggle'); // toggle클래스를 가진 요소들을 전부 찾음 -> 유사 배열에 저장
    const $toggleBtn = document.getElementById('toggle-btn'); // toggle-btn 아이디를 가진 요소들을 전부 찾음
    
    $toggleBtn.addEventListener('click', function () { //toggle버튼을 클릭(이벤트)했을 때
      toggleElements(); //on 클래스 부여하는 함수
    }); 
  
    window.addEventListener('resize', function () {  //브라우저 크기가 바뀔 때
      if (window.innerWidth > 1024) { //조절된 브라우저 크기가 1024보다 크면 
        offElements(); //toggle을 꺼주는 함수 실행
      }
    });
  
    function toggleElements() { 
      [].forEach.call($toggles, function (toggle) { //배열을 foreach로 반복 (유사배열을 연결), 반복될 toggle 요소들을 toggle이라는 이름으로 정의
        toggle.classList.toggle('on'); //toggle 요소들의 on이라는 클래스를 toggle 하겠다. 
      });
    }
  
    function offElements() { // toggle을 꺼주는 함수
      [].forEach.call($toggles, function (toggle) {
        toggle.classList.remove('on'); // 모든 toggle 요소에 들어있는 on클래스를 지운다.
      });
    }
  })(window, document); // 여기까지가 즉시 실행함수