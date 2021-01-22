// DOM操作

// $('#box').text('Hello jQuery!');

// loadイベント（ページ内のすべての外部CSSや画像の読み込みが完了したタイミングで発生するイベント）
// $(window).on('load', () => $('#box').text('画像などの読み込みも完了しました！'));

// 要素の追加
// $('#box').append('<p>こんばんは</p>');

// // 要素の削除
// $('#box').remove();

// // フォームのデータ受けとり
// const value = $('#my-input').val();
// console.log(value);

// フォームの入力
// const value = 'こんにちは';
// $('#my-input').val(value);

// 属性値を取得
// const value = $('a').attr('href'); // 最初のa要素から、href属性の属性値を取得する
// console.log(value);

// 属性値の設定
// $('a').attr('href', 'new.html'); //一致した全ての属性に対し、設定される


// -------------------------------------------------------
// イベント
// （「イベントが発生したときに呼び出される関数」は「イベントハンドラ」と言う）

// -------------------------------------------------------
// マウスクリック処理

// $('.mylink').on('click', (e) => {
//   // hrefのリンク先に飛ばないようにする
//   e.preventDefault();

//   alert('どろん！');
// });

// -------------------------------------------------------
// クリックされた要素の取得

// $('.my-button').on('click', (e) => {
//   $(e.target) // targetというプロパティにより、イベント発生もとの要素にアクセスできる
//     .parent()
//     .css({ 'background-color': '#ff6666' });
// });

// -------------------------------------------------------
// マウスオーバー

// const onMouseenter = (e) => {
//   // マウスが乗った時の処理
//   $(e.target).css({
//     'background-color': '#ff9999',
//   });
// };
// const onMouseleave = (e) => {
//   // マウスが外れた時の処理
//   $(e.target).css({
//     'background-color': '#dddddd',
//   });
// };
// $('.box')
//   .on('mouseenter', onMouseenter)
//   .on('mouseleave', onMouseleave); //onMouseenter, onMouseleaveをそれぞれ設定

// -------------------------------------------------------
// キーボードの入力内容への処理

// $('.my-input').on('input', (e) => {
//   const value = $(e.target).val();
//   $('.box').text(value);
// });

// -------------------------------------------------------
// フォーム送信前のチェック

// $('.my-form').on('submit', (e) => {
//   // フォームが送信された時に実行される
//   const text1 = $('.text1').val();
//   const text2 = $('.text2').val();

//   if (text1 !== text2) {
//     // ページ遷移を止める
//     e.preventDefault();

//     $('.error').html('テキストが一致しません');
//   }
// });

// -------------------------------------------------------
// 後から追加した要素に対し、イベントハンドラを登録

// $('.child').on('click', () => {
//   console.log('.childのイベントハンドラ！');
// });

// // $('#parent').on('click', '.child', () => {
// //   console.log('.childのイベントハンドラ');
// // });

// const $newElement = $('<p>', {
//   class: 'child',
//   text: '追加した要素',
// }); //j_queryでのDOM要素の生成

// $newElement.on('click', () => {
//   console.log('追加した.childのイベントハンドラ');
// });

// // $('#parent').append('<p class="child">追加した要素</p>');

// $('#parent').append($newElement); //j_queryで生成したDOM要素の追加

// -------------------------------------------------------
// イベントハンドラにデータを渡す
// （イベントハンドラに渡されるイベントオブジェクトには、任意のデータを追加できる）

$('.my-click').on('click', { test: 'テストデータ' }, (e) => {
  console.log('追加したデータ：', e.data.test);
}); //e.dataで渡されたデータを取得できる

// -------------------------------------------------------

