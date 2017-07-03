//pタグ取得
var el = document.querySelectorAll("p");
//クリック時の動作を定義
el.addEventListener("click", onClick, false);
function onClick(e){
  //クリックされた要素の中身などを取得できる
  console.log(e.target.innerHTML);
}
