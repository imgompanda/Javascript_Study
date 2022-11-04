const h1 = document.querySelector(".hello h1");

// querySelector는 element를 CSS 방식으로 검색할 수 있다

// - getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
// - getElementsByTagName() : name을 할당할 수 있음(array를 반환)
// - querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
// 단 하나의 element를 return해줌
// ⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
// - 첫번째 element만 가져옴
// - 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
// ⇒ 세개의 h1이 들어있는 array를 가져다 줌
// - querySelector("#hello"); 와 getElementById("hello"); 는 같은 일을 하는 것임
// 하지만 후자는 하위요소 가져오는 것을 못하므로 전자만 쓸거다

// chapter.event

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone :(";
}

h1.onclick = handleTitleClick; // 이거랑 아래랑 똑같은 표현이다. 취향차이
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// title.addEventListener("liten하고싶은 event", event가 발생하면 호출할 fucntion);

// - 지금 js파일이 있기 때문에 js를 통해 html의 내용을 가져올 수 있는 거임
// - document가 html이 js파일을 load하기 때문에 존재 → 그 다음에 browser가 우리가 document에 접근할 수 있게 해줌
// - element의 내부를 보고 싶으면 console.dir()
// 기본적으로 object로 표시한 element를 보여줌(전부 js object임)
// 그 element 중 앞에 on이 붙은 것들은 event임
// - event: 어떤 행위를 하는 것
// 모든 event는 js가 listen할 수 있음
// - eventListener : event를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
// - title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함

// const title = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
// title.style.color = "blue";
// }
// title.addEventListener("click",handleTitleClick);
//click하면 handleTitleClick이라는 function이 동작하길 원함
//그래서 handle~ 함수에 () 를 안넣은 것임
//즉, js가 대신 실행시켜주길 바라는 것임!

// - function이 js에게 넘겨주고 유저가 title을 click할 경우에 js가 실행버튼을 대신 눌러주길 바라는 것임( 직접 handleTitleClick(); 이렇게 하는 것이 아니라)
// - 함수에서 () 이 두 괄호를 추가함으로써 실행버튼을 누를 수 있는 거임

// chapter. more events

function handleWindowResize() {
  document.body.style.backgroundColor = "black";
  h1.innerText = "oh!";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOff() {
  alert("SoS no WIFI!");
}

function handleWindowOn() {
  alert("Oh Yas!");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOff);
window.addEventListener("online", handleWindowOn);

// document의 body,head,title 이런것들은 중요하기 때문에
// document.body.style~의 명령이 허용되지만, div같은것들은 호출이 안됨
// 나머지 element들은 querySelector나 getElementById로 불러와야됨!!!!!!!

// title.onclick = handleMouseEnter;
// title.addEventListener(“mouseenter” , handleMouseEnter);

// 위에 두 코드는 동일하나 addEventListener를 선호하는 이유는
// removeEventListener을 통해서 event listener을 제거할수있기 때문이다.

// document에서 body,head,title 은 중요해서 언제든
// ex) document.body 로 가져올수있지만
// div나 h1 등 element 들은 querySelector getElementById등으로 찾아야한다.
// ex) document.querySelector(“h1”);

// window는 기본제공
// function handleWindowResize(){
// document.body.style.backgroundColor = “tomato”;
// }
// function handleWindowCopy(){
// alert(“copier”);
// }

// window.addEventListener(“resize”, handleWindowResize);
// window.addEventListener(“copy”, handleWindowCopy);
