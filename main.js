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

// $('.my-click').on('click', { test: 'テストデータ' }, (e) => {
//   console.log('追加したデータ：', e.data.test);
// }); //e.dataで渡されたデータを取得できる

// -------------------------------------------------------

// 要素の表示・非表示
// $('.box').hide();
// $('.box').show();

// $('.my-button').on('click', () => {
//   $('.box').toggle();
// }); //表示・非表示の切替をtoggleメソッドで


// -------------------------------------------------------
// アニメーション

// -------------------------------------------------------
// フェードイン・フェードアウト

// const $box = $('.box');
// // 何度も同じ要素を使用する場合は変数に代入し、
// // ①コードの分かりやすさ、②管理のしやすさ、③処理負担の軽減を実現

// $('.my-button-in').on('click', () => {
//   $box.fadeIn();
// });

// $('.my-button-out').on('click', () => {
//   $box.fadeOut();
// });

// -------------------------------------------------------
// スライドでの表示・非表示

// const $box = $('.box');

// $('.my-button-in').on('click', () => {
//   $box.slideDown();
// });

// $('.my-button-out').on('click', () => {
//   $box.slideUp();
// });

// -------------------------------------------------------
// アニメーションのカスタマイズ

// const $box = $('.box');
// const duration = 1000;

// $('.my-button-anim').on('click', () => {
//   $box.animate(
//     {
//       width: '200px',
//       left: '200px',
//     },
//     duration,
//   );
// });

// $('.my-button-re').on('click', () => {
//   $box.animate(
//     {
//       width: '60px',
//       left: '0px',
//     },
//     duration,
//   );
// });


// -------------------------------------------------------
// 各機能

// -------------------------------------------------------
// ページトップへ戻るボタン

// ボタンの表示／非表示を切り替える関数
// const updateButton = () => {
//   if ($(window).scrollTop() >= 300) {
//     // 300px以上スクロールされた
//     // ボタンを表示
//     $('.back-to-top').fadeIn();
//   } else {
//     // ボタンを非表示
//     $('.back-to-top').fadeOut();
//   }
// };

// // スクロールされる度にupdateButtonを実行
// $(window).on('scroll', updateButton);

// // ボタンをクリックしたらページトップにスクロールする
// $('.back-to-top').on('click', (e) => {
//   // ボタンのhrefに遷移しない
//   e.preventDefault();

//   // 600ミリ秒かけてトップに戻る
//   $('html, body').animate({ scrollTop: 0 }, 600); //animateメソッドによるCSSプロパティの指定
// });

// // ページの途中でリロード（再読み込み）された場合でも、ボタンが表示されるようにする
// updateButton();

// -------------------------------------------------------
// タブ

// /**
//  * selectorに該当するタブを表示する関数
//  */
// const showTab = (selector) => {
//   // 引数selectorの中身をコンソールで確認する
//   console.log(selector);

//   /* 1. タブの選択状態のリセット */

//   // いったん、すべての.tabs-menu > liからactiveクラスを削除する
//   $('.tabs-menu > li').removeClass('active');

//   // いったん、すべての.tabs-content > sectionを非表示にする
//   $('.tabs-content > section').hide();

//   /* 2. 選択されたタブの表示 */

//   // .tabs-menu liのうち、selectorに該当するものにだけactiveクラスを付ける
//   $(`.tabs-menu a[href="${selector}"]`)
//     .parent('li')
//     .addClass('active');

//   // .tabs-content > sectionのうち、selectorに該当するものだけを表示する
//   $(selector).show();
// };

// // タブがクリックされたらコンテンツを表示
// $('.tabs-menu a').on('click', (e) => {
//   // hrefへのページ遷移を止める
//   e.preventDefault();

//   // hrefの値を受け取った後、showTab()関数に渡す。e.targetはクリックされたタブ（.tabs-menu a）を表す
//   const selector = $(e.target).attr('href');
//   showTab(selector);
// });

// // 初期状態として1番目のタブを表示
// showTab('#tabs-1');

// -------------------------------------------------------
// アコディオンメニュー

// // アコーディオンのタイトルがクリックされたら
// $('.accordion-title a').on('click', (e) => {
//   // hrefにページ遷移しない
//   e.preventDefault();

//   // 同じsection内の.accordion-contentを選択
//   const content = $(e.target)
//     .closest('section')
//     .find('.accordion-content');

//   // .accordion-contentが非表示の場合は
//   if (!content.is(':visible')) {
//     // 表示中のコンテンツを閉じる
//     $('.accordion-content:visible').slideUp();

//     // クリックされたコンテンツを表示
//     content.slideDown();
//   }
// });

// -------------------------------------------------------
// スライダー

// // スライド1枚あたりの幅（px）
// const slideWidth = 400;

// // 現在表示中のスライドが何番目か（0から数え始める）
// let currentSlide = 0;

// // スライドの全枚数
// let numSlides;

// // index（0から始まる）番目のスライドを表示する関数
// const showSlide = (index) => {
//   // 1番目のスライドでは左矢印を非表示
//   if (index === 0) {
//     $('.carousel-control-prev').hide();
//   } else {
//     $('.carousel-control-prev').show();
//   }

//   // 最後のスライドでは右矢印を非表示
//   if (index === numSlides - 1) {
//     $('.carousel-control-next').hide();
//   } else {
//     $('.carousel-control-next').show();
//   }

//   // 実行中のアニメーションがあればキャンセルした後、
//   // leftを変化させるアニメーションを開始
//   $('.slides')
//     .stop()
//     .animate(
//       {
//        left: `${-slideWidth * index}px`,
//       },
//       600,
//     );
// };

