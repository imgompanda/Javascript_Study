const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color; // 바뀔 수 없음
  let newColor; // 바뀔 수 있음
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
