//index.js
console.log("test");

/*
$(function () {
    $(".scr_fade_left").on(".scr_fade_left", function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass("is-show");
        }
    });
});
*/



let once01 = false;
window.addEventListener('scroll', function () {

    // ターゲットの画面トップからの距離
    var taeget_position01 = document.querySelector('#scr_01').getBoundingClientRect().top;

    // 画面トップからの距離から画面の高さより小さければ実行する
    if (taeget_position01 <= window.innerHeight && once01 !== true) {
        once01 = true;
        this.document.querySelector("#scr_01").classList.add("left-show");
    }
});

let once02 = false;
window.addEventListener('scroll', function () {

    // ターゲットの画面トップからの距離
    var taeget_position02 = document.querySelector('#scr_02').getBoundingClientRect().top;

    // 画面トップからの距離から画面の高さより小さければ実行する
    if (taeget_position02 <= window.innerHeight && once02 !== true) {
        once02 = true;
        this.document.querySelector("#scr_02").classList.add("is-show");
    }
});

let once03 = false;
window.addEventListener('scroll', function () {

    // ターゲットの画面トップからの距離
    var taeget_position03 = document.querySelector('#scr_03').getBoundingClientRect().top;

    // 画面トップからの距離から画面の高さより小さければ実行する
    if (taeget_position03 <= window.innerHeight && once03 !== true) {
        once03 = true;
        this.document.querySelector("#scr_03").classList.add("is-show");
    }
});