###システム局外講習会へようこそ!

*by KF68syz(システム局長補佐)*
---
<div style="text-align: left;">
この講習会の目的
</div>
- JavaScriptへの入門(第一回)
- JavaScriptで遊ぶ(第二回) |
- Advanced Queryを書けるようになる(第三回) |
---?code=first.html
##html導入
- wiki記法をめんどくさくしたもの(原型)
- 全てのwebページはこれを表示している
---?code=first.html
<dl>
  <dt>タグ</dt>
  <dd>ページの中の一つの要素を囲う</dd>
</dl>
---
<dl>
  <dt>pタグ</dt>
  <dd>段落</dd>
  <dt>h1タグなど</dt>
  <dd>見出し(h1,h2,h3,h4,h5,h6の順に小さくなる)</dd>
  <dt>divタグ</dt>
  <dd>とりあえず要素を作るときに使う(デザインを指定するときに使ったりする)</dd>
</dl>
---
##css導入
- デザインを指定する
- 背景色、要素の位置、見え方などを指定できる
- styleタグの中に書く
---?code=style.css
---?code=id.html
<dl>
  <dt>id属性</dt>
  <dd>要素に固有の文字列</dd>
  <dt>class属性</dt>
  <dd>要素をグループにする(複数要素に指定可)</dd>
</dl>
---
##JavaScriptでこれらを操作
- 1.idやclassで要素を特定して取得
- 2.その要素のcssや要素の中のテキスト部分を操作
- 3.結果、HTMLが書き換わる
---?code=getelement.html
<dl>
  <dt>要素を取得</dt>
  <dd>基本的な電卓の演算はある</dd>
</dl>
---?code=if.js
- 条件分岐
  - == 等しい
  - 「<」 「>」 大なり 小なり
  - 「>=」 大なりイコール
---?code=for.js
- ループ
  -　forループ
    - iは何番目のループかを格納
    - i=0は初期値
    - i==0から、i<10までループする
    - i++はi=i+1の略
---?code=function.js
- 関数
  - 処理を保存
  - 引数という値を与えることができる
---
#以上
