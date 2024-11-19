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


/*---------- teamスライドイン ----------*/
gsap.from(".js_slidein", {
  y: 100,
  autoAlpha: 0,
  duration: 0.7, //アニメーションの長さ
  ease: "Power4.inOut", //アニメーションの変化率
  scrollTrigger: {
    trigger: ".js_slidein-trigger",
    start: "top 80%",
    // 発火するスクロール位置や終了位置をマーカーする
    // markers: true,
  },
  stagger: {
    // each: 指定した時間が経過した時に次の要素のアニメーションを開始する
    each: 0.1,
    // amount: アニメーションの総時間（eachかamountのどちらかを指定する）
    // amount: 1,
    from: "start",
    //start：1番目から始める
    // center： 中央から始める
    // edges： 両端から始める
    // random： ランダムに始める
    // end： 最後から始める
  },
  onComplete: function () {
    // アニメーション完了後、クラスを追加して::afterを表示
    document.querySelector(".top_team_member_img:nth-child(1)").classList.add("show-after");
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
    duration: 0.7, //アニメーションの長さ
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
  const memberItems = document.querySelectorAll(".top_team_member_img");


  listItems.forEach((item, index) => {
    if (index !== 0) { // 1番目以外の項目に対して
      item.addEventListener("mouseenter", () => {

        // 1番目のリスト項目の::afterを非表示
        memberItems[0].classList.remove("show-after");
        memberItems[0].classList.add("hide-after");

        // ホバー中のリスト項目の::afterを表示
        memberItems[index].classList.add("show-after");
      });

      item.addEventListener("mouseleave", () => {
        // 1番目のリスト項目の::afterを再表示
        memberItems[0].classList.remove("hide-after");
        memberItems[0].classList.add("show-after");

        // ホバーが外れたリスト項目の::afterを非表示
        memberItems[index].classList.remove("show-after");
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

    // 文を分割して <span> タグで囲む（空白を保持）
    const sentences = textContent.match(/[^.!?。！？/]*[.!?。！？/]+[\s]*|[^.!?。！？/]+/g);

    textElement.innerHTML = sentences
      .map(sentence => `<span>${sentence}</span>`)  // それぞれの文を <span> で囲む
      .join(""); // 改行なしで連結

    // GSAPアニメーションを適用
    gsap.fromTo(textElement.querySelectorAll("span"), {
      y: 10,  // 初期位置（少し下に設定）
      opacity: 0,  // 初期透明度
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "Power4.out",
      stagger: 0.1,  // 各文（span）のアニメーションに遅延を入れる
      scrollTrigger: {
        trigger: textElement,
        start: "top 80%",
      },
    });
  });
});




/*---------- テキストアニメーション ----------*/


document.addEventListener("DOMContentLoaded", function () {
  const textElements = document.querySelectorAll(".js-letter");

  textElements.forEach((textElement) => {
    let textContent = textElement.innerHTML;

    // 文字を一つずつ分割
    const letters = textContent.split('');
    
    // 各文字を <span> で囲んで再構築
    textElement.innerHTML = letters
      .map(letter => `<span>${letter}</span>`)
      .join('');

    // GSAPアニメーションを適用
    gsap.fromTo(textElement.querySelectorAll("span"), {
      opacity: 0,     // 初期透明度
      y: 20,          // 初期位置（少し下に設定）
    }, {
      opacity: 1,     // アニメーション後の透明度
      y: 0,           // アニメーション後の位置
      duration: 2,    // アニメーション時間
      ease: "Power4.out",  // イージング
      stagger: 0.05,  // 文字ごとに0.03秒ずつずらしてアニメーション
      scrollTrigger: {
        trigger: textElement,
        start: "top 80%",  // スクロールが開始する位置
        // end: "top 80%",
        // scrub: true,        // スクロール位置に合わせてアニメーション
      },
    });
  });
});


/*---------- テキストアニメーション 英語 ----------*/

document.addEventListener("DOMContentLoaded", function () {
  const textElements = document.querySelectorAll(".js-text-en");

  textElements.forEach((textElement) => {

    let textContent = textElement.innerHTML;

    // 半角スペースで分割
    const sentences = textContent.split(' ');

    textElement.innerHTML = sentences
      .map(sentence => `<span>${sentence.trim()}</span>`)
      .join(" ");  // 各単語を <span>で囲んで再構築

    // GSAPアニメーションを適用
    gsap.fromTo(textElement.querySelectorAll("span"),{
      y: 10, // 初期位置を少し下に設定（初期値）
      opacity: 0, // 初期の透明度
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "Power4.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: textElement,
        start: "top 80%",
      },
    });
  });
})



document.addEventListener("DOMContentLoaded", function() {
  // SVG内のすべてのpath要素を取得
  const paths = document.querySelectorAll(".svg-animation svg path");
  
  // GSAPでアニメーションを適用
  gsap.fromTo(paths, 
    {
      opacity: 0,  // 初期状態で文字は透明
      y: 20,      // 文字を左から少しずらしておく
    }, 
    {
      opacity: 1,  // アニメーション後に文字は完全に表示
      y: 0,        // 文字は元の位置に戻る
      duration: 2,  // 各文字のアニメーション時間
      stagger: {
        // each: 指定した時間が経過した時に次の要素のアニメーションを開始する
        each: 0.05,
        // amount: アニメーションの総時間（eachかamountのどちらかを指定する）
        // amount: 1,
        from: "start",
        //start：1番目から始める
        // center： 中央から始める
        // edges： 両端から始める
        // random： ランダムに始める
        // end： 最後から始める

      },
            ease: "power4.out", // イージング
    }
  );
});


document.addEventListener("DOMContentLoaded", function() {
  // SVG内のすべてのpath要素を取得
  const paths = document.querySelectorAll(".top_about_title svg path");
  
  // GSAPでアニメーションを適用
  gsap.fromTo(paths, 
    {
      opacity: 0,  // 初期状態で文字は透明
      y: 20,      // 文字を左から少しずらしておく
    }, 
    {
      opacity: 1,  // アニメーション後に文字は完全に表示
      y: 0,        // 文字は元の位置に戻る
      duration: 2,  // 各文字のアニメーション時間
      stagger: {
        // each: 指定した時間が経過した時に次の要素のアニメーションを開始する
        each: 0.05,
        // amount: アニメーションの総時間（eachかamountのどちらかを指定する）
        // amount: 1,
        from: "end",
        //start：1番目から始める
        // center： 中央から始める
        // edges： 両端から始める
        // random： ランダムに始める
        // end： 最後から始める

      },
            ease: "power4.out", // イージング
    }
  );
});
