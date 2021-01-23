const showTab = (selector) => {
  console.log(selector);

  /* 1. タブの選択状態のリセット */
  $('.tabs-menu > div').removeClass('active');
  $('.tabs-content > div').hide();

  /* 2. 選択されたタブの表示 */
  if (selector == 'tab-menu-a') {
    $('#tab-menu-a')
      .addClass('active');
    $('#tabs-a').show();
  } else if (selector == 'tab-menu-b') {
    $('#tab-menu-b')
      .addClass('active');
    $('#tabs-b').show();
  } else if (selector == 'tab-menu-c') {
    $('#tab-menu-c')
      .addClass('active');
    $('#tabs-c').show();
  }
};

// タブがクリックされたらコンテンツを表示
$('.tabs-menu div').on('click', (e) => {
  const selector = $(e.target).attr('id');
  showTab(selector);
});

// 初期状態として1番目のタブを表示
showTab('tab-menu-a');