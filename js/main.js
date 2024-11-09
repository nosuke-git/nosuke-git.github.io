"use strict";

/*---------- GSAP 設定 ----------*/

//存在しない要素を取得しようとするときに出るエラーを非表示にする
gsap.config({
  nullTargetWarn: false,
});

/*---------- ハンバーガーメニュー ----------*/
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
//const body = document.querySelector(".js_body");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");
});

document.querySelectorAll(".js_navigation a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    navigation.classList.remove("is-active");
  });
});

/*---------- スライドイン ----------*/
// gsap.timeline()
// 	.from('.js_copy', {
// 		duration: 0.6,
// 		autoAlpha: 0,
// 		x: -100,
// 	})
// 	.from('.js_sub-copy', {
// 		duration: 0.6,
// 		autoAlpha: 0,
// 		x: -100,
// 	});

/*---------- teamスライドイン ----------*/
gsap.from(".js_slidein", {
  y: 100,
  autoAlpha: 0,
  duration: 1, //アニメーションの長さ
  ease: "Power4.inOut", //アニメーションの変化率
  scrollTrigger: {
    trigger: ".js_slidein-trigger",
    start: "top center",
    // 発火するスクロール位置や終了位置をマーカーする
    // markers: true,
  },
  stagger: {
    // each: 指定した時間が経過した時に次の要素のアニメーションを開始する
    each: 0.6,
    // amount: アニメーションの総時間（eachかamountのどちらかを指定する）
    // amount: 1,
    from: "end",
    //start：1番目から始める
    // center： 中央から始める
    // edges： 両端から始める
    // random： ランダムに始める
    // end： 最後から始める
  },
  onComplete: function () {
    // アニメーション完了後、クラスを追加して::afterを表示
    document.querySelector(".top_team_list:nth-child(1)").classList.add("show-after");
  },
});

/*---------- serviceスライドイン ----------*/
const items = document.querySelectorAll(".js_h-slide");

// forEach文のコールバック関数
// 対象要素.forEach(function (value, index,array) {
// });
// value： 配列データの値
// index： 配列のインデックス番号→省略可能
// array： 現在処理している配列→省略可能

// 三項演算子の書き方
// "条件" ? "条件の内容がtrueになる場合の値" : "条件の内容がfalseになる場合の値";

items.forEach(function (item) {
  gsap.from(item, {
    // インデックス番号に+1して、2で割った時にあまりが0だったら100%、でなければ-100%に配置する
    // x: (idx + 1) % 2 == 0 ? "100%" : "-100%",
    y : "50%",
    autoAlpha: 0,
    duration: 2, //アニメーションの長さ
    ease: "Power4.inOut",
    scrollTrigger: {
      // item.parentNode: itemの親要素
      trigger: item.parentNode,
      start: "top 70%",
      // 発火するスクロール位置や終了位置をマーカーする
      // markers: true,
    },
  });
});

//別解答
// const items = document.querySelectorAll(".js_h-slide");

// items.forEach(function (item, idx) {

//   gsap.from(item, {
//     インデックス番号に+1して、2で割った時にあまりが0だったら100%、でなければ-100%に配置する
//     x: function () {
//       if ((idx + 1) % 2 == 0) {
//         return "100%";
//       } else {
//         return "-100%";
//       }
//     },
//     autoAlpha: 0,
//     ease: "Power4.inOut",
//     scrollTrigger: {
//       item.parentNode: itemの親要素
//       trigger: item.parentNode,
//       start: "top center",
//        発火するスクロール位置や終了位置をマーカーする
//        markers: true,
//     },
//   });
// });

/*---------- アコーディオンメニュー ----------*/
const faq = document.querySelectorAll(".js_faq");

