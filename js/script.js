// ハンバーガーメニューをクリックした時
$('.hamburger').on('click', function () {
  // ハンバーガーメニューの共通処理を呼び出す
  hamburger();
});
// メニューのリンクをクリックした時
$('.header_upper a').on('click', function () {
  // ハンバーガーメニューの共通処理を呼び出す
  hamburger();
});
/*=================================================
ハンバーガ―メニュー共通処理
===================================================*/
// ハンバーガーメニューをクリックした時とメニュー内のリンクをクリックした時の
// 処理が同じなので処理を共通化する
function hamburger() {
  // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる
  $('.hamburger').toggleClass('active');
  if ($('.hamburger').hasClass('active')) {
    // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
    $('.header_upper').addClass('active');
  } else {
    // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
    $('.header_upper').removeClass('active');
  }
}

// ====================================
//bottom_logo の表示、非表示

//リンク先のidまでスムーススクロール
$('.header_list li a, .scroll').click //対象になるリンクを指定
  (function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top;
    $('body,html').animate({ scrollTop: pos }, 1000);
    return false;
  });

window.onscroll = function () {
  var check = window.pageYOffset;       //現在のスクロール地点
  var docHeight = $(document).height();   //ドキュメントの高さ
  var dispHeight = $(window).height();    //表示領域の高さ

  if (check > docHeight - dispHeight - 300) {   //判別式 500はフッターからの距離です（ここはサイトのフッターに合わせて変更しましょう）
    $('.bottom_logo').removeClass('UpMove');	//.header_menuにUpMoveというクラス名を除き
    $('.bottom_logo').addClass('DownMove');//.header_menuにDownMoveのクラス名を追加

  } else {
    $('.bottom_logo').removeClass('DownMove');//.header_menuにDownMoveというクラス名を除き
    $('.bottom_logo').addClass('UpMove');//.header_menuにUpMoveのクラス名を追加
  }
};
// ===========================================
//ローディングアニメ

$(window).on("load", function () {
  $(".loader").delay(2000).fadeOut(1000);
  $('.hero_logo .logo_1').delay(3000).fadeIn(2000);
  $('.loader_container').delay(4000).fadeOut(2000);
  $('.hero_logo .logo_1').delay(4000).fadeOut(2000);
  $('.hero_logo .logo_2').delay(4000).fadeIn(2000);
});

window.addEventListener('load', function () {
  deSVG('.desvg', true);
});
//====================================
//スクロールに合わせて下線表示

window.onscroll = function () {
  var concept = $('#concept').offset().top;
  var staff = $('#staff').offset().top;
  var salon = $('#salon').offset().top;
  var collection = $('#collection').offset().top;
  var access = $('#access').offset().top;
  var scroll = $(window).scrollTop();
  if (concept > scroll) {
    $('.hl_concept').removeClass('line');	//#headerにUpMoveというクラス名を除き
  } else if (concept <= scroll && scroll < staff) {
    $('.hl_concept').addClass('line');//#headerにDownMoveのクラス名を追加
    $('.hl_staff').removeClass('line');
  } else if (staff <= scroll && scroll < salon) {
    $('.hl_concept').removeClass('line');
    $('.hl_staff').addClass('line');
    $('.hl_salon').removeClass('line');
  } else if (salon <= scroll && scroll < collection) {
    $('.hl_staff').removeClass('line');
    $('.hl_salon').addClass('line');
    $('.hl_collection').removeClass('line');
  } else if (collection <= scroll && scroll < access) {
    $('.hl_salon').removeClass('line');
    $('.hl_collection').addClass('line');
    $('.hl_access').removeClass('line');
  } else {
    $('.hl_collection').removeClass('line');
    $('.hl_access').addClass('line');
  }
}

/*======================
表示アニメーション
======================= */
$('.concept_bottom_text h1').on('inview', function () {
  //表示領域に入った時
  $(this).addClass('slideup');
});

$('.concept_bottom_text p').on('inview', function () {
  //表示領域に入った時
  $(this).addClass('slideup');
});




$('.ft1').on('inview', function () {
  $(this).delay(1000).queue(function (next) {
    $(this).addClass('under_line');
    next();
  });
  $('.ft1 img').delay(1300).queue(function (next) {
    $(this).addClass('slideup');
    next();
  });
  $('.ftt1').delay(1400).queue(function (next) {
    $(this).addClass('slideup');
    next();
  });
});
$('.ft2').on('inview', function () {
  $(this).delay(1000).queue(function (next) {
    $(this).addClass('under_line');
    next();
  });
  $('.ft2 img').delay(1300).queue(function (next) {
    $(this).addClass('slideup');
    next();
  });
  $('.ftt2').delay(1400).queue(function (next) {
    $(this).addClass('slideup');
    next();
  });
});
$('.ft3').on('inview', function () {
  $(this).delay(1000).queue(function (next) {
    $(this).addClass('under_line');
    next();
  });
  $('.ft3 img').delay(1300).queue(function (next) {
    $(this).addClass('slideup');
    next();
  });
  $('.ftt3').delay(1400).queue(function (next) {
    $(this).addClass('slideup');
    next();
  });
});
$('.title_b').on('inview', function () {
  $(this).addClass('slideup');
});

/*=============
slick
==============*/
$('.slick').slick({
  infinite: true,
  speed: 200,
  // fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});;
