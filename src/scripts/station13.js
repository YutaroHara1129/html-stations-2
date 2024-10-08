function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const text = document.getElementById("text");
  const checkbox = document.querySelector("#check");
  if (checkbox.checked) {
    text.style.backgroundColor = "red";
  }
  else {
    text.style.backgroundColor = "white";
  }
}