// // 左矢印がクリックされたら1つ前のスライドを表示
// $('.carousel-control-prev').on('click', (e) => {
//   e.preventDefault();

//   currentSlide -= 1;
//   showSlide(currentSlide);
// });

// // 右矢印がクリックされたら1つ後のスライドを表示
// $('.carousel-control-next').on('click', (e) => {
//   e.preventDefault();

//   currentSlide += 1;
//   showSlide(currentSlide);
// });

// // スライドが全部で何枚あるか取得
// numSlides = $('.slides > li').length;

// // 最初のスライドを表示
// showSlide(currentSlide);

// -------------------------------------------------------
// ライトボックス

// // 画像ロード中の表示エリアのサイズ（px）
// const initialSize = 60;

// // 拡大表示をウインドウの端から何px空けるか
// const padding = 100;

// // 各アニメーションの時間（ミリ秒）
// const animDuration = 300;

// // img要素を表示する
// const showImage = (img) => {
//   const $img = $(img);

//   // ウインドウの幅と高さを取得
//   const windowWidth = $(window).width();
//   const windowHeight = $(window).height();

//   // ウインドウのアスペクト比を計算
//   const windowAspectRatio = windowWidth / windowHeight;
//   // 画像のアスペクト比を計算
//   const imageAspectRatio = img.width / img.height;

//   // ウインドウと画像のどちらが横に長いかによって
//   // 表示サイズを決める
//   let dispWidth;
//   let dispHeight;
//   if (windowAspectRatio > imageAspectRatio) {
//     // 画像の方が縦に長い場合
//     dispHeight = windowHeight - padding;
//     dispWidth = dispHeight * imageAspectRatio;
//   } else {
//     // 画像の方が横に長い場合
//     dispWidth = windowWidth - padding;
//     dispHeight = dispWidth / imageAspectRatio;
//   }

//   // 画像の表示サイズをセット
//   $img.css({
//     width: `${dispWidth}px`,
//     height: `${dispHeight}px`,
//     display: 'none',
//   });

//   // img要素を.popup-content内に挿入
//   $('.popup-content').html(img);

//   // 表示エリアの拡大アニメーション
//   $('.popup-content').animate(
//     {
//       width: `${dispWidth}px`,
//       height: `${dispHeight}px`,
//       // 下記2つは上下左右中央に置くために必要
//       'margin-left': `${-dispWidth / 2}px`,
//       'margin-top': `${-dispHeight / 2}px`,
//     },
//     animDuration,
//     'swing',
//     () => {
//       // 拡大アニメーションが終わったら画像をフェードイン
//       $img.fadeIn(animDuration);
//     },
//   );
// };

// // imageUrlの画像をポップアップで表示する関数
// const showPopup = (imageUrl) => {
//   // 前回挿入したimg要素を削除
//   $('.popup-content').html('');

//   // オーバーレイ（黒背景と画像表示エリア）をフェードイン
//   $('.overlay').fadeIn(animDuration);

//   // 画像表示エリアを小さな四角にする
//   $('.popup-content').css({
//     width: `${initialSize}px`,
//     height: `${initialSize}px`,
//     // 下記2つは上下左右中央に置くために必要
//     'margin-left': `${-initialSize / 2}px`,
//     'margin-top': `${-initialSize / 2}px`,
//   });

//   // img要素を作成して拡大画像をロードする
//   const img = new Image();
//   img.onload = () => {
//     // 画像のロードが終わるとここが実行される
//     showImage(img);
//   };
//   img.src = imageUrl;
// };

// // ポップアップを閉じる
// const closePopup = () => {
//   $('.overlay').fadeOut(animDuration);
// };

// // .popup要素がクリックされたらポップアップを表示
// $('.popup').on('click', (e) => {
//   e.preventDefault();
//   const imageUrl = $(e.currentTarget).attr('href');
//   showPopup(imageUrl);
// });

// // オーバーレイがクリックされたらポップアップを閉じる
// $('.overlay').on('click', (e) => {
//   e.preventDefault();
//   closePopup();
// });

// -------------------------------------------------------
// パララックス

// 背景画像のスクロール速度。数字が小さいほど速い。
const speed = 3;
const $window = $(window);

// スライド1枚の高さを保持する変数
let slideHeight;

// パララックスを適用する関数
const showParallax = () => {
  const scrollTop = $window.scrollTop();

  // 各スライドの背景位置をスクロールに合わせて変える
  $('.parallax-section-1').css({
    'background-position': `center ${Math.round((0 - scrollTop) / speed)}px`,
  });
  $('.parallax-section-2').css({
    'background-position': `center ${Math.round((slideHeight - scrollTop) / speed)}px`,
  });
  $('.parallax-section-3').css({
    'background-position': `center ${Math.round((slideHeight * 2 - scrollTop) / speed)}px`,
  });
  $('.parallax-section-4').css({
    'background-position': `center ${Math.round((slideHeight * 3 - scrollTop) / speed)}px`,
  });
};

// パララックスの初期設定をする関数
const initParallax = () => {
  // ウインドウの高さをスライド1枚分の高さとする
  slideHeight = $window.height();
  // 表示を更新
  showParallax();
};

// スクロールのたびにshowParallax関数を呼ぶ
$window.on('scroll', showParallax);

$window.on('resize', () => {
  // ウインドウがリサイズされるとここが実行される
  initParallax();
});

initParallax();