faq.forEach(function(element) {
  const faqA = element.querySelector(".js_faq-a");

  element.addEventListener("click", function() {
    if (element.classList.contains("is-active")) {
      // アコーディオンを閉じるときの処理
      // アイコン操作用クラスを切り替える(クラスを取り除く)
      element.classList.toggle("is-active");
      element.querySelector(".js_faq_mark").classList.toggle("is-open");

      // アニメーション実行
      closingAnim(faqA);
    } else {
      // アコーディオンを開くときの処理
      // アイコン操作用クラスを切り替える(クラスを付与)
      element.classList.toggle("is-active");
      element.querySelector(".js_faq_mark").classList.toggle("is-open");

      // アニメーション実行
      openingAnim(faqA);
    }
  });
});

const closingAnim = function(content) {
  gsap.to(content, {
    height: 0,
    opacity: 0,
    duration: 0.4,
    ease: "Power4.inOut",
  });
};

const openingAnim = function(content) {
  gsap.fromTo(
    content, {
      height: 0,
      opacity: 0,
    }, {
      height: "auto",
      opacity: 1,
      duration: 0.4,
      ease: "Power4.inOut",
    }
  );
};





/*---------- カルーセルパネル ----------*/
const swiper = new Swiper(".js_success-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1088: {
      slidesPerView: 3,
    },
  },
});

/*---------- スライドショー ----------*/

const slideshow = new Swiper(".js_slideshow", {
  speed: 1200,
  effect: "fade",
  autoplay: {
    delay: 1600,
    disableOnInteraction: false,
  },
});

/*---------- ヘッダー表示 ----------*/

(function() {
  const fh = document.querySelector(".js_fixed-header");
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      fh.classList.add('is-show');
    } else {
      fh.classList.remove('is-show');
    }
  });
}());

/*---------- border表示 ----------*/

document.addEventListener("DOMContentLoaded", function () {
  const borders = document.querySelectorAll(".js_border"); // すべての.js_border要素を取得

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-active"); // ビューポートに入ったらクラスを追加
        observer.unobserve(entry.target); // 一度だけ実行するために監視を解除
      }
    });
  });

  borders.forEach((js_border) => observer.observe(js_border)); // 各.js_border要素を監視
});


/*---------- リストホバー ----------*/

document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".top_team_list");

  listItems.forEach((item, index) => {
    if (index !== 0) { // 1番目以外の項目に対して
      item.addEventListener("mouseenter", () => {

        // 1番目のリスト項目の::afterを非表示
        listItems[0].classList.remove("show-after");
        listItems[0].classList.add("hide-after");

        // ホバー中のリスト項目の::afterを表示
        item.classList.add("show-after");
      });

      item.addEventListener("mouseleave", () => {
        // 1番目のリスト項目の::afterを再表示
        listItems[0].classList.remove("hide-after");
        listItems[0].classList.add("show-after");

        // ホバーが外れたリスト項目の::afterを非表示
        item.classList.remove("show-after");
      });
    }
  });
});

/*---------- テキストアニメーション ----------*/



document.addEventListener("DOMContentLoaded", function () {
  const textElements = document.querySelectorAll(".js-text");

  textElements.forEach((textElement) => {
    // テキスト内容を取得
    let textContent = textElement.innerHTML;

    // 英語の特定の単語の後に改行を挿入
    textContent = textContent.replace("unique.", "unique.<br class=u_lg-up />");
    textContent = textContent.replace("world!", "world!<br>");
    
    // 日本語の特定の単語の後に改行を挿入（例：「ユニークであること」）
    textContent = textContent.replace("ユニークであること", "ユニークであること<br>");
    textContent = textContent.replace("視覚化します。", "視覚化します。<br>");

    // 文を分割して <span> タグで囲む
    const sentences = textContent.split(/(?<=[.!?。！？])\s*/);
    textElement.innerHTML = sentences
      .map(sentence => `<span>${sentence.trim()}</span>`)
      .join(" ");

    // GSAPアニメーションを適用
    gsap.to(textElement.querySelectorAll("span"), {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "Power4.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: textElement,
        start: "center 30%",
      },
    });
  });
});

