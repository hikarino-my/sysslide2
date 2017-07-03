//idがaのものを取ってくる(返ってくる値は配列)
var a=document.querySelectorAll("#a");
//classがbのものを取ってくる
var b=document.querySelectorAll(".b");
//何が取れたかな?
console.log(a);
//取ってきたもののタグの中身を書き換え
a[0].innerHTML="操作できました";
