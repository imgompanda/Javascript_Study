const h1 = document.querySelector("div.hello:first-child h1");

/* function handleTitleClick() {
  const clickedClass = "clicked"; // 실수를 줄이기 위해 변수를 지정한다.
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick); */

// classLIst = class들의 목록으로 작업할 수 있게 허용한다.

// toggle을 추가로 사용한 아래 코드랑 위의 코드랑 기능은 똑같은데 훨씬 짧다.
function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

/* toggle은 토큰이 존재하면 토큰제거
토큰존재 하지않으면 토큰 추가

ex)
toggle은 h1의 classList에 clicked라는 class가 이미있는지 확인하여
만약있다면 toggle 이 clicked를 제거해준다
만약 classname이 존재하지 않는다면 toggle은 classname 추가 */
